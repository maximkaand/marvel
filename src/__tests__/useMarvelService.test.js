import React from "react";
import { render, act } from "@testing-library/react";
import useMarvelService from "../services/MarvelService";

jest.mock("../services/MarvelService");
describe("useMarvelService", () => {
  it("should fetch all characters", async () => {
    const mockGetAllCharacters = jest.fn().mockResolvedValue([
      {
        id: 1,
        name: "Character 1",
        description: "Description for Character 1",
      },
      {
        id: 2,
        name: "Character 2",
        description: "Description for Character 2",
      },
    ]);
    useMarvelService.mockReturnValue({
      getAllCharacters: mockGetAllCharacters,
    });
    let characters;
    await act(async () => {
      characters = await useMarvelService().getAllCharacters();
    });
    expect(mockGetAllCharacters).toHaveBeenCalled();
    expect(characters).toEqual([
      {
        id: 1,
        name: "Character 1",
        description: "Description for Character 1",
      },
      {
        id: 2,
        name: "Character 2",
        description: "Description for Character 2",
      },
    ]);
  });
});
