import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Project } from './entity/projects.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService]
})
export class ProjectsModule {}
