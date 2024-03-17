import { NextResponse } from "next/server"

const GET = () => {
    return NextResponse.json({ result: true })
}

export default GET;