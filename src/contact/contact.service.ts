import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './create-contact.dto';

@Injectable()
export class ContactService {
    constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>) {}

    async create(createContactDto: CreateContactDto): Promise<Contact> {
        // const createdContact = new this.contactModel(createContactDto);
        // return createdContact.save();
        try {
            const createdContact = new this.contactModel(createContactDto);
            return await createdContact.save();
        } catch (error) {
            throw new Error('Error creating contact');
        }
    }

    async findAll(): Promise<Contact[]> {
        return this.contactModel.find().exec();
      }
}
