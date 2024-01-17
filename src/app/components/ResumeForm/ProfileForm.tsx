import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Nume"
          labelClassName="col-span-full"
          name="name"
          placeholder="Nume si prenume"
          value={name}
          onChange={handleProfileChange}
        />
        {/* <Textarea
          label="Objective"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Entrepreneur and educator obsessed with making education free for anyone"
          value={summary}
          onChange={handleProfileChange}
        /> */}
        <Input
          label="Email"
          labelClassName="col-span-3"
          name="email"
          placeholder="Adresa email"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Numar de telefon"
          labelClassName="col-span-3"
          name="phone"
          placeholder="Exemplu: +40735865229"
          value={phone}
          onChange={handleProfileChange}
        />
      </div>
      <Input
        label="Data nasterii"
        labelClassName="col-span-3"
        name="url"
        placeholder=""
        value={url}
        onChange={handleProfileChange}
      />
      <Input
        label="Adresa"
        labelClassName="col-span-3"
        name="location"
        placeholder=""
        value={location}
        onChange={handleProfileChange}
      />
    </BaseForm>
  );
};
