import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error('RESEND_API_KEY não configurada.');
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message, website } = body;
    if (website) {
      return Response.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    }
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'mad.britto@gmail.com',
      subject: `Novo contato de ${name}`,
      html: `
                <h2>Novo contato pelo portfólio</h2>
                
                <p><strong>Nome:</strong> ${name}</p>

                <p><strong>E-mail:</strong> ${email}</p>

                <p><strong>Mensagem:</strong></p>

                <p>${message}</p>
            `,
    });

    return Response.json(
      {
        success: true,
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
