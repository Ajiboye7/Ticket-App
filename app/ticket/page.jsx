import TicketList from "./TicketList";

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p>Currently Open tickets</p>
                </div>
            </nav>
            <TicketList />
        </main>
    );
}
