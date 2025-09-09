enum RoomType {
    SINGLE = "Single",
    DOUBLE = "Double",
    SUITE = "Suite"
}

enum ReservationStatus {
    PENDING = "Pending",
    CONFIRMED = "Confirmed",
    CANCELLED = "Cancelled"
}

enum PaymentStatus {
    PENDING = "Pending",
    COMPLETED = "Completed",
    FAILED = "Failed"
}

interface ContactInfo {
    email: string;
    phone: string;
}

abstract class Person {
    constructor(
        protected id: number,
        protected name: string,
        protected contactInfo: ContactInfo
    ) { }

    getName(): string { return this.name; }
}

class Guest extends Person {
    private reservations: number[] = [];

    constructor(
        id: number,
        name: string,
        contactInfo: ContactInfo,
        private guestId: string
    ) {
        super(id, name, contactInfo);
    }

    getGuestId(): string {
        return this.guestId
    }

    addReservation(reservationId: number): void {
        this.reservations.push(reservationId);
    }

    removeReservation(reservationId: number): void {
        this.reservations = this.reservations.filter(id => id !== reservationId);
    }
}

class Room {
    private isAvailable: boolean = true;

    constructor(
        private roomNumber: number,
        private type: RoomType,
        private price: number
    ) { }

    getRoomNumber(): number {
        return this.roomNumber
    }

    getPrice(): number {
        return this.price
    }

    checkAvailability(): boolean {
        return this.isAvailable
    }

    setAvailable(available: boolean): void {
        this.isAvailable = available
    }
}

class Reservation {
    private payment: Payment | null = null;

    constructor(
        private reservationId: number,
        private guest: Guest,
        private room: Room,
        private checkIn: Date,
        private checkOut: Date,
        private status: ReservationStatus = ReservationStatus.PENDING
    ) {
        if (checkIn >= checkOut) {
            throw new Error("Check-in must be before check-out");
        }
    }

    getReservationId(): number {
        return this.reservationId
    }

    getGuest(): Guest {
        return this.guest
    }

    getRoom(): Room {
        return this.room
    }

    getStatus(): ReservationStatus {
        return this.status
    }

    getNights(): number {
        const diffTime = this.checkOut.getTime() - this.checkIn.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    getTotalAmount(): number {
        return this.room.getPrice() * this.getNights();
    }

    confirm(): void {
        if (this.status !== ReservationStatus.PENDING) {
            throw new Error("Only pending reservations can be confirmed");
        }
        this.status = ReservationStatus.CONFIRMED;
        this.room.setAvailable(false);
        this.guest.addReservation(this.reservationId);
    }

    cancel(): void {
        if (this.status === ReservationStatus.CANCELLED) {
            throw new Error("Reservation already cancelled");
        }
        this.status = ReservationStatus.CANCELLED;
        this.room.setAvailable(true);
        this.guest.removeReservation(this.reservationId);
    }

    setPayment(payment: Payment): void {
        this.payment = payment;
    }
}

class Payment {
    private status: PaymentStatus = PaymentStatus.PENDING;

    constructor(
        private paymentId: number,
        private amount: number,
        private date: Date = new Date()
    ) { }

    getPaymentId(): number {
        return this.paymentId
    }

    getAmount(): number {
        return this.amount
    }

    getStatus(): PaymentStatus {
        return this.status
    }

    process(): boolean {
        try {
            if (this.amount <= 0) {
                throw new Error("Payment amount must be positive");
            }
            this.status = PaymentStatus.COMPLETED;
            return true;
        } catch {
            this.status = PaymentStatus.FAILED;
            return false;
        }
    }
}

class Hotel {
    private rooms: Map<number, Room> = new Map();
    private guests: Map<string, Guest> = new Map();
    private reservations: Map<number, Reservation> = new Map();
    private payments: Map<number, Payment> = new Map();
    private nextReservationId: number = 1;
    private nextPaymentId: number = 1;

    constructor(private name: string) { }

    getName(): string { return this.name; }

    addRoom(room: Room): void {
        if (this.rooms.has(room.getRoomNumber())) {
            throw new Error(`Room ${room.getRoomNumber()} already exists`);
        }
        this.rooms.set(room.getRoomNumber(), room);
    }

