declare module 'piston-client' {
  interface ExecuteOptions {
    language: string;
    version?: string;
    files?: { name: string; content: string }[];
    stdin?: string;
    args?: string[];
    compileTimeout?: number;
    runTimeout?: number;
    compileMemoryLimit?: number;
    runMemoryLimit?: number;
  }

  interface ExecuteResult {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string;
  }

  interface Client {
    execute(language: string, source: string, options?: ExecuteOptions): Promise<ExecuteResult>;
  }

  function piston(): Client;
  export default piston;
}