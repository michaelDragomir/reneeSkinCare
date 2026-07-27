import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		const contactEmail = process.env.CONTACT_EMAIL;
		if (!contactEmail) {
			return NextResponse.json(
				{ error: 'Server configuration error' },
				{ status: 500 }
			);
		}

		const response = await resend.emails.send({
			from: 'Contact Form <noreply@lysbyrenee.com>',
			to: contactEmail,
			replyTo: email,
			subject: subject || `New message from ${name}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject || 'No subject'}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`,
		});

		return NextResponse.json({ success: true, id: response.data?.id });
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{ error: 'Failed to send message' },
			{ status: 500 }
		);
	}
}
