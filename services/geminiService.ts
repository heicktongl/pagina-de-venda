
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { ImageSize, AspectRatio } from "../types";

export class GeminiService {
  private static instance: GeminiService;
  
  private constructor() {}

  static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  /**
   * Complex Reasoning with Search Grounding
   */
  async getHabitInsight(prompt: string): Promise<{ text: string; links: any[] }> {
    const ai = this.getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Você é um especialista em psicologia comportamental e engenharia de ambiente focado em fitness. Use dados reais e recentes."
      },
    });

    return {
      text: response.text || "Não foi possível gerar uma resposta no momento.",
      links: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  }

  /**
   * High Quality Image Generation (Gemini 3 Pro)
   */
  async generateTransformationImage(prompt: string, size: ImageSize = '1K'): Promise<string> {
    const ai = this.getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: size
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Falha ao gerar imagem.");
  }

  /**
   * Image Editing (Gemini 2.5 Flash Image)
   */
  async editWorkoutEnvironment(base64Image: string, editPrompt: string): Promise<string> {
    const ai = this.getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { data: base64Image.split(',')[1], mimeType: 'image/png' } },
          { text: editPrompt }
        ]
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Falha ao editar imagem.");
  }

  /**
   * Video Generation (Veo 3.1 Fast)
   */
  async generateMotivationalVideo(prompt: string, aspectRatio: AspectRatio = '16:9'): Promise<string> {
    const ai = this.getClient();
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 8000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }
}
