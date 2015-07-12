import _ from 'lodash'
import Promise from 'bluebird'
import { Bacon } from 'sigh-core'

function jspmTask(opts) {
  return function(events) {
    // TODO:
    return 'TODO'
  }
}

export default function(op, opts = {}) {
  var pooledProc = op.procPool.prepare(jspmTask, opts, { module })

  return op.stream.flatMapLatest(events => {
    // TODO: pooledProc.kill
    return Bacon.fromPromise(pooledProc(events))
  })
}
