import Link from "next/link";
import { resolve } from "styled-jsx/css";

async function getTickets() {
    //Loading
    await new Promise (resolve =>setTimeout(resolve, 3000))
    const res = await fetch('http://localhost:4000/tickets', {
        next:{
            revalidate : 0
        }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch tickets');
    }
    return res.json();
}

export default async function TicketList() {
    const tickets = await getTickets();
    return (
        <>
            {tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                <Link href={`/ticket/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">No tickets available, come back later</p>
            )}
        </>
    );
}
