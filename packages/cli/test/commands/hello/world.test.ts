import { runCommand } from "@oclif/test";
import { expect } from "chai";

describe("hello world", () => {
	it("runs hello world cmd", async () => {
		const { result } = await runCommand("hello world -f Luan");

		expect(result).to.equal(
			"hello world from Luan! (./src/commands/hello/index.ts)"
		);
	});
});
