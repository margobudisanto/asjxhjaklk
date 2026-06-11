import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    // Image paths
    const imagePaths = [
      '/home/z/my-project/upload/IMG_6266.PNG',
      '/home/z/my-project/upload/IMG_6264.PNG',
      '/home/z/my-project/upload/IMG_6265.PNG',
      '/home/z/my-project/upload/leaflet NOVIA (embed file)-02 2.jpg.jpeg'
    ];

    // Build content with all images
    const content = [
      {
        type: 'text',
        text: question
      }
    ];

    // Add all images as base64
    for (const imagePath of imagePaths) {
      try {
        const imageBuffer = fs.readFileSync(imagePath);
        const base64Image = imageBuffer.toString('base64');
        const mimeType = imagePath.endsWith('.png') ? 'image/png' : 'image/jpeg';

        content.push({
          type: 'image_url',
          image_url: {
            url: `data:${mimeType};base64,${base64Image}`
          }
        });
      } catch (err) {
        console.error(`Failed to read image: ${imagePath}`, err);
      }
    }

    const response = await zai.chat.completions.createVision({
      messages: [
        {
          role: 'user',
          content: content
        }
      ],
      thinking: { type: 'disabled' }
    });

    const analysis = response.choices[0]?.message?.content;

    return NextResponse.json({
      success: true,
      analysis
    });
  } catch (error: any) {
    console.error('Image analysis error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze images' },
      { status: 500 }
    );
  }
}