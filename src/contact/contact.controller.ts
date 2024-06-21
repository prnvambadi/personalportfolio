import { Body, Controller, Get, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './create-contact.dto';

@Controller('contact')
export class ContactController {
    constructor ( private readonly contactService : ContactService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
   async create(@Body() createContactDto : CreateContactDto) {
        // return this.contactService.create(createContactDto);
        try {
            return this.contactService.create(createContactDto)
        } catch (error) {
            throw new HttpException('Failed to create contact', HttpStatus.BAD_REQUEST);

        }
    }

    @Get() 
    findAll() {
        return this.contactService.findAll();
    }
}
