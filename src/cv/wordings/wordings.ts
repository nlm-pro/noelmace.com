import type { ResumeAccomplishmentsWordings } from '../accomplishments';
import type { ResumeEducationWordings } from '../education';
import type { ResumeExperienceWordings } from '../experience';
import type { ResumeIntroWordings } from '../intro';
import type { ResumeMiscWordings } from '../misc';
import type { ResumePresentationWordings } from '../presentation';

export interface ListSectionWording {
  title: string;
  content
  : string[];
}

export interface ResumeWordings {
  presentation: ResumePresentationWordings;
  intro: ResumeIntroWordings;
  experience: ResumeExperienceWordings;
  education: ResumeEducationWordings;
  accomplishments: ResumeAccomplishmentsWordings;
  misc: ResumeMiscWordings;
}
