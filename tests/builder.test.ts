import { buildDiscoverUrl } from '../src'

describe('buildDiscoverUrl', function () {
  it('default', function () {
    const url = buildDiscoverUrl({
      host: 'http://kibana',
      filters: []
    })

    expect(url).toBe("http://kibana/app/kibana#/discover?_g=(time:(from:now-15m,mode:quick,to:now))&_a=(columns:!(_source),filters:!(),interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))")
  })

  it('with view id', function () {
    const url = buildDiscoverUrl({
      host: 'http://kibana',
      discoveryId: 'test-guid',
      filters: []
    })

    expect(url).toBe("http://kibana/app/kibana#/discover/test-guid?_g=(time:(from:now-15m,mode:quick,to:now))&_a=(columns:!(_source),filters:!(),interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))")
  })  

  it('with view id and index and id', function () {
    const url = buildDiscoverUrl({
      host: 'http://kibana',
      discoveryId: 'test-guid',
      filters: [],
      index: 'logstash-apps-*',
      indexId: 'test-index-guid'
    })

    expect(url).toBe("http://kibana/app/kibana#/discover/test-guid?_g=(time:(from:now-15m,mode:quick,to:now))&_a=(columns:!(_source),filters:!(),index:test-index-guid,interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))")
  })  
})
