import { InOutPut } from "freeathome-local-api-client";
import { getDataPointByPairingID } from "../src/util";

const datapoints: { [key: string]: InOutPut } = {
  dp0: {
    pairingID: 0,
    value: "0",
  },
  dp1: {
    pairingID: 1,
    value: "1",
  },
  dp2: {
    pairingID: 2,
    value: "2",
  },
};

describe("getDataPointByPairingID", () => {
  it("should throw if datapoints are undefined", () => {
    expect(() => getDataPointByPairingID(undefined, 1)).toThrowError(
      "Data point object is undefined"
    );
  });

  it("should throw no datapoint is found for the specified pairing ID", () => {
    expect(() => getDataPointByPairingID(datapoints, 4)).toThrowError(
      "No data point found for pairing ID 4"
    );
  });

  it("should get data point for existing pairing ID", () => {
    expect(getDataPointByPairingID(datapoints, 1)).toBe("dp1");
  });
});
