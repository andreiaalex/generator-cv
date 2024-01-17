import { Form, FormSection } from "components/ResumeForm/Form";
import {
  Input,
  BulletListTextarea,
} from "components/ResumeForm/Form/InputGroup";
import type { CreateHandleChangeArgsWithDescriptions } from "components/ResumeForm/types";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import {
  changeWorkExperiences,
  selectWorkExperiences,
} from "lib/redux/resumeSlice";
import type { ResumeWorkExperience } from "lib/redux/types";

export const WorkExperiencesForm = () => {
  const workExperiences = useAppSelector(selectWorkExperiences);
  const dispatch = useAppDispatch();

  const showDelete = workExperiences.length > 1;

  return (
    <Form form="workExperiences" addButtonText="Adauga mai multe">
      {workExperiences.map(({ company, jobTitle, date, jobCity, jobCountry, descriptions }, idx) => {
        const handleWorkExperienceChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeWorkExperience>
        ) => {
          // TS doesn't support passing union type to single call signature
          // https://github.com/microsoft/TypeScript/issues/54027
          // any is used here as a workaround
          dispatch(changeWorkExperiences({ idx, field, value } as any));
        };
        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== workExperiences.length - 1;

        return (
          <FormSection
            key={idx}
            form="workExperiences"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText="Stergere"
          >
            <Input
              label="Companie"
              labelClassName="col-span-full"
              name="company"
              placeholder="Numele companiei"
              value={company}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Titlu / Meserie"
              labelClassName="col-span-3"
              name="jobTitle"
              placeholder="Exemplu: zidar / dulgher"
              value={jobTitle}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Data"
              labelClassName="col-span-3"
              name="date"
              placeholder="Exemplu: Iunie 2011 - Mai 2020"
              value={date}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Oras"
              labelClassName="col-span-3"
              name="jobCity"
              placeholder="Orasul in care ati lucrat"
              value={jobCity}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Tara"
              labelClassName="col-span-3"
              name="jobCountry"
              placeholder="Tara in care ati lucrat"
              value={jobCountry}
              onChange={handleWorkExperienceChange}
            />
            <BulletListTextarea
              label="Descriere"
              labelClassName="col-span-full"
              name="descriptions"
              placeholder="Descriere"
              value={descriptions}
              onChange={handleWorkExperienceChange}
            />
          </FormSection>
        );
      })}
    </Form>
  );
};
