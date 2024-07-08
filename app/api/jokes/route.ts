import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Handler for GET requests
export async function GET(request: NextRequest) {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Programming');
    console.log('Joke fetched successfully:', response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching joke:', error);
    return NextResponse.json({ error: 'Failed to fetch joke' }, { status: 500 });
  }
}
