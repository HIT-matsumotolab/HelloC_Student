import * as cp from 'child_process'

import { loadEnvConfig } from '@next/env'
import gulp from 'gulp'

loadEnvConfig(process.env.PWD ?? '')

gulp.task('generate-api-client', (done) => {
  cp.spawnSync(
    'npx @openapitools/openapi-generator-cli',
    [
      'generate',
      '-g',
      'typescript-nestjs',
      '-i',
      `${process.env.NEXT_PUBLIC_API_URL ?? ''}api-yaml`,
      '-o',
      './openapi-generator/HelloC_API',
      '-c',
      './openapi/config.yml'
    ],
    {
      stdio: [process.stdin, process.stdout, process.stderr],
      shell: true
    }
  )
  done()
})
