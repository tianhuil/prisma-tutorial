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

gulp.task("seed", execAndSignal("yarn graphql query src/seed.graphql -p prisma -o seed "))

gulp.task("watch-dev", execAndSignal("yarn nodemon -e ts,graphql -x ts-node src/index.ts"))

gulp.task("build-dev",
  gulp.series(
    "deploy",
    gulp.parallel("schema", "codegen"),
    "seed",
  )
)

gulp.task("test-watch", () => {
  gulp.watch(
    [ "test/**/*.ts", "src/**/*.graphql", "src/**/*.ts" ],
    { ignoreInitial: false },
    // bash cannot error below for watch to work
    execAndSignal("yarn ts-node test/server.ts || true")
  )
})

gulp.task("test",  gulp.series("deploy", "test-watch"))
