import _ from 'lodash'
import Promise from 'bluebird'
import ProcessPool from 'process-pool'
import { Bacon } from 'sigh-core'
import Event from 'sigh/lib/Event'

import jspm from '../'

require('source-map-support').install()
require('chai').should()

describe('sigh-jspm', () => {
  var procPool
  beforeEach(() => { procPool = new ProcessPool() })
  afterEach(() => { procPool.destroy() })

  // TODO: do proper work
  it('should delegate events to pooled process', () => {
    var data = 'var pump = () => "pumper"'
    var event = new Event({
      basePath: 'root',
      path: 'root/subdir/file.js',
      type: 'add',
      data
    })

    var stream = Bacon.constant([ event ])

    return jspm({ stream, procPool }).toPromise(Promise).then(events => {
      events.should.equal('TODO')
    })
  })
})