    getRoom(roomNumber: number): Room | undefined {
        return this.rooms.get(roomNumber);
    }

    getAvailableRooms(): Room[] {
        return Array.from(this.rooms.values()).filter(room => room.checkAvailability());
    }

    addGuest(guest: Guest): void {
        if (this.guests.has(guest.getGuestId())) {
            throw new Error(`Guest ${guest.getGuestId()} already exists`);
        }
        this.guests.set(guest.getGuestId(), guest);
    }

    getGuest(guestId: string): Guest | undefined {
        return this.guests.get(guestId);
    }

    makeReservation(guestId: string, roomNumber: number, checkIn: Date, checkOut: Date): Reservation {
        const guest = this.getGuest(guestId);
        const room = this.getRoom(roomNumber);

        if (!guest) throw new Error(`Guest ${guestId} not found`);
        if (!room) throw new Error(`Room ${roomNumber} not found`);
        if (!room.checkAvailability()) throw new Error(`Room ${roomNumber} not available`);

        const reservation = new Reservation(
            this.nextReservationId++,
            guest,
            room,
            checkIn,
            checkOut
        );

        this.reservations.set(reservation.getReservationId(), reservation);
        return reservation;
    }

    confirmReservation(reservationId: number): void {
        const reservation = this.reservations.get(reservationId);
        if (!reservation) throw new Error(`Reservation ${reservationId} not found`);
        reservation.confirm();
    }

    processPayment(reservationId: number, amount: number): Payment {
        const reservation = this.reservations.get(reservationId);
        if (!reservation) throw new Error(`Reservation ${reservationId} not found`);

        const payment = new Payment(this.nextPaymentId++, amount);

        if (payment.process()) {
            this.payments.set(payment.getPaymentId(), payment);
            reservation.setPayment(payment);
            return payment;
        } else {
            throw new Error("Payment processing failed");
        }
    }

    getTotalRevenue(): number {
        return Array.from(this.payments.values())
            .filter(p => p.getStatus() === PaymentStatus.COMPLETED)
            .reduce((total, p) => total + p.getAmount(), 0);
    }

    getOccupancyRate(): number {
        const total = this.rooms.size;
        const available = this.getAvailableRooms().length;
        return total > 0 ? ((total - available) / total) * 100 : 0;
    }
}

try {
    const hotel = new Hotel("Grand Baku Hotel");
    console.log(hotel.getName());

    hotel.addRoom(new Room(101, RoomType.SINGLE, 100));
    hotel.addRoom(new Room(201, RoomType.DOUBLE, 150));
    hotel.addRoom(new Room(301, RoomType.SUITE, 250));
    console.log(`${hotel.getAvailableRooms().length} otaq əlavə edildi`);

    const guest1 = new Guest(1, "Əli Məmmədov",
        { email: "ali@email.com", phone: "+994501111111" }, "GUEST001");
    hotel.addGuest(guest1);
    console.log(`Qonaq ${guest1.getName()} qeydiyyatdan keçdi`);

    const checkIn = new Date("2025-09-15");
    const checkOut = new Date("2025-09-18");

    const reservation = hotel.makeReservation("GUEST001", 201, checkIn, checkOut);
    console.log(`Rezervasiya ${reservation.getReservationId()} yaradıldı`);
    console.log(`Məbləğ: ${reservation.getTotalAmount()}, Gecələr: ${reservation.getNights()}`);

    hotel.confirmReservation(reservation.getReservationId());
    console.log(`Rezervasiya ${reservation.getReservationId()} təsdiqləndi`);

    const payment = hotel.processPayment(reservation.getReservationId(), reservation.getTotalAmount());
    console.log(`Ödəmə ${payment.getPaymentId()} tamamlandı`);

    console.log(`\nDoluluk faizi: ${hotel.getOccupancyRate().toFixed(1)}%`);
    console.log(`Ümumi gəlir: ${hotel.getTotalRevenue()}`);
    console.log(`Müsait otaqlar: ${hotel.getAvailableRooms().length}`);

} catch (error) {
    console.error(`Xəta: ${error instanceof Error ? error.message : error}`);
}