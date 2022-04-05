import { renderHook } from "@testing-library/react-hooks";
import { useERC20 } from "../hooks";

describe("useERC20", () => {
  it("should return a contract", async () => {
    const { result } = renderHook(() =>
      useERC20("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c")
    );

    expect(result.current).toBeDefined();
  });
});
