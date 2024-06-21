import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email!: string;

  @IsString()
  @IsNotEmpty()
  readonly phone!: string;  

  @IsString()
  @IsNotEmpty()
  readonly subject!: string;

  @IsString()
  @IsNotEmpty()
  readonly message!: string;
}
