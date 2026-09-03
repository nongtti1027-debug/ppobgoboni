import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().trim().toLowerCase().email("올바른 이메일 주소를 입력해주세요."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다.").max(72),
  nickname: z
    .string()
    .trim()
    .min(1, "닉네임을 입력해주세요.")
    .max(20, "닉네임은 20자 이내로 입력해주세요."),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("올바른 이메일 주소를 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해주세요."),
});
