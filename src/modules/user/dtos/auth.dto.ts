import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  // @IsString()
  // @Matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)

  @IsNotEmpty()
  telephone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  password: string;
}