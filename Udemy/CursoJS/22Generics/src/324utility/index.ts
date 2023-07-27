// Record
const objeto1: Record<string, string | number> = {
  nome: 'Fabrício',
  sobrenome: 'Grigolo',
  idade: 21
}
console.log(objeto1)

type PessoaProtocol = {
  nome?: string,
  sobrenome?: string;
  idade?: number;
}

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome'| 'sobrenome' >;


const objeto2: PessoaRequired = {
  nome: 'Fabrício',
  sobrenome: 'Grigolo',
  idade: 21
}

// Extract e Exclude
type ABC = "A" | "B" | "C"
type CDE = "C" | "D" | "E"
type TipoExclude = Exclude<ABC, CDE>
type TipoExtract = Extract<ABC, CDE>

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
}

const accountMongo: AccountMongo = {
  _id: "sajdoiasgudioasdasnd",
  nome: "Fabrício",
  idade: 21,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const {_id, ...acountData} = accountMongo;
  return { ...acountData, id: _id};
}

const accountApi = mapAccount(accountMongo);
console.log("API:");
console.log(accountApi);

// Module mode
export default 1;
