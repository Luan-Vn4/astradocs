import { sayHello } from "@astradocs/core";
import { Args, Command, Flags } from "@oclif/core";

export default class Hello extends Command {
	static args = {
		person: Args.string({
			description: "Person to say hello to",
			required: true,
		}),
	};

	static description = "Say hello";

	static examples = [
		`<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
	];

	static flags = {
		from: Flags.string({
			char: "f",
			description: "Who is saying hello",
			required: true,
		}),
	};

	async run(): Promise<string> {
		const { args, flags } = await this.parse(Hello);

		const result = `hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`;

		sayHello();

		this.log(result);
		return result;
	}
}
