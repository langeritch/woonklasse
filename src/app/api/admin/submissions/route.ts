import { NextResponse } from 'next/server';
import { getSubmissions, markAsRead, deleteSubmission } from '@/lib/submissions';

export async function GET() {
  try {
    const submissions = await getSubmissions();
    return NextResponse.json({ success: true, submissions });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[admin/submissions] Error:', msg);
    return NextResponse.json(
      { success: false, message: msg },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, action } = (await request.json()) as { id: string; action: string };

    if (action === 'read') {
      await markAsRead(id);
    } else if (action === 'delete') {
      await deleteSubmission(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, message: msg },
      { status: 500 },
    );
  }
}
