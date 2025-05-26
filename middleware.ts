import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest, res: NextResponse) {
      // Check if the request is a POST request
      if (req.method === 'POST') {
            // Get the request body
            const body = req.body;
            // Check if the request body is a string
            if (typeof body === 'string') {
                  // Parse the request body as JSON   
            }
      }
}