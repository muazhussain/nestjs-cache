import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class StudentService {
    constructor(
        @Inject('CACHE_MANAGER') private readonly cacheManager: Cache,
    ) { }

    async getStudent() {
        try {
            // console.log('INSIDE SERVICE...');
            const cachedData = await this.cacheManager.get('student');
            if (cachedData) {
                return cachedData;
            }
            const studentData = await this.retriveStudentFromDB();
            return studentData;
        } catch (e) {
            throw e;
        }
    }

    async retriveStudentFromDB() {
        try {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const student = [
                        { name: 'john', age: 20, cgpa: 3.5 },
                        { name: 'Jane', age: 22, cpga: 3.8 },
                        { name: 'Bob', age: 25, cgpa: 3.2 },
                    ];
                    resolve(student);
                }, 1000);
            });
        } catch (e) {
            throw e;
        }
    }
}