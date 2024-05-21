import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@UseInterceptors(CacheInterceptor)
@Controller('student')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
    ) { }

    @CacheTTL(0)
    @CacheKey('MyKey')
    @Get()
    async getStudnet() {
        try {
            // console.log('INSIDE CONTROLLER...');
            return await this.studentService.getStudent();
        } catch (e) {
            console.log(e);
        }
    }
}
