type MessageType = {
    id?: number;
    from: string;
    body:string;
    type?: "deposit" | "profit";
    amount: number;
    balance: number;
    receivedAt: string;

}