import { spawnSync } from 'node:child_process';
import path from 'node:path';

const parsedConfigCount = Number.parseInt(process.env.GIT_CONFIG_COUNT ?? '0', 10);
const configCount = Number.isInteger(parsedConfigCount) && parsedConfigCount >= 0
  ? parsedConfigCount
  : 0;

const gitEnvironment = {
  ...process.env,
  GIT_CONFIG_COUNT: String(configCount + 2),
  [`GIT_CONFIG_KEY_${configCount}`]: 'http.version',
  [`GIT_CONFIG_VALUE_${configCount}`]: 'HTTP/1.1',
  [`GIT_CONFIG_KEY_${configCount + 1}`]: 'http.postBuffer',
  [`GIT_CONFIG_VALUE_${configCount + 1}`]: '52428800',
};

const executableName = process.platform === 'win32' ? 'markbind.cmd' : 'markbind';
const markbindExecutable = path.resolve('node_modules', '.bin', executableName);
const result = spawnSync(markbindExecutable, ['deploy', '--no-build'], {
  env: gitEnvironment,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
