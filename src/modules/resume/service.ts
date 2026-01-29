import db from '@/lib/db';
import { Skill, Education, Experience } from '@/.generated/prisma/client';

export class ResumeService {
  // --- Skills ---
  static async addSkill(data: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>) {
    return db.skill.create({ data });
  }

  static async getSkills() {
    return db.skill.findMany({ orderBy: { order: 'asc' } });
  }

  static async deleteSkill(id: string) {
      return db.skill.delete({ where: { id } });
  }

  // --- Education ---
  static async addEducation(data: Omit<Education, 'id' | 'createdAt' | 'updatedAt'>) {
    return db.education.create({ data });
  }

  static async getEducation() {
    return db.education.findMany({ orderBy: { startDate: 'desc' } });
  }

    static async deleteEducation(id: string) {
      return db.education.delete({ where: { id } });
  }

  // --- Experience ---
  static async addExperience(data: Omit<Experience, 'id' | 'createdAt' | 'updatedAt'>) {
    return db.experience.create({ data });
  }

  static async getExperience() {
    return db.experience.findMany({ orderBy: { startDate: 'desc' } });
  }

  static async deleteExperience(id: string) {
      return db.experience.delete({ where: { id } });
  }
}
