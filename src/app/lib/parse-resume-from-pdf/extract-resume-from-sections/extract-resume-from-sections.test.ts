import {
  matchOnlyLetterSpaceOrPeriod,
  matchEmail,
  matchPhone,
  matchUrl,
} from "lib/parse-resume-from-pdf/extract-resume-from-sections/extract-profile";
import type { TextItem } from "lib/parse-resume-from-pdf/types";

const makeTextItem = (text: string) =>
  ({
    text,
  } as TextItem);

describe("extract-profile tests - ", () => {
  it("Name", () => {
    expect(
      matchOnlyLetterSpaceOrPeriod(makeTextItem("Leonardo W. DiCaprio"))![0]
    ).toBe("Leonardo W. DiCaprio");
  });

  it("Phone", () => {
    expect(matchPhone(makeTextItem("  (123)456-7890  "))![0]).toBe(
      "(123)456-7890"
    );
  });
});
