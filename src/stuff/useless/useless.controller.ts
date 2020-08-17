import { Controller, UseGuards, Get } from '@nestjs/common';
import { RubbishResponse } from '../dto/RubbishResponse.dto';
import { DumpsterguardGuard } from '../dumpsterguard.guard';

@Controller()
export class UselessController {
    @Get("news")
    getNews(): RubbishResponse {
        return new RubbishResponse()
    }

    @UseGuards(DumpsterguardGuard)
    @Get("profiles")
    getProfile(): RubbishResponse {
        return new RubbishResponse()
    }
}
