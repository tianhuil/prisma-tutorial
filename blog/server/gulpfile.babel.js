'use strict';

import gulp from 'gulp';
import { exec } from 'child_process';

const execAndSignal = (command) => {
  return (done) => {
    exec(command, (err, stdout, stderr) => {
      console.log(stdout)
      console.log(stderr)
      done(err)
    })
  }
}

gulp.task("deploy", execAndSignal("yarn prisma deploy"))

gulp.task("schema", execAndSignal("yarn graphql get-schema -p prisma"))

gulp.task("codegen", execAndSignal("yarn graphql codegen -p prisma"))

gulp.task("seed", execAndSignal("yarn ts-node src/seed.ts src/seed.graphql"))

gulp.task("build-dev",
  gulp.series("deploy", gulp.parallel("schema", "codegen"))
)

gulp.task("test-watch", () => {
  gulp.watch(
    ["test/**/*.ts", "src/**/*.ts"],
    {
      ignoreInitial: false,
      usePolling: true,
    },
    execAndSignal("yarn ts-node test/server.ts")
  )
})

gulp.task("test",  gulp.series("deploy", "test-watch"))
