module.exports = (() => {
  var __webpack_modules__ = {
      25545: (e) => {
        function t(e) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        ;(t.keys = () => []), (t.resolve = t), (t.id = 25545), (e.exports = t)
      },
      44692: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => g })
        var n = r(54143)
        const i = { optional: !0 },
          o = [
            ['@samverschueren/stream-to-observable@*', { peerDependenciesMeta: { rxjs: i, zenObservable: i } }],
            ['any-observable@<0.5.1', { peerDependenciesMeta: { rxjs: i, zenObservable: i } }],
            ['@pm2/agent@<1.0.4', { dependencies: { debug: '*' } }],
            ['debug@*', { peerDependenciesMeta: { 'supports-color': i } }],
            ['got@<11', { dependencies: { '@types/responselike': '^1.0.0', '@types/keyv': '^3.1.1' } }],
            ['cacheable-lookup@<4.1.2', { dependencies: { '@types/keyv': '^3.1.1' } }],
            ['http-link-dataloader@*', { peerDependencies: { graphql: '^0.13.1 || ^14.0.0' } }],
            [
              'typescript-language-server@*',
              {
                dependencies: {
                  'vscode-jsonrpc': '^5.0.1',
                  'vscode-languageserver-protocol': '^3.15.0',
                },
              },
            ],
            [
              'postcss-syntax@*',
              {
                peerDependenciesMeta: {
                  'postcss-html': i,
                  'postcss-jsx': i,
                  'postcss-less': i,
                  'postcss-markdown': i,
                  'postcss-scss': i,
                },
              },
            ],
            ['jss-plugin-rule-value-function@<=10.1.1', { dependencies: { 'tiny-warning': '^1.0.2' } }],
            ['ink-select-input@*', { peerDependencies: { react: '^16.8.2' } }],
            ['promise-inflight@*', { peerDependenciesMeta: { bluebird: i } }],
            ['reactcss@*', { peerDependencies: { react: '*' } }],
            ['react-color@<=2.19.0', { peerDependencies: { react: '*' } }],
            ['gatsby-plugin-i18n@*', { dependencies: { ramda: '^0.24.1' } }],
            ['useragent@^2.0.0', { dependencies: { request: '^2.88.0', yamlparser: '0.0.x', semver: '5.5.x' } }],
            ['@apollographql/apollo-tools@*', { peerDependencies: { graphql: '^14.2.1 || ^15.0.0' } }],
            ['material-table@^2.0.0', { dependencies: { '@babel/runtime': '^7.11.2' } }],
            ['@babel/parser@*', { dependencies: { '@babel/types': '^7.8.3' } }],
            [
              'fork-ts-checker-webpack-plugin@*',
              {
                peerDependencies: { eslint: '>= 6', typescript: '>= 2.7', webpack: '>= 4' },
                peerDependenciesMeta: { eslint: i },
              },
            ],
            ['rc-animate@*', { peerDependencies: { react: '^15.0.0 || ^16.0.0', 'react-dom': '^15.0.0 || ^16.0.0' } }],
            ['react-bootstrap-table2-paginator@*', { dependencies: { classnames: '^2.2.6' } }],
            ['react-draggable@<=4.4.3', { peerDependencies: { react: '>= 16.3.0', 'react-dom': '>= 16.3.0' } }],
          ]
        let A, s, a
        const c = new Map([
            [
              n.makeIdent(null, 'fsevents').identHash,
              function () {
                return (
                  void 0 === A &&
                    (A = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          'G7weAByFTVk3Vs7UfHhq4yykgEM7pbW7TI43SG2S5tvGrwHBAzdz+s/npQ6tgEvobvxisrPIadkXeUAJotBn5bDZ5kAhcRqsIHe3F75Walet5hNalwgFDtxb0BiDUjiUQkjG0yW2hto9HPgiCkm316d6bC0kST72YN7D7rfkhCE9x4J0XwB0yavalxpUu2t9xszHrmtwalOxT7VslsxWcB1qpqZwERUra4psWhTV8BgwWeizurec82Caf1ABL11YMfbf8FJ9JBceZOkgmvrQPbC9DUldX/yMbmX06UQluCEjSwUoyO+EZPIjofr+/oAZUck2enraRD+oWLlnlYnj8xB+gwSo9lmmks4fXv574qSqcWA6z21uYkzMu3EWj+K23RxeQlLqiE35/rC8GcS4CGkKHKKq+zAIQwD9iRDNfiAqueLLpicFFrNsAI4zeTD/eO9MHcnRa5m8UT+M2+V+AkFST4BlKneiAQRSdST8KEAIyFlULt6wa9EBd0Ds28VmpaxquJdVt+nwdEs5xUskI13OVtFyY0UrQIRAlCuvvWivvlSKQfTO+2Q8OyUR1W5RvetaPz4jD27hdtwHFFA1Ptx6Ee/t2cY2rg2G46M1pNDRf2pWhvpy8pqMnuI3++4OF3+7OFIWXGjh+o7Nr2jNvbiYcQdQS1h903/jVFgOpA0yJ78z+x759bFA0rq+6aY5qPB4FzS3oYoLupDUhD9nDz6F6H7hpnlMf18KNKDu4IKjTWwrAnY6MFQw1W6ymOALHlFyCZmQhldg1MQHaMVVQTVgDC60TfaBqG++Y8PEoFhN/PBTZT175KNP/BlHDYGOOBmnBdzqJKplZ/ljiVG0ZBzfqeBRrrUkn6rA54462SgiliKoYVnbeptMdXNfAuaupIEi0bApF10TlgHfmEJAPUVidRVFyDupSem5po5vErPqWKhKbUIp0LozpYsIKK57dM/HKr+nguF+7924IIWMICkQ8JUigs9D+W+c4LnNoRtPPKNRUiCYmP+Jfo2lfKCKw8qpraEeWU3uiNRO6zcyKQoXPR5htmzzLznke7b4YbXW3I1lIRzmgG02Udb58U+7TpwyN7XymCgH+wuPDthZVQvRZuEP+SnLtMicz9m5zASWOBiAcLmkuFlTKuHspSIhCBD0yUPKcxu81A+4YD78rA2vtwsUEday9WNyrShyrl60rWmA+SmbYZkQOwFJWArxRYYc5jGhA5ikxYw1rx3ei4NmeX/lKiwpZ9Ln1tV2Ae7sArvxuVLbJjqJRjW1vFXAyHpvLG+8MJ6T2Ubx5M2KDa2SN6vuIGxJ9WQM9Mk3Q7aCNiZONXllhqq24DmoLbQfW2rYWsOgHWjtOmIQMyMKdiHZDjoyIq5+U700nZ6odJAoYXPQBvFNiQ78d5jaXliBqLTJEqUCwi+LiH2mx92EmNKDsJL74Z613+3lf20pxkV1+erOrjj8pW00vsPaahKUM+05ssd5uwM7K482KWEf3TCwlg/o3e5ngto7qSMz7YteIgCsF1UOcsLk7F7MxWbvrPMY473ew0G+noVL8EPbkmEMftMSeL6HFub/zy+2JQ==',
                          'base64'
                        )
                      )
                      .toString()),
                  A
                )
              },
            ],
            [
              n.makeIdent(null, 'resolve').identHash,
              function () {
                return (
                  void 0 === s &&
                    (s = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          'G1QTIIzURnVBnGa0VPvr81orV8AFIqdU0sqrdcVgCdukgAZwi8a50gLk9+19Z2NcUILjmzXkzt4dzm5a6Yoys+/9qnKiaApXukOiuoyUaMcynG4X7X4vBaIE/PL30gwG6HSGJkLxb9PnLjfMr+748n7sM6C/NycK6ber/bX1reVVxta6W/31tZIhfrS+upoE/TPRHj0S/l0T59gTGdtKOp1OmMOJt9rhfucDdLJ2tgyfnO+u4YMkQAcYq/nebTcDmbXhqhgo6iQA4M3m4xya4Cos3p6klmkmQT+S4DLDZfwfMF+sUCx36KleOtaHLQfEIz0Bmncj/Ngi3lqOl4391EWEfIss6gVp3oDUGwsSZJKeOVONJWZg+Mue3KUMV3aMqYJ+7b2219D+GFDi8EV5y/Y+5J+He0oNjKAgqLsJziEsS9uIaCu3BHBKSXxNKKa2ShbfglcWoiiVT2kfGI7Gw+YJ/Sqy1H6wdFWtyVUQIa82JPwbeV25YKLzc5ZIFM6GCPSA+J9dTvJbs5LuuKnLP3f09gCu2jxqsAv6CA+ZySVaUJr2d3A70BC/uBCKr2OVrWgC3fSwb7NlfkgSEEiejrMGvhya9lMbVI6lMsFKN330A1/FOaefHQdNGLEZ3IwFF87H3xVlM0Xxsmbi/7A60oymRcIe0tH90alG6ez/yA7jwYotxuHWZdR+1HlMcddGHAV6QD/gXYPV0wnNv47I+5FGevzZFMqWSO8GU4nQ3FjsdgdJcD+c1rvudERKuLyd7bxiBpnsMDHsvPP4nXdXkld/gUNks3GAE1Otmb90bavDyiw4Mrx496Iw+jbLTgsCZGZXSZ9vM55C7KGe4HyJAKXEk0iT/Cj/PFwLJBN7pcP7ZFfYtUApGTWKkYhI9IE2zt/5ByH72wdvH+88b71zuv/FMCX3w6x5nzhY44Cg5IYv9LeKwHuHIWgPbfgrAcUxOlKkPRdQOIDF/aBuLPJAXD+TgxCNXx4jQxeR/qlBWVikFPfEI4rXMUc4kZ2w9KbPKYRvFUag0dVlVoyUP4zfidbTXAdZF88jAckl+NHjLFCNdX7EQ1PbLSOl+P+MqgwEOCi6dxgWZ7NCwJBjWKpk1LaxwKrhZ4aEC/0lMPJYe5S8xAakDcmA2kSS86GjEMTrv3VEu0S0YGZcxToMV524G4WAc4CReePePdipvs4aXRL5p+aeN96yfMGjsiTbQNxgbdRKc+keQ+NxYIEm1mBtEO29WrcbrqNbQRMR66KpGG4aG0NtmRyZ2JhUvu0paCklRlID8PT3gSiwZrqr4XZXoBBzBMrveWCuOg7iTgGDXDdbGi8XHkQf5KXDGFUxWueu5wkSa6gMWY1599g2piQjwBKIAPt4N5cOZdFBidz2feGwEAy1j1UydGxDSCCUsh314cUIIRV/dWCheceubL2gU8CibewmP7UxmN5kN4I7zfQhPxkP0NCcei8GXQpw4c3krEzW7PR2hgi/hqqqR58UJ/ZVfWxfcH5ZKMo4itkmPK0FCGxzzIRP20lK/gz28Y03sY233KvSVWUKl9rcbX6MbHjpUG8MvNlw72p6FwTejv92zgpnCxVJnIHHZhCBxNcHF5RTveRp513hUtTHHq4BIndlytZT5xoTSYfHKqKNr4o9kcGINIz6tZSKRdtbON3Ydr9cgqxHIeisMNIsvPg/IFMZuBbSqqDLeSO5dak1cGr76FtH2PC7hs0S0Oq3GsmF1Ga4YABAMGcdPAWzTk26B7cKV91I2b0V/GYvnsEQ1YGntRqi5EQqTlgZszbV/32GuZtUF49JOA/r4jAdwUOsbPo6mNoBlJPYjM5axrZaWQf33bFsLWqiyvvDOM4x0Ng802T7cuP2a3q98GWq6yiq6q3M77hcZlOUnmryctRYmI4Hb2F5XixFohkBmySCjU+M7/WQVE5YAtnlxiUJDhFN0y1tNeMWY9E0MfZi2rQ4eC72WXjsAA==',
                          'base64'
                        )
                      )
                      .toString()),
                  s
                )
              },
            ],
            [
              n.makeIdent(null, 'typescript').identHash,
              function () {
                return (
                  void 0 === a &&
                    (a = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          'WwTHE0VJZ1EiirocWP1nRPVqFwGtDzi5iuVI9CSEGFINry5Crdfrz3FEvOnNRn6iYgHiEVr6SN6m+0fpGijvgBq3TDi+8VuugLT4/+un7bNZ3TpkCDX5YxVTIkiY80s479H6bEv19SV0AT6fTLt9Udb4dW0XMpXdVp02DdJDo1BdAlb9NVW4egiWLUl21R88m00CD+WYqGyFqjOVUxEHDXQ52K8i5aLm///eXqW2U3ol1K0Aloq1Qtvse/Y70tT412S+Ri613XPPfW+qynx9LWuU2mDHrREcQoODgiRG50vf7igRlFmYURoAKH7ftFme54b6r+1SmnRIlNgMtQt5uBibCI9TCGPiPL3sXGM3oSUK0G0NPFmhAFY+RmpNx/zZ5BQXIg5QLyXSlDXbUIWOIKC46iVsEuf/9t3eI45DF7jJRXcnOT39L/C/Gw1X/0wYLfV9+dn4S2vBuv5d+l7+sFUm/2GeXx1B+OC3xvKByq9/1kd57hP/tNK68dlGRMKdX1irIT4w8fwRfX/hfVwjNX4gp1pPd0iteMNi/tccCXnHAnVHSXsjwk0aLwvEI7ckV2AUlZ4Duu+rkTc4C7zjSgoLpZZfOE+2gEeTyDTl+8y6UtDsvzYW+dNptv9VFDjWXeC/rrvPiSHyY3oLsX7Lkvka84crOU94gwXz7V04OlBGngHXMbTuGzHQMQAbOt5hkARTX1sCi1XkF3lEo9bYx/hEUWu12wzDxm596IguOEJ0dcGkG329p5KztIDhd65DAyv/NFZDNMvyMe5aX5N4jWJlvGNXAD3BKGK766UBfd3V1CtBO+T+DvEu2Xoxfnox/dyWMoMdFWwNsPFE0/n/kEBPkw/Dy2cTy+7zsnB24IH1Fv90VBQAz0eoCFmSkk4XULyMpH+s6XwioMms5N4knFpXsyb1CFH/OlHjRWVdmlwyy5frhhVZUwrJMFkc/yJPJuO25grF6gsjN+kJ3WtpU+ngArn02EC4mnRFQtDj5VMVkYFgKTS+3WZyJ0cqAD8dMkdhjGA4KK+F9rBQDR4o5tlYf0Au3ohISIiwKPgJqBX+otfF+l+0QXbJutSLjj2H4MhnvMnXlMNjNJgyWVwNhH3ewlQ9i73bJu8jc8AVCOA0nnjw+fMl0tWysruj7MpVfv2MfkRRERw5ydf80vssPsoM164+7z+JRcKzS9w/0LbeNPENe3J2JXACAgMKMx5EjWLggQ3AbgkbTmI8ZT3WHgat9ZH2Nvp5e3Dd+tSggpeeBa9WKi3TPij+KpSS9EZKQ0XVkFtSgNry4mChXvVpzXM9nxPrNUhLXj4p+1XOKlFrfSlZlQWuRxYIrBxlS+ZueqOoe3QrSIoHAjWHMvP9nfVfU69TwHUUBONeO8R0gjEk8YMVre3JF5jD8XwIWkuiKgo2BE1WXCIJmFzUkRSIlsma1qgqcIzvdyPiixtbAqjGus2oGU6Q2bvW2pfnDfsYbF7cTCYtiHVsjR2TWBbKfGOJjixlIPiDCCokLnLj0OcR1AtS52mfeQSVJnEBIg+QF5lyjLIRtxSdOcruxp+3P52dkKyLFbn4oi1JngIyGztfspKqjmQswh6rlaWIrxLnSgcrWZzz3funWxXsoSIWguxJrT/y1OYIeK5HnzTTdHKfFettYqGsM7eFdfWUz0roTWCufCWqT77t0Ic/D43cZahDXtUvGGwKkvOnOHqjOyENuMQea93BZEW7JvkfnzFkuNNFM27kaJo2g7pp1KiblFg2NkqZAlGKDdxPyzhexsPYkZ9U9stnjc3NLxjRT2nSG5dLQe9RaLnJIL+onLpULPIhMDw/CH7OrT7XVh3AHOeesGmsnhku8vq1svJNJjZFKAEVOehnT/VYfI5Alh2tFbuVG83Wzve5uQ2Z3cLHjcOll2L5UGD/NHg+h1r7FPwn5kcIUDBRMAo2q7cqevFuBs/brLpHK/9yMHtOn54j6Dkb1+Eg+HTt8dxZFflna8XIOwJSWv213GYyC8C90+K2miGJPYhahfSB8Q7XbUrufiPD8g/yQO2QY47zGRn0PDw3DiPTuvWpzsfvRJW3rVnHnpdphuIvKTrrKqu3u5R8OH6Q9OzFxO3eaJPw/5hGoJ9x/nS471j4b7ys+IYu/FllOqGdPEQleOH+RSe9nZs2SxOaTwZOABtHxsuXHAyYN2KbrCdJZT30oRhfE6B8xkEI9e9hHWkgynII15K1p2QcPVxAtM5wACLCxhHH4QTiNaqNXVHcrqwtUw/XTbymG8DS0CUKlqRCci1b0FB+GtKSoLEIf6r26IfQqSkSAILuWsrIP83RCJg4wKE1PuZfgcjSgYRKa6ZZ8rl+e81YznIPJzBHTlY55mOE7xGCqQgznFA7GMI/lWNJPqYoWtCRfNTw0SPPcvlWHThfAMxoqkgX2GrFb6bYFaRoJl8MlL2heSniBNrqHWaKqv8Hn06XnmvFN955ucjUJ2i0YK+3zJcSFAZMfm+gLk/F0rWPQMk3ctMcQOdET+HjFKu3zsFfpGp4OmUfN+HP2S3ClQY7csqBOcJQIFGzP6UxPt8UEKLUb8UWW05KPzAn2gm2kSHDSWXl4nIGlkZ4p6zPDH7OMo+mW7JGLaH3gN7Rapp0uyV43Xefbl+98XTH52qVrTXk1hhY/q1PpXETvgiaO1iGw2egYC7ZjEmtR22aQ24s7+4qWHWZ38B3d+TLZMNN5I0Nb7lfIOfrWxpatKSPX+1dKRFMvRBafjO+Oi3jC3jJ94CYzunZyfbLSZhwSj1VfW2SOJIZLDPURF/9roTCmzkhSXGCtIBlG+ZYIppmh3GNzdk7rtQHvTBxUbibCkLMvFZ1YZjQlC82TXwlO1GKxvovNhYW7My4a58ksDQ+0WTAmDOgxoYmg2RRPUGZFghVLYEhzbrVoB/48gkm6mFp2bs5u9kMEGXYzm0vNscUWBVR3NOFlgP8mnDb4IHu7r6AEI+96eLQF15gHSkpR2KudOo04y/ui/6rfXQ0sGkpeQg+kcbhtvSETaYZwel8TNGRCZUvwxC6yScRkwDvhykTyMTSfXZnVEidEObs0uOM4GZEGf7dxGjDr2MG1NnjCrbytGTcqhmYxVNmQui7X3R8E4iEJR6m8JPO8tg+2qbTrT5ZXoQbXnxwLNrXe47lsLsHGt+K7tKgWjt4wjVY1wnQ2GPbrKc3WPE1WG01HZ9yheUjXTK7gZHkDr0qt7Wye1HCJUtst/7c19Q/o5DSYLH7jgVPGA/q+eqxQUFYPiDRSqnQQEcYDTjNy8l0czkUxrUaFu8m2SdLS9OgJ6+e4R1espr06HZPkbfW9TTVWp177S628XYeSsm1jLwufJ4OMo1oPXSNgLpPcDM7OxNg2krZi60Sh+YnKMncFVM49dS4z+QEJruCgtHgHDA0rl+bWBsdhrvEnkw1S/atPgjg+aFn/ZD9D3E9kRFhcX4+/r6COFVFrxrXeAUg0mQwuH4M+YNpg5sYFiuKwSye6qS7qhKUsiDVbglII+TA2dsxZZsy9B/eXlhlXaUcez/jrPCrHU6joUErwT68QZkGBnBKBycKrH/NcT/klZiP2uGk3NEzpbJBZuXEYSsTiORzGTDmeaeUYfunXI0rYNiCs1pfIS1RUMENRFcLW+SsaPiLPaxsHagqfo79tt9jH5WZgExYNEHf4nn5+pm3z8meS0qMELsnEuPKg9zHsiOjKHkStwK5eHX1mE5GdYL+jN4Tvc9NK3Ca+nQvu81wECVZXK351xt5lXeTKIxputaUzLWCApPjw5CRsw1TNCGJKUG65i4HBiHP/XpFTAHbXUmmbMCRCHjczrp07CcZlwFBqpBXI9NScCbIIKbl8FrKwCox4/n50MsXm/Lqq1APEKSmRypl4KemFY+mxybpFCnvJDuW6kJ8iNO8x4eQ5TeVu6hvZeKKK2MQRhgyaS69zGVw1rO9PFhX2t4KtmBdVgXKqkLGuSZLtEbJj29BVujDUc7drgqtUUrqIDW6SaGtSIYs1O/8ps4Iatyav1DUTC5T72eNLkmSlCWUEkVMuOPdppUSMAUGJlLeiIaR+SFj7rj8wCsAX9muM9Z77KOXo677ZhJAkgyezGifopKnKY8jIq30CVFjfS/vEb5TbKN0Nt9LQh4TM4WVHQEOW+b2+NAeKh2hrJQ1ADjFFQQDv4YuvLSYy3WIoGKAGqHLKDH+EIFtGgnEy8yQMnSsbVSjX2co9UhA9eBObSQ3I/x6mXlAC+aK7MM9MuQPDIG12uCaDVRDdPtJSkj02xLGSb8o0SYShoM4Z+qCC8QzK0v3U1aqD5kpPE2axw5kdbq47EHoc1crfoBPM96xpHq07+GAx8+Kat89yVYRj6V4q7lVZVwPkzfV/lGZsT5lEQX8Y9+DwraCrnokoPWluqnn8P3fHUDc9ffYFADXt8P5nBwfb9osONUg4HGl9QnEB3BFjdNaat5mE6WFJ4LsbOM/SdnLPhw5f18ESm8qUvtEYElcjue8Zdz1mtqWuPWk6oVsJdzLpumRy4y4RE0o1o4QtFGYMd/NSRGiDrbgBC0VLSd1GhmY1Y1dUF3ZU+QVDe9KTnvnqRlIABMXF+spipapKJIM8/z+Dxr2JfS1xPACwBT2K9eXtmyouS806oDkQCX+dgdwXrHvaXMrevxrADDiOqbSmtC03tJyEibCRSlTb41Nak1+/wgsmWXD8zVq+uSauabDgYI9G/VfMLmLWCxWnk+Y/6T9cVnBsEFrXWVOIcPuxVAF3jLxJMPK+qlGqWIdIsKG7+NxchJ0SbTqvM4Oc913d7C3j7IBzMA8rTFjBDUoY6m0qgUNqpZ6L5n/rKUpDf1PicT1sAhGUnCfJnzigCc3eJyqCfLSlaXkZpaofst26Rnt23x4y6b6X/mG87QPYOeep363QLOgthZtsD0Wd+nioGOhCm3VB5GHAKLCkzuBkvpJFy32k2Aad4fU+T6xbn8GfIruSgUZq8k0MH6usrLApQ+s0/bEl6RmA0U1KBsFVn+Ad+PQNFG8FusbR3vBrXpx8MLYp0Z32NYKNWkntlyiT6Jok3GloX2Aih4/TNDOF2MtmYX38RkUdSpAuGmM1bLDjkNNqrqyKrXFdk0XaHHr7oKovN9ivsUmQc9k5OyvzyZYDJWvHwQsPzEHA0L3C2DIvCwPkCsUnOUmSFrDYKGOIh6bfPy5CTL6fUOqY02R/jSxJW8qzOvnbEGnFK7N3rzL/Evek2GVHVVFe6XufdCajqSYCF6mVsEWibGEjTA2KR7kiVDPtYC/DUR0lgTq7IljGT0AtulYBt+0+SQhUH6ficazsc9pvDj/gzEcJqWGEd47rVQ5TxR+a3T+dzI+vIGMv+XT51b83zq22bUDVN8pd3RSLYCANFq1T07gxWSXLkqdQ0F+uBSKPg6Z0iELrtzHUvGAmkWVd9FkO8i5eqanzaTyg1WADd/pRrpT72sgPnEUIJFBx1vrZ2vSYR2e/xBTUbaAQuOk/v8G7EdkKyFe6/f9ANClwNEIbCg7HlUzzY7cOxhrolNFIVxrAoA07HXIX0TNq5A16UHlrUtrasbDcDVZsp4cr3MrH6fUxfxWJ3KoaI0R1wKg75tikZ5cFJBNck4ZgMbQW9UPJpQZBuOdYxXTFnJ6SUwLlXYtXtzpbR1+iGSxLppmMJrwyi8Vc9mqo742jHnM1adEmyNnb2kp9hgdHZD7+KyDperKCG/uFYsz4aF6ZFnfYwRlIVsYajiS6NfrSMsfiNababoSlaqBXXYFEKQDMcx4Z40c/dS+bK2pJrmdrW11O9RnePaVe8Cb5b+28nSW9ABwOgmNwpUC7183rRN5VNSTIEnfyno5Lhz/Bm68XFhv93e1lYvZel13j0XnvShMk75AfgkCxeTFxvDWv/aSBWiqcAnqVJIj0Mno49Ac6zW53NbqpVY9g8DrL2DYy8wT3qn8Drhzjxn2PECftBmlXu+VxLvPCzkIg+axTaCOr5susfVmV5/xfpSXtN4Rtx5qxrbP1fj2eRvjPlfj3OdqrPucjXfvz5h3f9y7Hftefvx7mQaJ8rPIWazzZ5Or3E1/cI3+GQrFX5GQ0SVcRZSeapcZh7c2zlZ7OdKwViwPIixQDqfxpuVyn/yk81r3OvUeJRpJdyxFW6/u+rLrr7OAxoE6SZ9c4EoFlCKQCBjVmM93AQ2y/XLF7RFZozLRE5aO8wX/PiMvx1EN97GIGsgZp2K9pXJww2/IyqmhTbM67vPVsDB8saqVVsdcbScaubG20yLokUnp+TThunIYVWHEDp0lUc72saxKcxiPyCg2T1OAr+je2h6UZdTlo+fnF96dcR9oUejUVzTZr1QhGS9BH0oNDWFNVQr8aTPXXVvslUX32ZPJzzaj+EP8/PUUqFHAKztETt114Rww+0r/zo2Ojthxb0Cgr0LLGartxgrm5yk1b08cexkRo2v86SBgd7EHcCMKzsZ00lZv4SLUkcU2HXPKtPmmzZokyVI6+1d53M5OMApv57vS/4Ii2zc59UohrrJ3p8UL1wR83a51qfR3DwkTLbX6nhwdYsm+cgfgMmdxRvC/3tmJgUbtpJg3SmWdFSRrS9ctERL6+x4ej98Sz2kGtC3QerZlQSYlIDNHDvqQJlFj7SaDwkdkkgCAP5f/wbm1A8PZSF9bGNJStj4VTCO/+Uv9WLwj66cdbnIrgAINqZwzv2GTC9jhedHSjdMJVu0LLJ8n8l1/tkeattVGU3ksqS6Oh9Yv4mxRcL5HwNUPFiZKPIZrT1QvXaa0iNml/tlgfnMdCjzDRD3zNSMaKeIaG+9m1xbgoYJJFzInWuNfoIrU8IABV21JR1rDQhRTgeY6xWOxY0x930t4hG8Y2e/tyssFufERsFkrLgXIJSHX3Iv+ODtlHE8I1G7Kgal+1EWL/xnDAwPTiVDE4ch+YhtYK8o5pyuMrDi7vmgMASnW6sDbZVriaqy0VX0nlu2CYmyu7TtAzDYG9MoP5ePOPzx+/MOZ8lnPZQMHN9rZhv474sqXmgdl/dBSQapc/wAJK4pITIZf0hsVRbVPLFIMJ1bJ2BlAbGOb3K3Rmx5RJYRL2KyjiQ3WSgneMvP88cS9LZNJzbAMfFWZwgYGvri8q8HrI55b1ZEnUH4p17kSSJ5snK4U0f0rJiP3vtXoP4Rv61Kyhrv4r/utyMkJzUUFgD+6064Ijv5tKdply/SOrAyg+gZTOqHEykf1yo70MXeCEj66zEGfxASKQvqtDeFL6pmaLbkEqj0qU4qvgmlNQxNa6QLehtAW7Mq95xfq1Wtt3tNDLyUkRpzhShyQlzm3EYD6rmnKK8MpNwBwhOVDyq3dUnGHCy7assM0GRB2SXN8ECXW+kPbCf7nwFks7SefraLWzckrO+qFZI/4uDilSs0Qk02qCjsVKyeJ853FKsXqq8MsN1w+8jL5Kcb70q63xD+uXfZGZKdlWNqa7FaRsLtb0qLow3066r6OD2P0vrgD30riaqfSImU4g86iYlYkTSGQgFWw/acXafwqMQ1PuHcpH1b+nEgZ4GLZTmLM7DSxVtfPM1v3QntuDP4wFfgfoZyS/bU8P3O/WnubX73pbj9YR1STv28klBCXnkl8xfdSq+DaNVFrD8tyQ7gFwjTyToSwLutRzLxwsXPaF8Md9Rfb++4W+qAqUxqoweVAwkZ3kOqPFZeYrjGV2XghcGFxddye5fY/6zRpOQ0TxbOuR7s7IHGurFOY6XEvqfry0goupCtXHPM8Cp4NOQca9pRdLRNF503bPByh0mxj8pE/xbv66VS6beI3Nn0o60aTv79cDRbMWgYAFmf4sJ7wiYbnzmvnxPCeMzQBgJvAHj2b20CuUvR2pbxQVj8AcCMg7UMpA8I5PgugoSt2CkR5f96GcCTB7k/ZDEC09vvqvhjcVbEkMaFZ1UVKhA3edWabhlk6C/mABT9bG2DHfRsDQ6UVaQYKJaGhCYpW8TePawH/w9wcGW0OqyNzufZSk3111u63+x6rQAIo259b/1BPF7nWQfT3sx7iEU5Ef/Y1qz+B/Cr331X2XVgX0X/OYylIAPURMfKFI5xenr/N3avbYTYb/s60VBz1pUFSmn0Ps/nP4Hk9ntCLs6w4VNdyGQAAlTBCmAc4ivZp8KGFJgAwrew9abONVs30tvShWvYDAFOIEFFeBNo+GvVZYwux5F+CZoVBpKRx3j6LagrHCVHmjL+Z9WmD5ZemPUQzgOM6uc3fX4ZEoXlBtCoDANRRGE4OFBMbDuyzR6AausL8xoWiUzkXhktdzO91y8Gc+MVj7MYcuCsnwzZm3Dy/Jj/EVOngMGLjud3uLTeC2vj9O/zCOUo/5v//P18hieHDbJ5r9QdyzEXSGR7D8eTVuEzhPdGdySt2ArN5M5m8ItvghKXO0RW1MsSYJ5NX7uV7LfoJwSW8Mmd9yQRXTrC1qgqR7zFO/ls++7/ekU/guJ7SudWUuvWrJZqvvbAMACRqBeeDV2rqqirPfjVLHW93TnFzJgAQPaPN1wwF+jrRN+mz9SX/i2OPfo6Wq85HK3TOVVvgYuGw0o9fHztnst7CjcUAwBENnfHaJA3UXR9Wlu56+qSe/SGqgHVv9cD6JJykuv3yOOw74wZNhF/Ys38K1SMjj2DSYQwjlfW+yfzaCUdqH8dQsaScoaXZ4iSleiwDU8LK/2XqYtEj5a9iwqZHYS574qLHVX/ekzVNdRcVMSjRz+E4YeBwfmQtj5AhIPgu8Y/geMiKs7IiIexpf3E3+iSKlg3/Ee/0jetpDX9/qRq1LgfRYhkAAKI2KDex4W/fu1oRdTg+cb9DM1Tn6567QRMAuNyK9EidsxlTDR/AIFVOtrIK2QUBgBtmUJgWUK2LrsiALtm9mRjQXZZ4FAN6IP3GMYB9okCOASRtuTZl16VMuglGpSi5LVSXKs6shxDBWdwY4vWzT4Qc3fdtQeC0oiuKYgbHCdG7w9j8vuPL9HdtXBfl+I1vNpAA6vafjiEcJwTiOeYHYYf6r+NLFhDn/I1vXpAACiRGO4XjhND3B/hTKXssskJuvlncAziup7j8/eXqmR4AC1nLAADLhlWyE+K/F+HViui9PdFefY2VN46b03rcShMA6EWMtGEhu6mcodLnlgYBAIw6IkpEVbZvGkHWWEBt+edBTWFgoDnrvQ0=',
                          'base64'
                        )
                      )
                      .toString()),
                  a
                )
              },
            ],
          ]),
          g = {
            hooks: {
              registerPackageExtensions: async (e, t) => {
                for (const [e, r] of o) t(n.parseDescriptor(e, !0), r)
              },
              getBuiltinPatch: async (e, t) => {
                var r
                if (!t.startsWith('compat/')) return
                const i = n.parseIdent(t.slice('compat/'.length)),
                  o = null === (r = c.get(i.identHash)) || void 0 === r ? void 0 : r()
                return void 0 !== o ? o : null
              },
              reduceDependency: async (e, t, r, i) =>
                void 0 === c.get(e.identHash)
                  ? e
                  : n.makeDescriptor(
                      e,
                      n.makeRange({
                        protocol: 'patch:',
                        source: n.stringifyDescriptor(e),
                        selector: `builtin<compat/${n.stringifyIdent(e)}>`,
                        params: null,
                      })
                    ),
            },
          }
      },
      10189: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => p })
        var n = r(36370),
          i = r(25413),
          o = r(54143),
          A = r(40822)
        class s extends i.BaseCommand {
          constructor() {
            super(...arguments), (this.quiet = !1), (this.args = [])
          }
          async execute() {
            const e = []
            this.pkg && e.push('--package', this.pkg), this.quiet && e.push('--quiet')
            const t = o.parseIdent(this.command),
              r = o.makeIdent(t.scope, 'create-' + t.name)
            return this.cli.run(['dlx', ...e, o.stringifyIdent(r), ...this.args])
          }
        }
        ;(0, n.gn)(
          [A.Command.String('-p,--package', { description: 'The package to run the provided command from' })],
          s.prototype,
          'pkg',
          void 0
        ),
          (0, n.gn)(
            [
              A.Command.Boolean('-q,--quiet', {
                description: 'Only report critical errors instead of printing the full install logs',
              }),
            ],
            s.prototype,
            'quiet',
            void 0
          ),
          (0, n.gn)([A.Command.String()], s.prototype, 'command', void 0),
          (0, n.gn)([A.Command.Proxy()], s.prototype, 'args', void 0),
          (0, n.gn)([A.Command.Path('create')], s.prototype, 'execute', null)
        var a = r(39922),
          c = r(85824),
          g = r(63088),
          l = r(43896),
          u = r(46009)
        class h extends i.BaseCommand {
          constructor() {
            super(...arguments), (this.quiet = !1), (this.args = [])
          }
          async execute() {
            return (
              (a.VK.telemetry = null),
              await l.xfs.mktempPromise(async (e) => {
                const t = u.y1.join(e, 'dlx-' + process.pid)
                await l.xfs.mkdirPromise(t),
                  await l.xfs.writeFilePromise(u.y1.join(t, 'package.json'), '{}\n'),
                  await l.xfs.writeFilePromise(u.y1.join(t, 'yarn.lock'), '')
                const r = u.y1.join(t, '.yarnrc.yml'),
                  n = await a.VK.findProjectCwd(this.context.cwd, u.QS.lockfile),
                  A = null !== n ? u.y1.join(n, '.yarnrc.yml') : null
                null !== A && l.xfs.existsSync(A)
                  ? (await l.xfs.copyFilePromise(A, r),
                    await a.VK.updateConfiguration(t, (e) => {
                      const t = { ...e, enableGlobalCache: !0, enableTelemetry: !1 }
                      return (
                        Array.isArray(e.plugins) &&
                          (t.plugins = e.plugins.map((e) => {
                            const t = 'string' == typeof e ? e : e.path,
                              r = u.cS.isAbsolute(t) ? t : u.cS.resolve(u.cS.fromPortablePath(n), t)
                            return 'string' == typeof e ? r : { path: r, spec: e.spec }
                          })),
                        t
                      )
                    }))
                  : await l.xfs.writeFilePromise(r, 'enableGlobalCache: true\nenableTelemetry: false\n')
                const s = void 0 !== this.pkg ? [this.pkg] : [this.command],
                  h = o.parseDescriptor(this.command).name,
                  p = await this.cli.run(['add', '--', ...s], { cwd: t, quiet: this.quiet })
                if (0 !== p) return p
                this.quiet || this.context.stdout.write('\n')
                const f = await a.VK.find(t, this.context.plugins),
                  { project: d, workspace: C } = await c.I.find(f, t)
                if (null === C) throw new i.WorkspaceRequiredError(d.cwd, t)
                return (
                  await d.restoreInstallState(),
                  await g.executeWorkspaceAccessibleBinary(C, h, this.args, {
                    cwd: this.context.cwd,
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                    stderr: this.context.stderr,
                  })
                )
              })
            )
          }
        }
        ;(h.usage = A.Command.Usage({
          description: 'run a package in a temporary environment',
          details:
            "\n      This command will install a package within a temporary environment, and run its binary script if it contains any. The binary will run within the current cwd.\n\n      By default Yarn will download the package named `command`, but this can be changed through the use of the `-p,--package` flag which will instruct Yarn to still run the same command but from a different package.\n\n      Using `yarn dlx` as a replacement of `yarn add` isn't recommended, as it makes your project non-deterministic (Yarn doesn't keep track of the packages installed through `dlx` - neither their name, nor their version).\n    ",
          examples: [['Use create-react-app to create a new React app', 'yarn dlx create-react-app ./my-app']],
        })),
          (0, n.gn)(
            [
              A.Command.String('-p,--package', {
                description: 'The package to run the provided command from',
              }),
            ],
            h.prototype,
            'pkg',
            void 0
          ),
          (0, n.gn)(
            [
              A.Command.Boolean('-q,--quiet', {
                description: 'Only report critical errors instead of printing the full install logs',
              }),
            ],
            h.prototype,
            'quiet',
            void 0
          ),
          (0, n.gn)([A.Command.String()], h.prototype, 'command', void 0),
          (0, n.gn)([A.Command.Proxy()], h.prototype, 'args', void 0),
          (0, n.gn)([A.Command.Path('dlx')], h.prototype, 'execute', null)
        const p = { commands: [s, h] }
      },
      97546: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { dedupeUtils: () => n, default: () => ze, suggestUtils: () => n })
        var n = {}
        r.r(n),
          r.d(n, {
            Modifier: () => o,
            Strategy: () => A,
            Target: () => i,
            applyModifier: () => S,
            extractDescriptorFromPath: () => M,
            extractRangeModifier: () => D,
            fetchDescriptorFrom: () => N,
            findProjectDescriptors: () => k,
            getModifier: () => v,
            getSuggestedDescriptors: () => F,
          })
        var i,
          o,
          A,
          s = r(39922),
          a = r(36370),
          c = r(25413),
          g = r(28148),
          l = r(62152),
          u = r(92659),
          h = r(85824),
          p = r(15815),
          f = r(54143),
          d = r(40822),
          C = r(61899),
          I = r(33720),
          E = r(46611),
          m = r(71643),
          B = r(43896),
          y = r(46009),
          w = r(53887),
          Q = r.n(w)
        function v(e, t) {
          return e.exact
            ? o.EXACT
            : e.caret
            ? o.CARET
            : e.tilde
            ? o.TILDE
            : t.configuration.get('defaultSemverRangePrefix')
        }
        !(function (e) {
          ;(e.REGULAR = 'dependencies'), (e.DEVELOPMENT = 'devDependencies'), (e.PEER = 'peerDependencies')
        })(i || (i = {})),
          (function (e) {
            ;(e.CARET = '^'), (e.TILDE = '~'), (e.EXACT = '')
          })(o || (o = {})),
          (function (e) {
            ;(e.KEEP = 'keep'), (e.REUSE = 'reuse'), (e.PROJECT = 'project'), (e.LATEST = 'latest'), (e.CACHE = 'cache')
          })(A || (A = {}))
        const b = /^([\^~]?)[0-9]+(?:\.[0-9]+){0,2}(?:-\S+)?$/
        function D(e, { project: t }) {
          const r = e.match(b)
          return r ? r[1] : t.configuration.get('defaultSemverRangePrefix')
        }
        function S(e, t) {
          let { protocol: r, source: n, params: i, selector: o } = f.parseRange(e.range)
          return (
            Q().valid(o) && (o = `${t}${e.range}`),
            f.makeDescriptor(e, f.makeRange({ protocol: r, source: n, params: i, selector: o }))
          )
        }
        async function k(e, { project: t, target: r }) {
          const n = new Map(),
            o = (e) => {
              let t = n.get(e.descriptorHash)
              return t || n.set(e.descriptorHash, (t = { descriptor: e, locators: [] })), t
            }
          for (const n of t.workspaces)
            if (r === i.PEER) {
              const t = n.manifest.peerDependencies.get(e.identHash)
              void 0 !== t && o(t).locators.push(n.locator)
            } else {
              const t = n.manifest.dependencies.get(e.identHash),
                A = n.manifest.devDependencies.get(e.identHash)
              r === i.DEVELOPMENT
                ? void 0 !== A
                  ? o(A).locators.push(n.locator)
                  : void 0 !== t && o(t).locators.push(n.locator)
                : void 0 !== t
                ? o(t).locators.push(n.locator)
                : void 0 !== A && o(A).locators.push(n.locator)
            }
          return n
        }
        async function M(e, { cwd: t, workspace: r }) {
          return await (async function (e) {
            return await B.xfs.mktempPromise(async (t) => {
              const r = s.VK.create(t)
              return (
                r.useWithSource(t, { enableMirror: !1, compressionLevel: 0 }, t, { overwrite: !0 }),
                await e(new g.C(t, { configuration: r, check: !1, immutable: !1 }))
              )
            })
          })(async (n) => {
            y.y1.isAbsolute(e) || (e = y.y1.relative(r.cwd, y.y1.resolve(t, e))).match(/^\.{0,2}\//) || (e = './' + e)
            const { project: i } = r,
              o = await N(f.makeIdent(null, 'archive'), e, { project: r.project, cache: n, workspace: r })
            if (!o) throw new Error('Assertion failed: The descriptor should have been found')
            const A = new I.$(),
              s = i.configuration.makeResolver(),
              a = i.configuration.makeFetcher(),
              c = {
                checksums: i.storedChecksums,
                project: i,
                cache: n,
                fetcher: a,
                report: A,
                resolver: s,
              },
              g = s.bindDescriptor(o, r.anchoredLocator, c),
              l = f.convertDescriptorToLocator(g),
              u = await a.fetch(l, c),
              h = await E.G.find(u.prefixPath, { baseFs: u.packageFs })
            if (!h.name) throw new Error("Target path doesn't have a name")
            return f.makeDescriptor(h.name, e)
          })
        }
        async function F(
          e,
          { project: t, workspace: r, cache: n, target: o, modifier: s, strategies: a, maxResults: c = 1 / 0 }
        ) {
          if (!(c >= 0)) throw new Error(`Invalid maxResults (${c})`)
          if ('unknown' !== e.range)
            return {
              suggestions: [
                {
                  descriptor: e,
                  name: 'Use ' + f.prettyDescriptor(t.configuration, e),
                  reason: '(unambiguous explicit request)',
                },
              ],
              rejections: [],
            }
          const g = (null != r && r.manifest[o].get(e.identHash)) || null,
            l = [],
            u = [],
            h = async (e) => {
              try {
                await e()
              } catch (e) {
                u.push(e)
              }
            }
          for (const u of a) {
            if (l.length >= c) break
            switch (u) {
              case A.KEEP:
                await h(async () => {
                  g &&
                    l.push({
                      descriptor: g,
                      name: 'Keep ' + f.prettyDescriptor(t.configuration, g),
                      reason: '(no changes)',
                    })
                })
                break
              case A.REUSE:
                await h(async () => {
                  for (const { descriptor: n, locators: i } of (await k(e, { project: t, target: o })).values()) {
                    if (1 === i.length && i[0].locatorHash === r.anchoredLocator.locatorHash && a.includes(A.KEEP))
                      continue
                    let e = '(originally used by ' + f.prettyLocator(t.configuration, i[0])
                    ;(e += i.length > 1 ? ` and ${i.length - 1} other${i.length > 2 ? 's' : ''})` : ')'),
                      l.push({
                        descriptor: n,
                        name: 'Reuse ' + f.prettyDescriptor(t.configuration, n),
                        reason: e,
                      })
                  }
                })
                break
              case A.CACHE:
                await h(async () => {
                  for (const r of t.storedDescriptors.values())
                    r.identHash === e.identHash &&
                      l.push({
                        descriptor: r,
                        name: 'Reuse ' + f.prettyDescriptor(t.configuration, r),
                        reason: '(already used somewhere in the lockfile)',
                      })
                })
                break
              case A.PROJECT:
                await h(async () => {
                  if (null !== r.manifest.name && e.identHash === r.manifest.name.identHash) return
                  const n = t.tryWorkspaceByIdent(e)
                  null !== n &&
                    l.push({
                      descriptor: n.anchoredDescriptor,
                      name: 'Attach ' + f.prettyWorkspace(t.configuration, n),
                      reason: `(local workspace at ${n.cwd})`,
                    })
                })
                break
              case A.LATEST:
                await h(async () => {
                  if ('unknown' !== e.range)
                    l.push({
                      descriptor: e,
                      name: 'Use ' + f.prettyRange(t.configuration, e.range),
                      reason: '(explicit range requested)',
                    })
                  else if (o === i.PEER)
                    l.push({
                      descriptor: f.makeDescriptor(e, '*'),
                      name: 'Use *',
                      reason: '(catch-all peer dependency pattern)',
                    })
                  else if (t.configuration.get('enableNetwork')) {
                    let i = await N(e, 'latest', {
                      project: t,
                      cache: n,
                      workspace: r,
                      preserveModifier: !1,
                    })
                    i &&
                      ((i = S(i, s)),
                      l.push({
                        descriptor: i,
                        name: 'Use ' + f.prettyDescriptor(t.configuration, i),
                        reason: '(resolved from latest)',
                      }))
                  } else
                    l.push({
                      descriptor: null,
                      name: 'Resolve from latest',
                      reason: m.pretty(t.configuration, '(unavailable because enableNetwork is toggled off)', 'grey'),
                    })
                })
            }
          }
          return { suggestions: l.slice(0, c), rejections: u.slice(0, c) }
        }
        async function N(e, t, { project: r, cache: n, workspace: i, preserveModifier: o = !0 }) {
          const A = f.makeDescriptor(e, t),
            s = new I.$(),
            a = r.configuration.makeFetcher(),
            c = r.configuration.makeResolver(),
            g = {
              project: r,
              fetcher: a,
              cache: n,
              checksums: r.storedChecksums,
              report: s,
              skipIntegrityCheck: !0,
            },
            l = { ...g, resolver: c, fetchOptions: g },
            u = c.bindDescriptor(A, i.anchoredLocator, l),
            h = await c.getCandidates(u, new Map(), l)
          if (0 === h.length) return null
          const p = h[0]
          let { protocol: d, source: C, params: E, selector: m } = f.parseRange(f.convertToManifestRange(p.reference))
          if ((d === r.configuration.get('defaultProtocol') && (d = null), Q().valid(m) && !1 !== o)) {
            m = D('string' == typeof o ? o : A.range, { project: r }) + m
          }
          return f.makeDescriptor(p, f.makeRange({ protocol: d, source: C, params: E, selector: m }))
        }
        class R extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.packages = []),
              (this.json = !1),
              (this.exact = !1),
              (this.tilde = !1),
              (this.caret = !1),
              (this.dev = !1),
              (this.peer = !1),
              (this.optional = !1),
              (this.preferDev = !1),
              (this.interactive = null),
              (this.cached = !1)
          }
          async execute() {
            var e
            const t = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: r, workspace: n } = await h.I.find(t, this.context.cwd),
              o = await g.C.find(t)
            if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd)
            const a = null !== (e = this.interactive) && void 0 !== e ? e : t.get('preferInteractive'),
              I = v(this, r),
              E = [...(a ? [A.REUSE] : []), A.PROJECT, ...(this.cached ? [A.CACHE] : []), A.LATEST],
              m = a ? 1 / 0 : 1,
              B = await Promise.all(
                this.packages.map(async (e) => {
                  const t = e.match(/^\.{0,2}\//)
                      ? await M(e, { cwd: this.context.cwd, workspace: n })
                      : f.parseDescriptor(e),
                    A = (function (e, t, { dev: r, peer: n, preferDev: o, optional: A }) {
                      const s = e.manifest[i.REGULAR].has(t.identHash),
                        a = e.manifest[i.DEVELOPMENT].has(t.identHash),
                        c = e.manifest[i.PEER].has(t.identHash)
                      if ((r || n) && s)
                        throw new d.UsageError(
                          `Package "${f.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a regular dependency - remove the -D,-P flags or remove it from your dependencies first`
                        )
                      if (!r && !n && c)
                        throw new d.UsageError(
                          `Package "${f.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a peer dependency - use either of -D or -P, or remove it from your peer dependencies first`
                        )
                      if (A && a)
                        throw new d.UsageError(
                          `Package "${f.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a dev dependency - remove the -O flag or remove it from your dev dependencies first`
                        )
                      if (A && !n && c)
                        throw new d.UsageError(
                          `Package "${f.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a peer dependency - remove the -O flag or add the -P flag or remove it from your peer dependencies first`
                        )
                      if ((r || o) && A)
                        throw new d.UsageError(
                          `Package "${f.prettyIdent(
                            e.project.configuration,
                            t
                          )}" cannot simultaneously be a dev dependency and an optional dependency`
                        )
                      return n ? i.PEER : r || o ? i.DEVELOPMENT : s ? i.REGULAR : a ? i.DEVELOPMENT : i.REGULAR
                    })(n, t, {
                      dev: this.dev,
                      peer: this.peer,
                      preferDev: this.preferDev,
                      optional: this.optional,
                    })
                  return [
                    t,
                    await F(t, {
                      project: r,
                      workspace: n,
                      cache: o,
                      target: A,
                      modifier: I,
                      strategies: E,
                      maxResults: m,
                    }),
                    A,
                  ]
                })
              ),
              y = await l.h.start({ configuration: t, stdout: this.context.stdout, suggestInstall: !1 }, async (e) => {
                for (const [n, { suggestions: i, rejections: o }] of B) {
                  if (0 === i.filter((e) => null !== e.descriptor).length) {
                    const [i] = o
                    if (void 0 === i) throw new Error('Assertion failed: Expected an error to have been set')
                    const A = this.cli.error(i)
                    r.configuration.get('enableNetwork')
                      ? e.reportError(
                          u.b.CANT_SUGGEST_RESOLUTIONS,
                          `${f.prettyDescriptor(t, n)} can't be resolved to a satisfying range:\n\n${A}`
                        )
                      : e.reportError(
                          u.b.CANT_SUGGEST_RESOLUTIONS,
                          `${f.prettyDescriptor(
                            t,
                            n
                          )} can't be resolved to a satisfying range (note: network resolution has been disabled):\n\n${A}`
                        )
                  }
                }
              })
            if (y.hasErrors()) return y.exitCode()
            let w = !1
            const Q = [],
              b = []
            for (const [, { suggestions: e }, t] of B) {
              let r
              const i = e.filter((e) => null !== e.descriptor),
                o = i[0].descriptor,
                A = i.every((e) => f.areDescriptorsEqual(e.descriptor, o))
              1 === i.length || A
                ? (r = o)
                : ((w = !0),
                  ({ answer: r } = await (0, C.prompt)({
                    type: 'select',
                    name: 'answer',
                    message: 'Which range do you want to use?',
                    choices: e.map(({ descriptor: e, name: t, reason: r }) =>
                      e ? { name: t, hint: r, descriptor: e } : { name: t, hint: r, disabled: !0 }
                    ),
                    onCancel: () => process.exit(130),
                    result(e) {
                      return this.find(e, 'descriptor')
                    },
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                  })))
              const s = n.manifest[t].get(r.identHash)
              ;(void 0 !== s && s.descriptorHash === r.descriptorHash) ||
                (n.manifest[t].set(r.identHash, r),
                this.optional &&
                  ('dependencies' === t
                    ? (n.manifest.ensureDependencyMeta({ ...r, range: 'unknown' }).optional = !0)
                    : 'peerDependencies' === t &&
                      (n.manifest.ensurePeerDependencyMeta({
                        ...r,
                        range: 'unknown',
                      }).optional = !0)),
                void 0 === s ? Q.push([n, t, r, E]) : b.push([n, t, s, r]))
            }
            await t.triggerMultipleHooks((e) => e.afterWorkspaceDependencyAddition, Q),
              await t.triggerMultipleHooks((e) => e.afterWorkspaceDependencyReplacement, b),
              w && this.context.stdout.write('\n')
            return (
              await p.Pk.start(
                {
                  configuration: t,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeLogs: !this.context.quiet,
                },
                async (e) => {
                  await r.install({ cache: o, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(R.usage = d.Command.Usage({
          description: 'add dependencies to the project',
          details:
            "\n      This command adds a package to the package.json for the nearest workspace.\n\n      - If it didn't exist before, the package will by default be added to the regular `dependencies` field, but this behavior can be overriden thanks to the `-D,--dev` flag (which will cause the dependency to be added to the `devDependencies` field instead) and the `-P,--peer` flag (which will do the same but for `peerDependencies`).\n\n      - If the package was already listed in your dependencies, it will by default be upgraded whether it's part of your `dependencies` or `devDependencies` (it won't ever update `peerDependencies`, though).\n\n      - If set, the `--prefer-dev` flag will operate as a more flexible `-D,--dev` in that it will add the package to your `devDependencies` if it isn't already listed in either `dependencies` or `devDependencies`, but it will also happily upgrade your `dependencies` if that's what you already use (whereas `-D,--dev` would throw an exception).\n\n      - If set, the `-O,--optional` flag will add the package to the `optionalDependencies` field and, in combination with the `-P,--peer` flag, it will add the package as an optional peer dependency. If the package was already listed in your `dependencies`, it will be upgraded to `optionalDependencies`. If the package was already listed in your `peerDependencies`, in combination with the `-P,--peer` flag, it will be upgraded to an optional peer dependency: `\"peerDependenciesMeta\": { \"<package>\": { \"optional\": true } }`\n\n      - If the added package doesn't specify a range at all its `latest` tag will be resolved and the returned version will be used to generate a new semver range (using the `^` modifier by default unless otherwise configured via the `defaultSemverRangePrefix` configuration, or the `~` modifier if `-T,--tilde` is specified, or no modifier at all if `-E,--exact` is specified). Two exceptions to this rule: the first one is that if the package is a workspace then its local version will be used, and the second one is that if you use `-P,--peer` the default range will be `*` and won't be resolved at all.\n\n      - If the added package specifies a range (such as `^1.0.0`, `latest`, or `rc`), Yarn will add this range as-is in the resulting package.json entry (in particular, tags such as `rc` will be encoded as-is rather than being converted into a semver range).\n\n      If the `--cached` option is used, Yarn will preferably reuse the highest version already used somewhere within the project, even if through a transitive dependency.\n\n      If the `-i,--interactive` option is used (or if the `preferInteractive` settings is toggled on) the command will first try to check whether other workspaces in the project use the specified package and, if so, will offer to reuse them.\n\n      For a compilation of all the supported protocols, please consult the dedicated page from our website: https://yarnpkg.com/features/protocols.\n    ",
          examples: [
            ['Add a regular package to the current workspace', '$0 add lodash'],
            ['Add a specific version for a package to the current workspace', '$0 add lodash@1.2.3'],
            [
              'Add a package from a GitHub repository (the master branch) to the current workspace using a URL',
              '$0 add lodash@https://github.com/lodash/lodash',
            ],
            [
              'Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol',
              '$0 add lodash@github:lodash/lodash',
            ],
            [
              'Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol (shorthand)',
              '$0 add lodash@lodash/lodash',
            ],
            [
              'Add a package from a specific branch of a GitHub repository to the current workspace using the GitHub protocol (shorthand)',
              '$0 add lodash-es@lodash/lodash#es',
            ],
          ],
        })),
          (0, a.gn)([d.Command.Rest()], R.prototype, 'packages', void 0),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            R.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-E,--exact', {
                description: "Don't use any semver modifier on the resolved range",
              }),
            ],
            R.prototype,
            'exact',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-T,--tilde', {
                description: 'Use the `~` semver modifier on the resolved range',
              }),
            ],
            R.prototype,
            'tilde',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-C,--caret', {
                description: 'Use the `^` semver modifier on the resolved range',
              }),
            ],
            R.prototype,
            'caret',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('-D,--dev', { description: 'Add a package as a dev dependency' })],
            R.prototype,
            'dev',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('-P,--peer', { description: 'Add a package as a peer dependency' })],
            R.prototype,
            'peer',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-O,--optional', {
                description: 'Add / upgrade a package to an optional regular / peer dependency',
              }),
            ],
            R.prototype,
            'optional',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--prefer-dev', {
                description: 'Add / upgrade a package to a dev dependency',
              }),
            ],
            R.prototype,
            'preferDev',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-i,--interactive', {
                description: 'Reuse the specified package from other workspaces in the project',
              }),
            ],
            R.prototype,
            'interactive',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--cached', {
                description: 'Reuse the highest version already used somewhere within the project',
              }),
            ],
            R.prototype,
            'cached',
            void 0
          ),
          (0, a.gn)([d.Command.Path('add')], R.prototype, 'execute', null)
        var K = r(63088)
        class L extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.verbose = !1), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, locator: r } = await h.I.find(e, this.context.cwd)
            if ((await t.restoreInstallState(), this.name)) {
              const n = (await K.getPackageAccessibleBinaries(r, { project: t })).get(this.name)
              if (!n)
                throw new d.UsageError(
                  `Couldn't find a binary named "${this.name}" for package "${f.prettyLocator(e, r)}"`
                )
              const [, i] = n
              return this.context.stdout.write(i + '\n'), 0
            }
            return (
              await p.Pk.start({ configuration: e, json: this.json, stdout: this.context.stdout }, async (n) => {
                const i = await K.getPackageAccessibleBinaries(r, { project: t }),
                  o = Array.from(i.keys()).reduce((e, t) => Math.max(e, t.length), 0)
                for (const [e, [t, r]] of i) n.reportJson({ name: e, source: f.stringifyIdent(t), path: r })
                if (this.verbose)
                  for (const [t, [r]] of i) n.reportInfo(null, `${t.padEnd(o, ' ')}   ${f.prettyLocator(e, r)}`)
                else for (const e of i.keys()) n.reportInfo(null, e)
              })
            ).exitCode()
          }
        }
        ;(L.usage = d.Command.Usage({
          description: 'get the path to a binary script',
          details:
            '\n      When used without arguments, this command will print the list of all the binaries available in the current workspace. Adding the `-v,--verbose` flag will cause the output to contain both the binary name and the locator of the package that provides the binary.\n\n      When an argument is specified, this command will just print the path to the binary on the standard output and exit. Note that the reported path may be stored within a zip archive.\n    ',
          examples: [
            ['List all the available binaries', '$0 bin'],
            ['Print the path to a specific binary', '$0 bin eslint'],
          ],
        })),
          (0, a.gn)([d.Command.String({ required: !1 })], L.prototype, 'name', void 0),
          (0, a.gn)(
            [
              d.Command.Boolean('-v,--verbose', {
                description: 'Print both the binary name and the locator of the package that provides the binary',
              }),
            ],
            L.prototype,
            'verbose',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            L.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([d.Command.Path('bin')], L.prototype, 'execute', null)
        class x extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.mirror = !1), (this.all = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t = await g.C.find(e)
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async () => {
                const e = (this.all || this.mirror) && null !== t.mirrorCwd,
                  r = !this.mirror
                e && (await B.xfs.removePromise(t.mirrorCwd)), r && (await B.xfs.removePromise(t.cwd))
              })
            ).exitCode()
          }
        }
        ;(x.usage = d.Command.Usage({
          description: 'remove the shared cache files',
          details: '\n      This command will remove all the files from the cache.\n    ',
          examples: [
            ['Remove all the local archives', '$0 cache clean'],
            ['Remove all the archives stored in the ~/.yarn directory', '$0 cache clean --mirror'],
          ],
        })),
          (0, a.gn)(
            [
              d.Command.Boolean('--mirror', {
                description: 'Remove the global cache files instead of the local cache files',
              }),
            ],
            x.prototype,
            'mirror',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--all', {
                description: 'Remove both the global cache files and the local cache files of the current project',
              }),
            ],
            x.prototype,
            'all',
            void 0
          ),
          (0, a.gn)([d.Command.Path('cache', 'clean')], x.prototype, 'execute', null)
        var P = r(44674),
          T = r.n(P),
          O = r(31669)
        class U extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1), (this.unsafe = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t = this.name.replace(/[.[].*$/, ''),
              r = this.name.replace(/^[^.[]*/, '')
            if (void 0 === e.settings.get(t))
              throw new d.UsageError(`Couldn't find a configuration settings named "${t}"`)
            const n = j(e.getSpecial(t, { hideSecrets: !this.unsafe, getNativePaths: !0 })),
              i = r ? T()(n, r) : n,
              o = await p.Pk.start(
                { configuration: e, includeFooter: !1, json: this.json, stdout: this.context.stdout },
                async (e) => {
                  e.reportJson(i)
                }
              )
            if (!this.json) {
              if ('string' == typeof i) return this.context.stdout.write(i + '\n'), o.exitCode()
              ;(O.inspect.styles.name = 'cyan'),
                this.context.stdout.write(
                  (0, O.inspect)(i, { depth: 1 / 0, colors: e.get('enableColors'), compact: !1 }) + '\n'
                )
            }
            return o.exitCode()
          }
        }
        function j(e) {
          if ((e instanceof Map && (e = Object.fromEntries(e)), 'object' == typeof e && null !== e))
            for (const t of Object.keys(e)) {
              const r = e[t]
              'object' == typeof r && null !== r && (e[t] = j(r))
            }
          return e
        }
        ;(U.usage = d.Command.Usage({
          description: 'read a configuration settings',
          details:
            "\n      This command will print a configuration setting.\n\n      Secrets (such as tokens) will be redacted from the output by default. If this behavior isn't desired, set the `--no-redacted` to get the untransformed value.\n    ",
          examples: [
            ['Print a simple configuration setting', 'yarn config get yarnPath'],
            ['Print a complex configuration setting', 'yarn config get packageExtensions'],
            [
              'Print a nested field from the configuration',
              'yarn config get \'npmScopes["my-company"].npmRegistryServer\'',
            ],
            ['Print a token from the configuration', 'yarn config get npmAuthToken --no-redacted'],
            ['Print a configuration setting as JSON', 'yarn config get packageExtensions --json'],
          ],
        })),
          (0, a.gn)([d.Command.String()], U.prototype, 'name', void 0),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            U.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--no-redacted', {
                description: "Don't redact secrets (such as tokens) from the output",
              }),
            ],
            U.prototype,
            'unsafe',
            void 0
          ),
          (0, a.gn)([d.Command.Path('config', 'get')], U.prototype, 'execute', null)
        var Y = r(82558),
          G = r.n(Y),
          H = r(81534),
          J = r.n(H)
        class _ extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1), (this.home = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            if (!e.projectCwd) throw new d.UsageError('This command must be run from within a project folder')
            const t = this.name.replace(/[.[].*$/, ''),
              r = this.name.replace(/^[^.[]*\.?/, '')
            if (void 0 === e.settings.get(t))
              throw new d.UsageError(`Couldn't find a configuration settings named "${t}"`)
            const n = this.json ? JSON.parse(this.value) : this.value,
              i = this.home ? (e) => s.VK.updateHomeConfiguration(e) : (t) => s.VK.updateConfiguration(e.projectCwd, t)
            await i((e) => {
              if (r) {
                const t = G()(e)
                return J()(t, this.name, n), t
              }
              return { ...e, [t]: n }
            })
            const o = j(
                (await s.VK.find(this.context.cwd, this.context.plugins)).getSpecial(t, {
                  hideSecrets: !0,
                  getNativePaths: !0,
                })
              ),
              A = r ? T()(o, r) : o
            return (
              await p.Pk.start({ configuration: e, includeFooter: !1, stdout: this.context.stdout }, async (t) => {
                ;(O.inspect.styles.name = 'cyan'),
                  t.reportInfo(
                    u.b.UNNAMED,
                    `Successfully set ${this.name} to ${(0, O.inspect)(A, {
                      depth: 1 / 0,
                      colors: e.get('enableColors'),
                      compact: !1,
                    })}`
                  )
              })
            ).exitCode()
          }
        }
        ;(_.usage = d.Command.Usage({
          description: 'change a configuration settings',
          details:
            '\n      This command will set a configuration setting.\n\n      When used without the `--json` flag, it can only set a simple configuration setting (a string, a number, or a boolean).\n\n      When used with the `--json` flag, it can set both simple and complex configuration settings, including Arrays and Objects.\n    ',
          examples: [
            [
              'Set a simple configuration setting (a string, a number, or a boolean)',
              'yarn config set initScope myScope',
            ],
            [
              'Set a simple configuration setting (a string, a number, or a boolean) using the `--json` flag',
              'yarn config set initScope --json \\"myScope\\"',
            ],
            [
              'Set a complex configuration setting (an Array) using the `--json` flag',
              'yarn config set unsafeHttpWhitelist --json \'["*.example.com", "example.com"]\'',
            ],
            [
              'Set a complex configuration setting (an Object) using the `--json` flag',
              'yarn config set packageExtensions --json \'{ "@babel/parser@*": { "dependencies": { "@babel/types": "*" } } }\'',
            ],
            [
              'Set a nested configuration setting',
              'yarn config set npmScopes.company.npmRegistryServer "https://npm.example.com"',
            ],
            [
              'Set a nested configuration setting using indexed access for non-simple keys',
              'yarn config set \'npmRegistries["//npm.example.com"].npmAuthToken\' "ffffffff-ffff-ffff-ffff-ffffffffffff"',
            ],
          ],
        })),
          (0, a.gn)([d.Command.String()], _.prototype, 'name', void 0),
          (0, a.gn)([d.Command.String()], _.prototype, 'value', void 0),
          (0, a.gn)(
            [
              d.Command.Boolean('--json', {
                description: 'Set complex configuration settings to JSON values',
              }),
            ],
            _.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-H,--home', {
                description: 'Update the home configuration instead of the project configuration',
              }),
            ],
            _.prototype,
            'home',
            void 0
          ),
          (0, a.gn)([d.Command.Path('config', 'set')], _.prototype, 'execute', null)
        var q = r(73632)
        class z extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.verbose = !1), (this.why = !1), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins, { strict: !1 })
            return (
              await p.Pk.start({ configuration: e, json: this.json, stdout: this.context.stdout }, async (t) => {
                if (e.invalid.size > 0 && !this.json) {
                  for (const [r, n] of e.invalid)
                    t.reportError(u.b.INVALID_CONFIGURATION_KEY, `Invalid configuration key "${r}" in ${n}`)
                  t.reportSeparator()
                }
                if (this.json) {
                  const r = q.sortMap(e.settings.keys(), (e) => e)
                  for (const n of r) {
                    const r = e.settings.get(n),
                      i = e.getSpecial(n, { hideSecrets: !0, getNativePaths: !0 }),
                      o = e.sources.get(n)
                    this.verbose
                      ? t.reportJson({ key: n, effective: i, source: o })
                      : t.reportJson({ key: n, effective: i, source: o, ...r })
                  }
                } else {
                  const r = q.sortMap(e.settings.keys(), (e) => e),
                    n = r.reduce((e, t) => Math.max(e, t.length), 0),
                    i = { breakLength: 1 / 0, colors: e.get('enableColors'), maxArrayLength: 2 }
                  if (this.why || this.verbose) {
                    const o = r.map((t) => {
                        const r = e.settings.get(t)
                        if (!r) throw new Error(`Assertion failed: This settings ("${t}") should have been registered`)
                        return [t, this.why ? e.sources.get(t) || '<default>' : r.description]
                      }),
                      A = o.reduce((e, [, t]) => Math.max(e, t.length), 0)
                    for (const [r, s] of o)
                      t.reportInfo(
                        null,
                        `${r.padEnd(n, ' ')}   ${s.padEnd(A, ' ')}   ${(0, O.inspect)(
                          e.getSpecial(r, { hideSecrets: !0, getNativePaths: !0 }),
                          i
                        )}`
                      )
                  } else
                    for (const o of r)
                      t.reportInfo(
                        null,
                        `${o.padEnd(n, ' ')}   ${(0, O.inspect)(
                          e.getSpecial(o, { hideSecrets: !0, getNativePaths: !0 }),
                          i
                        )}`
                      )
                }
              })
            ).exitCode()
          }
        }
        ;(z.usage = d.Command.Usage({
          description: 'display the current configuration',
          details: '\n      This command prints the current active configuration settings.\n    ',
          examples: [['Print the active configuration settings', '$0 config']],
        })),
          (0, a.gn)(
            [
              d.Command.Boolean('-v,--verbose', {
                description: 'Print the setting description on top of the regular key/value information',
              }),
            ],
            z.prototype,
            'verbose',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--why', {
                description: 'Print the reason why a setting is set a particular way',
              }),
            ],
            z.prototype,
            'why',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            z.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([d.Command.Path('config')], z.prototype, 'execute', null)
        var W,
          V = r(15966),
          X = r(35691),
          Z = r(2401),
          $ = r.n(Z)
        !(function (e) {
          e.HIGHEST = 'highest'
        })(W || (W = {}))
        const ee = new Set(Object.values(W)),
          te = {
            highest: async (e, t, { resolver: r, fetcher: n, resolveOptions: i, fetchOptions: o }) => {
              const A = new Map()
              for (const [t, r] of e.storedResolutions) {
                const n = e.storedDescriptors.get(t)
                if (void 0 === n) throw new Error(`Assertion failed: The descriptor (${t}) should have been registered`)
                q.getSetWithDefault(A, n.identHash).add(r)
              }
              return Array.from(e.storedDescriptors.values(), async (n) => {
                if (t.length && !$().isMatch(f.stringifyIdent(n), t)) return null
                const o = e.storedResolutions.get(n.descriptorHash)
                if (void 0 === o)
                  throw new Error(`Assertion failed: The resolution (${n.descriptorHash}) should have been registered`)
                const s = e.originalPackages.get(o)
                if (void 0 === s) return null
                if (!r.shouldPersistResolution(s, i)) return null
                const a = A.get(n.identHash)
                if (void 0 === a)
                  throw new Error(`Assertion failed: The resolutions (${n.identHash}) should have been registered`)
                if (1 === a.size) return null
                const c = [...a].map((t) => {
                    const r = e.originalPackages.get(t)
                    if (void 0 === r)
                      throw new Error(`Assertion failed: The package (${t}) should have been registered`)
                    return r.reference
                  }),
                  g = await r.getSatisfying(n, c, i),
                  l = null == g ? void 0 : g[0]
                if (void 0 === l) return null
                const u = l.locatorHash,
                  h = e.originalPackages.get(u)
                if (void 0 === h) throw new Error(`Assertion failed: The package (${u}) should have been registered`)
                return u === o ? null : { descriptor: n, currentPackage: s, updatedPackage: h }
              })
            },
          }
        class re extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.patterns = []), (this.strategy = W.HIGHEST), (this.check = !1), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd),
              r = await g.C.find(e)
            let n = 0
            const i = await p.Pk.start(
              { configuration: e, includeFooter: !1, stdout: this.context.stdout, json: this.json },
              async (e) => {
                n = await (async function (e, { strategy: t, patterns: r, cache: n, report: i }) {
                  const { configuration: o } = e,
                    A = new I.$(),
                    s = o.makeResolver(),
                    a = o.makeFetcher(),
                    c = {
                      cache: n,
                      checksums: e.storedChecksums,
                      fetcher: a,
                      project: e,
                      report: A,
                      skipIntegrityCheck: !0,
                    },
                    g = { project: e, resolver: s, report: A, fetchOptions: c }
                  return await i.startTimerPromise('Deduplication step', async () => {
                    const n = te[t],
                      A = await n(e, r, {
                        resolver: s,
                        resolveOptions: g,
                        fetcher: a,
                        fetchOptions: c,
                      }),
                      l = X.yG.progressViaCounter(A.length)
                    i.reportProgress(l)
                    let h,
                      p = 0
                    switch (
                      (await Promise.all(
                        A.map((t) =>
                          t
                            .then((t) => {
                              if (null === t) return
                              p++
                              const { descriptor: r, currentPackage: n, updatedPackage: A } = t
                              i.reportInfo(
                                u.b.UNNAMED,
                                `${f.prettyDescriptor(o, r)} can be deduped from ${f.prettyLocator(
                                  o,
                                  n
                                )} to ${f.prettyLocator(o, A)}`
                              ),
                                i.reportJson({
                                  descriptor: f.stringifyDescriptor(r),
                                  currentResolution: f.stringifyLocator(n),
                                  updatedResolution: f.stringifyLocator(A),
                                }),
                                e.storedResolutions.set(r.descriptorHash, A.locatorHash)
                            })
                            .finally(() => l.tick())
                        )
                      ),
                      p)
                    ) {
                      case 0:
                        h = 'No packages'
                        break
                      case 1:
                        h = 'One package'
                        break
                      default:
                        h = p + ' packages'
                    }
                    const d = m.pretty(o, t, m.Type.CODE)
                    return i.reportInfo(u.b.UNNAMED, `${h} can be deduped using the ${d} strategy`), p
                  })
                })(t, { strategy: this.strategy, patterns: this.patterns, cache: r, report: e })
              }
            )
            if (i.hasErrors()) return i.exitCode()
            if (this.check) return n ? 1 : 0
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout, json: this.json }, async (e) => {
                await t.install({ cache: r, report: e })
              })
            ).exitCode()
          }
        }
        ;(re.schema = V.object().shape({
          strategy: V.string().test({
            name: 'strategy',
            message: '${path} must be one of ${strategies}',
            params: { strategies: [...ee].join(', ') },
            test: (e) => ee.has(e),
          }),
        })),
          (re.usage = d.Command.Usage({
            description: 'deduplicate dependencies with overlapping ranges',
            details:
              "\n      Duplicates are defined as descriptors with overlapping ranges being resolved and locked to different locators. They are a natural consequence of Yarn's deterministic installs, but they can sometimes pile up and unnecessarily increase the size of your project.\n\n      This command dedupes dependencies in the current project using different strategies (only one is implemented at the moment):\n\n      - `highest`: Reuses (where possible) the locators with the highest versions. This means that dependencies can only be upgraded, never downgraded. It's also guaranteed that it never takes more than a single pass to dedupe the entire dependency tree.\n\n      **Note:** Even though it never produces a wrong dependency tree, this command should be used with caution, as it modifies the dependency tree, which can sometimes cause problems when packages don't strictly follow semver recommendations. Because of this, it is recommended to also review the changes manually.\n\n      If set, the `-c,--check` flag will only report the found duplicates, without persisting the modified dependency tree. If changes are found, the command will exit with a non-zero exit code, making it suitable for CI purposes.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      ### In-depth explanation:\n\n      Yarn doesn't deduplicate dependencies by default, otherwise installs wouldn't be deterministic and the lockfile would be useless. What it actually does is that it tries to not duplicate dependencies in the first place.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@*`will cause Yarn to reuse `foo@2.3.4`, even if the latest `foo` is actually `foo@2.10.14`, thus preventing unnecessary duplication.\n\n      Duplication happens when Yarn can't unlock dependencies that have already been locked inside the lockfile.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@2.10.14` will cause Yarn to install `foo@2.10.14` because the existing resolution doesn't satisfy the range `2.10.14`. This behavior can lead to (sometimes) unwanted duplication, since now the lockfile contains 2 separate resolutions for the 2 `foo` descriptors, even though they have overlapping ranges, which means that the lockfile can be simplified so that both descriptors resolve to `foo@2.10.14`.\n    ",
            examples: [
              ['Dedupe all packages', '$0 dedupe'],
              ['Dedupe all packages using a specific strategy', '$0 dedupe --strategy highest'],
              ['Dedupe a specific package', '$0 dedupe lodash'],
              ['Dedupe all packages with the `@babel/*` scope', "$0 dedupe '@babel/*'"],
              ['Check for duplicates (can be used as a CI step)', '$0 dedupe --check'],
            ],
          })),
          (0, a.gn)([d.Command.Rest()], re.prototype, 'patterns', void 0),
          (0, a.gn)(
            [
              d.Command.String('-s,--strategy', {
                description: 'The strategy to use when deduping dependencies',
              }),
            ],
            re.prototype,
            'strategy',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-c,--check', {
                description: 'Exit with exit code 1 when duplicates are found, without persisting the dependency tree',
              }),
            ],
            re.prototype,
            'check',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            re.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([d.Command.Path('dedupe')], re.prototype, 'execute', null)
        class ne extends d.Command {
          async execute() {
            const { plugins: e } = await s.VK.find(this.context.cwd, this.context.plugins),
              t = []
            for (const r of e) {
              const { commands: e } = r[1]
              if (e) {
                const n = d.Cli.from(e).definitions()
                t.push([r[0], n])
              }
            }
            const n = this.cli.definitions(),
              i = r(60306)['@yarnpkg/builder'].bundles.standard
            for (const e of t) {
              const t = e[1]
              for (const r of t)
                n.find((e) => {
                  return (t = e.path), (n = r.path), t.split(' ').slice(1).join() === n.split(' ').slice(1).join()
                  var t, n
                }).plugin = { name: e[0], isDefault: i.includes(e[0]) }
            }
            this.context.stdout.write(JSON.stringify({ commands: n }, null, 2) + '\n')
          }
        }
        ;(0, a.gn)([d.Command.Path('--clipanion=definitions')], ne.prototype, 'execute', null)
        class ie extends d.Command {
          async execute() {
            this.context.stdout.write(this.cli.usage(null))
          }
        }
        ;(0, a.gn)(
          [d.Command.Path('help'), d.Command.Path('--help'), d.Command.Path('-h')],
          ie.prototype,
          'execute',
          null
        )
        class oe extends d.Command {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            if (this.leadingArgument.match(/[\\/]/) && !f.tryParseIdent(this.leadingArgument)) {
              const e = y.y1.resolve(this.context.cwd, y.cS.toPortablePath(this.leadingArgument))
              return await this.cli.run(this.args, { cwd: e })
            }
            return await this.cli.run(['run', this.leadingArgument, ...this.args])
          }
        }
        ;(0, a.gn)([d.Command.String()], oe.prototype, 'leadingArgument', void 0),
          (0, a.gn)([d.Command.Proxy()], oe.prototype, 'args', void 0)
        var Ae = r(59355)
        class se extends d.Command {
          async execute() {
            this.context.stdout.write((Ae.o || '<unknown>') + '\n')
          }
        }
        ;(0, a.gn)([d.Command.Path('-v'), d.Command.Path('--version')], se.prototype, 'execute', null)
        var ae = r(6220)
        class ce extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd)
            return await B.xfs.mktempPromise(async (e) => {
              const { code: r } = await ae.pipevp(this.commandName, this.args, {
                cwd: this.context.cwd,
                stdin: this.context.stdin,
                stdout: this.context.stdout,
                stderr: this.context.stderr,
                env: await K.makeScriptEnv({ project: t, binFolder: e }),
              })
              return r
            })
          }
        }
        ;(ce.usage = d.Command.Usage({
          description: 'execute a shell command',
          details:
            "\n      This command simply executes a shell binary within the context of the root directory of the active workspace.\n\n      It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n    ",
          examples: [['Execute a shell command', '$0 exec echo Hello World']],
        })),
          (0, a.gn)([d.Command.String()], ce.prototype, 'commandName', void 0),
          (0, a.gn)([d.Command.Proxy()], ce.prototype, 'args', void 0),
          (0, a.gn)([d.Command.Path('exec')], ce.prototype, 'execute', null)
        var ge = r(85875)
        class le extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.all = !1),
              (this.recursive = !1),
              (this.extra = []),
              (this.cache = !1),
              (this.dependents = !1),
              (this.manifest = !1),
              (this.nameOnly = !1),
              (this.virtuals = !1),
              (this.json = !1),
              (this.patterns = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd),
              n = await g.C.find(e)
            if (!r && !this.all) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            await t.restoreInstallState()
            const i = new Set(this.extra)
            this.cache && i.add('cache'), this.dependents && i.add('dependents'), this.manifest && i.add('manifest')
            const o = (e, { recursive: r }) => {
                const n = e.anchoredLocator.locatorHash,
                  i = new Map(),
                  o = [n]
                for (; o.length > 0; ) {
                  const e = o.shift()
                  if (i.has(e)) continue
                  const A = t.storedPackages.get(e)
                  if (void 0 === A) throw new Error('Assertion failed: Expected the package to be registered')
                  if (
                    (i.set(e, A), f.isVirtualLocator(A) && o.push(f.devirtualizeLocator(A).locatorHash), r || e === n)
                  )
                    for (const e of A.dependencies.values()) {
                      const r = t.storedResolutions.get(e.descriptorHash)
                      if (void 0 === r) throw new Error('Assertion failed: Expected the resolution to be registered')
                      o.push(r)
                    }
                }
                return i.values()
              },
              A = ({ all: e, recursive: n }) =>
                e && n
                  ? t.storedPackages.values()
                  : e
                  ? (({ recursive: e }) => {
                      const r = new Map()
                      for (const n of t.workspaces) for (const t of o(n, { recursive: e })) r.set(t.locatorHash, t)
                      return r.values()
                    })({ recursive: n })
                  : o(r, { recursive: n }),
              { selection: a, sortedLookup: l } = (({ all: e, recursive: t }) => {
                const r = A({ all: e, recursive: t }),
                  n = this.patterns.map((e) => {
                    const t = f.parseLocator(e),
                      r = $().makeRe(f.stringifyIdent(t)),
                      n = f.isVirtualLocator(t),
                      i = n ? f.devirtualizeLocator(t) : t
                    return (e) => {
                      const o = f.stringifyIdent(e)
                      if (!r.test(o)) return !1
                      if ('unknown' === t.reference) return !0
                      const A = f.isVirtualLocator(e),
                        s = A ? f.devirtualizeLocator(e) : e
                      return (!n || !A || t.reference === e.reference) && i.reference === s.reference
                    }
                  }),
                  i = q.sortMap([...r], (e) => f.stringifyLocator(e))
                return {
                  selection: i.filter((e) => 0 === n.length || n.some((t) => t(e))),
                  sortedLookup: i,
                }
              })({ all: this.all, recursive: this.recursive })
            if (0 === a.length) throw new d.UsageError('No package matched your request')
            const u = new Map()
            if (this.dependents)
              for (const e of l)
                for (const r of e.dependencies.values()) {
                  const n = t.storedResolutions.get(r.descriptorHash)
                  if (void 0 === n) throw new Error('Assertion failed: Expected the resolution to be registered')
                  q.getArrayWithDefault(u, n).push(e)
                }
            const p = new Map()
            for (const e of l) {
              if (!f.isVirtualLocator(e)) continue
              const t = f.devirtualizeLocator(e)
              q.getArrayWithDefault(p, t.locatorHash).push(e)
            }
            const C = {},
              y = { children: C },
              w = e.makeFetcher(),
              Q = {
                project: t,
                fetcher: w,
                cache: n,
                checksums: t.storedChecksums,
                report: new I.$(),
                skipIntegrityCheck: !0,
              },
              v = [
                async (e, t, r) => {
                  var n, i
                  if (!t.has('manifest')) return
                  const o = await w.fetch(e, Q)
                  let A
                  try {
                    A = await E.G.find(o.prefixPath, { baseFs: o.packageFs })
                  } finally {
                    null === (n = o.releaseFs) || void 0 === n || n.call(o)
                  }
                  r('Manifest', {
                    License: m.tuple(m.Type.NO_HINT, A.license),
                    Homepage: m.tuple(m.Type.URL, null !== (i = A.raw.homepage) && void 0 !== i ? i : null),
                  })
                },
                async (e, r, i) => {
                  var o
                  if (!r.has('cache')) return
                  const A = null !== (o = t.storedChecksums.get(e.locatorHash)) && void 0 !== o ? o : null,
                    s = n.getLocatorPath(e, A)
                  let a
                  if (null !== s)
                    try {
                      a = B.xfs.statSync(s)
                    } catch (e) {}
                  const c = void 0 !== a ? [a.size, m.Type.SIZE] : void 0
                  i('Cache', {
                    Checksum: m.tuple(m.Type.NO_HINT, A),
                    Path: m.tuple(m.Type.PATH, s),
                    Size: c,
                  })
                },
              ]
            for (const r of a) {
              const n = f.isVirtualLocator(r)
              if (!this.virtuals && n) continue
              const o = {},
                A = { value: [r, m.Type.LOCATOR], children: o }
              if (((C[f.stringifyLocator(r)] = A), this.nameOnly)) {
                delete A.children
                continue
              }
              const s = p.get(r.locatorHash)
              void 0 !== s && (o.Instances = { label: 'Instances', value: m.tuple(m.Type.NUMBER, s.length) }),
                (o.Version = { label: 'Version', value: m.tuple(m.Type.NO_HINT, r.version) })
              const a = (e, t) => {
                const r = {}
                if (((o[e] = r), Array.isArray(t))) r.children = t.map((e) => ({ value: e }))
                else {
                  const e = {}
                  r.children = e
                  for (const [r, n] of Object.entries(t)) void 0 !== n && (e[r] = { label: r, value: n })
                }
              }
              if (!n) {
                for (const e of v) await e(r, i, a)
                await e.triggerHook((e) => e.fetchPackageInfo, r, i, a)
              }
              r.bin.size > 0 &&
                !n &&
                a(
                  'Exported Binaries',
                  [...r.bin.keys()].map((e) => m.tuple(m.Type.PATH, e))
                )
              const c = u.get(r.locatorHash)
              void 0 !== c &&
                c.length > 0 &&
                a(
                  'Dependents',
                  c.map((e) => m.tuple(m.Type.LOCATOR, e))
                ),
                r.dependencies.size > 0 &&
                  !n &&
                  a(
                    'Dependencies',
                    [...r.dependencies.values()].map((e) => {
                      var r
                      const n = t.storedResolutions.get(e.descriptorHash),
                        i = void 0 !== n && null !== (r = t.storedPackages.get(n)) && void 0 !== r ? r : null
                      return m.tuple(m.Type.RESOLUTION, { descriptor: e, locator: i })
                    })
                  ),
                r.peerDependencies.size > 0 &&
                  n &&
                  a(
                    'Peer dependencies',
                    [...r.peerDependencies.values()].map((e) => {
                      var n, i
                      const o = r.dependencies.get(e.identHash),
                        A =
                          void 0 !== o && null !== (n = t.storedResolutions.get(o.descriptorHash)) && void 0 !== n
                            ? n
                            : null,
                        s = null !== A && null !== (i = t.storedPackages.get(A)) && void 0 !== i ? i : null
                      return m.tuple(m.Type.RESOLUTION, { descriptor: e, locator: s })
                    })
                  )
            }
            ge.emitTree(y, {
              configuration: e,
              json: this.json,
              stdout: this.context.stdout,
              separators: this.nameOnly ? 0 : 2,
            })
          }
        }
        ;(le.usage = d.Command.Usage({
          description: 'see information related to packages',
          details:
            '\n      This command prints various information related to the specified packages, accepting glob patterns.\n\n      By default, if the locator reference is missing, Yarn will default to print the information about all the matching direct dependencies of the package for the active workspace. To instead print all versions of the package that are direct dependencies of any of your workspaces, use the `-A,--all` flag. Adding the `-R,--recursive` flag will also report transitive dependencies.\n\n      Some fields will be hidden by default in order to keep the output readable, but can be selectively displayed by using additional options (`--dependents`, `--manifest`, `--virtuals`, ...) described in the option descriptions.\n\n      Note that this command will only print the information directly related to the selected packages - if you wish to know why the package is there in the first place, use `yarn why` which will do just that (it also provides a `-R,--recursive` flag that may be of some help).\n    ',
          examples: [['Show information about Lodash', '$0 info lodash']],
        })),
          (0, a.gn)(
            [
              d.Command.Boolean('-A,--all', {
                description: 'Print versions of a package from the whole project',
              }),
            ],
            le.prototype,
            'all',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-R,--recursive', {
                description: 'Print information for all packages, including transitive dependencies',
              }),
            ],
            le.prototype,
            'recursive',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Array('-X,--extra', {
                description: 'An array of requests of extra data provided by plugins',
              }),
            ],
            le.prototype,
            'extra',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--cache', {
                description: 'Print information about the cache entry of a package (path, size, checksum)',
              }),
            ],
            le.prototype,
            'cache',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--dependents', {
                description: 'Print all dependents for each matching package',
              }),
            ],
            le.prototype,
            'dependents',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--manifest', {
                description: 'Print data obtained by looking at the package archive (license, homepage, ...)',
              }),
            ],
            le.prototype,
            'manifest',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--name-only', {
                description: 'Only print the name for the matching packages',
              }),
            ],
            le.prototype,
            'nameOnly',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--virtuals', {
                description: 'Print each instance of the virtual packages',
              }),
            ],
            le.prototype,
            'virtuals',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            le.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([d.Command.Rest()], le.prototype, 'patterns', void 0),
          (0, a.gn)([d.Command.Path('info')], le.prototype, 'execute', null)
        var ue = r(11640),
          he = r(5864)
        class pe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1), (this.checkCache = !1), (this.skipBuilds = !1), (this.silent = !1)
          }
          async execute() {
            var e, t, r
            const n = await s.VK.find(this.context.cwd, this.context.plugins)
            void 0 !== this.inlineBuilds &&
              n.useWithSource('<cli>', { enableInlineBuilds: this.inlineBuilds }, n.startingCwd, {
                overwrite: !0,
              })
            const i = !!process.env.NOW_BUILDER,
              o = !!process.env.NETLIFY,
              A = !!process.env.FUNCTION_TARGET || !!process.env.GOOGLE_RUNTIME,
              a = async (e, { error: t }) => {
                const r = await p.Pk.start(
                  { configuration: n, stdout: this.context.stdout, includeFooter: !1 },
                  async (r) => {
                    t ? r.reportError(u.b.DEPRECATED_CLI_SETTINGS, e) : r.reportWarning(u.b.DEPRECATED_CLI_SETTINGS, e)
                  }
                )
                return r.hasErrors() ? r.exitCode() : null
              }
            if (void 0 !== this.ignoreEngines) {
              const e = await a(
                "The --ignore-engines option is deprecated; engine checking isn't a core feature anymore",
                { error: !i }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.registry) {
              const e = await a(
                'The --registry option is deprecated; prefer setting npmRegistryServer in your .yarnrc.yml file',
                { error: !1 }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.preferOffline) {
              const e = await a(
                "The --prefer-offline flag is deprecated; use the --cached flag with 'yarn add' instead",
                { error: !i }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.production) {
              const e = await a(
                "The --production option is deprecated on 'install'; use 'yarn workspaces focus' instead",
                { error: !0 }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.nonInteractive) {
              const e = await a('The --non-interactive option is deprecated', { error: !A })
              if (null !== e) return e
            }
            if (void 0 !== this.frozenLockfile) {
              const e = await a(
                'The --frozen-lockfile option is deprecated; use --immutable and/or --immutable-cache instead',
                { error: !A && !he.TRAVIS }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.cacheFolder) {
              const e = await a('The cache-folder option has been deprecated; use rc settings instead', {
                error: !o,
              })
              if (null !== e) return e
            }
            const l =
              void 0 === this.immutable && void 0 === this.frozenLockfile
                ? null !== (e = n.get('enableImmutableInstalls')) && void 0 !== e && e
                : null !== (r = null !== (t = this.immutable) && void 0 !== t ? t : this.frozenLockfile) &&
                  void 0 !== r &&
                  r
            if (null !== n.projectCwd) {
              const e = await p.Pk.start(
                { configuration: n, json: this.json, stdout: this.context.stdout, includeFooter: !1 },
                async (e) => {
                  ;(await (async function (e, t) {
                    if (!e.projectCwd) return !1
                    const r = y.y1.join(e.projectCwd, e.get('lockfileFilename'))
                    if (!(await B.xfs.existsPromise(r))) return !1
                    const n = await B.xfs.readFilePromise(r, 'utf8')
                    if (!n.includes('<<<<<<<')) return !1
                    if (t)
                      throw new X.lk(
                        u.b.AUTOMERGE_IMMUTABLE,
                        'Cannot autofix a lockfile when running an immutable install'
                      )
                    const [i, o] = (function (e) {
                      const t = [[], []],
                        r = e.split(/\r?\n/g)
                      let n = !1
                      for (; r.length > 0; ) {
                        const e = r.shift()
                        if (void 0 === e) throw new Error('Assertion failed: Some lines should remain')
                        if (e.startsWith('<<<<<<<')) {
                          for (; r.length > 0; ) {
                            const e = r.shift()
                            if (void 0 === e) throw new Error('Assertion failed: Some lines should remain')
                            if ('=======' === e) {
                              n = !1
                              break
                            }
                            n || e.startsWith('|||||||') ? (n = !0) : t[0].push(e)
                          }
                          for (; r.length > 0; ) {
                            const e = r.shift()
                            if (void 0 === e) throw new Error('Assertion failed: Some lines should remain')
                            if (e.startsWith('>>>>>>>')) break
                            t[1].push(e)
                          }
                        } else t[0].push(e), t[1].push(e)
                      }
                      return [t[0].join('\n'), t[1].join('\n')]
                    })(n)
                    let A, s
                    try {
                      ;(A = (0, ue.parseSyml)(i)), (s = (0, ue.parseSyml)(o))
                    } catch (e) {
                      throw new X.lk(
                        u.b.AUTOMERGE_FAILED_TO_PARSE,
                        'The individual variants of the lockfile failed to parse'
                      )
                    }
                    const a = { ...A, ...s }
                    for (const [e, t] of Object.entries(a)) 'string' == typeof t && delete a[e]
                    return (
                      await B.xfs.changeFilePromise(r, (0, ue.stringifySyml)(a), {
                        automaticNewlines: !0,
                      }),
                      !0
                    )
                  })(n, l)) &&
                    (e.reportInfo(u.b.AUTOMERGE_SUCCESS, 'Automatically fixed merge conflicts 👍'), e.reportSeparator())
                }
              )
              if (e.hasErrors()) return e.exitCode()
            }
            if (null !== n.projectCwd) {
              const e = await p.Pk.start(
                { configuration: n, json: this.json, stdout: this.context.stdout, includeFooter: !1 },
                async (e) => {
                  var t
                  ;(null === (t = s.VK.telemetry) || void 0 === t ? void 0 : t.isNew) &&
                    (e.reportInfo(
                      u.b.TELEMETRY_NOTICE,
                      'Yarn will periodically gather anonymous telemetry: https://yarnpkg.com/advanced/telemetry'
                    ),
                    e.reportInfo(
                      u.b.TELEMETRY_NOTICE,
                      `Run ${m.pretty(n, 'yarn config set --home enableTelemetry 0', m.Type.CODE)} to disable`
                    ),
                    e.reportSeparator())
                }
              )
              if (e.hasErrors()) return e.exitCode()
            }
            const { project: f, workspace: d } = await h.I.find(n, this.context.cwd),
              C = await g.C.find(n, { immutable: this.immutableCache, check: this.checkCache })
            if (!d) throw new c.WorkspaceRequiredError(f.cwd, this.context.cwd)
            return (
              await p.Pk.start(
                { configuration: n, json: this.json, stdout: this.context.stdout, includeLogs: !0 },
                async (e) => {
                  await f.install({ cache: C, report: e, immutable: l, skipBuild: this.skipBuilds })
                }
              )
            ).exitCode()
          }
        }
        ;(pe.usage = d.Command.Usage({
          description: 'install the project dependencies',
          details:
            "\n      This command setup your project if needed. The installation is splitted in four different steps that each have their own characteristics:\n\n      - **Resolution:** First the package manager will resolve your dependencies. The exact way a dependency version is privileged over another isn't standardized outside of the regular semver guarantees. If a package doesn't resolve to what you would expect, check that all dependencies are correctly declared (also check our website for more information: ).\n\n      - **Fetch:** Then we download all the dependencies if needed, and make sure that they're all stored within our cache (check the value of `cacheFolder` in `yarn config` to see where are stored the cache files).\n\n      - **Link:** Then we send the dependency tree information to internal plugins tasked from writing them on the disk in some form (for example by generating the .pnp.js file you might know).\n\n      - **Build:** Once the dependency tree has been written on the disk, the package manager will now be free to run the build scripts for all packages that might need it, in a topological order compatible with the way they depend on one another.\n\n      Note that running this command is not part of the recommended workflow. Yarn supports zero-installs, which means that as long as you store your cache and your .pnp.js file inside your repository, everything will work without requiring any install right after cloning your repository or switching branches.\n\n      If the `--immutable` option is set, Yarn will abort with an error exit code if the lockfile was to be modified (other paths can be added using the `immutablePaths` configuration setting). For backward compatibility we offer an alias under the name of `--frozen-lockfile`, but it will be removed in a later release.\n\n      If the `--immutable-cache` option is set, Yarn will abort with an error exit code if the cache folder was to be modified (either because files would be added, or because they'd be removed).\n\n      If the `--check-cache` option is set, Yarn will always refetch the packages and will ensure that their checksum matches what's 1/ described in the lockfile 2/ inside the existing cache files (if present). This is recommended as part of your CI workflow if you're both following the Zero-Installs model and accepting PRs from third-parties, as they'd otherwise have the ability to alter the checked-in packages before submitting them.\n\n      If the `--inline-builds` option is set, Yarn will verbosely print the output of the build steps of your dependencies (instead of writing them into individual files). This is likely useful mostly for debug purposes only when using Docker-like environments.\n\n      If the `--skip-builds` option is set, Yarn will not run the build scripts at all. Note that this is different from setting `enableScripts` to false because the later will disable build scripts, and thus affect the content of the artifacts generated on disk, whereas the former will just disable the build step - but not the scripts themselves, which just won't run.\n    ",
          examples: [
            ['Install the project', '$0 install'],
            ['Validate a project when using Zero-Installs', '$0 install --immutable --immutable-cache'],
            [
              'Validate a project when using Zero-Installs (slightly safer if you accept external PRs)',
              '$0 install --immutable --immutable-cache --check-cache',
            ],
          ],
        })),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            pe.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--immutable', {
                description: 'Abort with an error exit code if the lockfile was to be modified',
              }),
            ],
            pe.prototype,
            'immutable',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--immutable-cache', {
                description: 'Abort with an error exit code if the cache folder was to be modified',
              }),
            ],
            pe.prototype,
            'immutableCache',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--check-cache', {
                description: 'Always refetch the packages and ensure that their checksums are consistent',
              }),
            ],
            pe.prototype,
            'checkCache',
            void 0
          ),
          (0, a.gn)([d.Command.Boolean('--production', { hidden: !0 })], pe.prototype, 'production', void 0),
          (0, a.gn)([d.Command.Boolean('--non-interactive', { hidden: !0 })], pe.prototype, 'nonInteractive', void 0),
          (0, a.gn)([d.Command.Boolean('--frozen-lockfile', { hidden: !0 })], pe.prototype, 'frozenLockfile', void 0),
          (0, a.gn)([d.Command.Boolean('--prefer-offline', { hidden: !0 })], pe.prototype, 'preferOffline', void 0),
          (0, a.gn)([d.Command.Boolean('--ignore-engines', { hidden: !0 })], pe.prototype, 'ignoreEngines', void 0),
          (0, a.gn)([d.Command.String('--registry', { hidden: !0 })], pe.prototype, 'registry', void 0),
          (0, a.gn)(
            [
              d.Command.Boolean('--inline-builds', {
                description: 'Verbosely print the output of the build steps of dependencies',
              }),
            ],
            pe.prototype,
            'inlineBuilds',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--skip-builds', { description: 'Skip the build step altogether' })],
            pe.prototype,
            'skipBuilds',
            void 0
          ),
          (0, a.gn)([d.Command.String('--cache-folder', { hidden: !0 })], pe.prototype, 'cacheFolder', void 0),
          (0, a.gn)([d.Command.Boolean('--silent', { hidden: !0 })], pe.prototype, 'silent', void 0),
          (0, a.gn)([d.Command.Path(), d.Command.Path('install')], pe.prototype, 'execute', null)
        class fe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.all = !1), (this.private = !1), (this.relative = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd),
              n = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const i = y.y1.resolve(this.context.cwd, y.cS.toPortablePath(this.destination)),
              o = await s.VK.find(i, this.context.plugins),
              { project: A, workspace: a } = await h.I.find(o, i)
            if (!a) throw new c.WorkspaceRequiredError(A.cwd, i)
            const l = t.topLevelWorkspace,
              u = []
            if (this.all) {
              for (const e of A.workspaces) !e.manifest.name || (e.manifest.private && !this.private) || u.push(e)
              if (0 === u.length) throw new d.UsageError('No workspace found to be linked in the target project')
            } else {
              if (!a.manifest.name)
                throw new d.UsageError("The target workspace doesn't have a name and thus cannot be linked")
              if (a.manifest.private && !this.private)
                throw new d.UsageError(
                  'The target workspace is marked private - use the --private flag to link it anyway'
                )
              u.push(a)
            }
            for (const e of u) {
              const r = f.stringifyIdent(e.locator),
                n = this.relative ? y.y1.relative(t.cwd, e.cwd) : e.cwd
              l.manifest.resolutions.push({
                pattern: { descriptor: { fullName: r } },
                reference: 'portal:' + n,
              })
            }
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (e) => {
                await t.install({ cache: n, report: e })
              })
            ).exitCode()
          }
        }
        ;(fe.usage = d.Command.Usage({
          description: 'connect the local project to another one',
          details:
            '\n      This command will set a new `resolutions` field in the project-level manifest and point it to the workspace at the specified location (even if part of another project).\n\n      There is no `yarn unlink` command. To unlink the workspaces from the current project one must revert the changes made to the `resolutions` field.\n    ',
          examples: [
            ['Register a remote workspace for use in the current project', '$0 link ~/ts-loader'],
            ['Register all workspaces from a remote project for use in the current project', '$0 link ~/jest --all'],
          ],
        })),
          (0, a.gn)([d.Command.String()], fe.prototype, 'destination', void 0),
          (0, a.gn)(
            [
              d.Command.Boolean('-A,--all', {
                description: 'Link all workspaces belonging to the target project to the current one',
              }),
            ],
            fe.prototype,
            'all',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-p,--private', {
                description: 'Also link private workspaces belonging to the target project to the current one',
              }),
            ],
            fe.prototype,
            'private',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-r,--relative', {
                description: 'Link workspaces using relative paths instead of absolute paths',
              }),
            ],
            fe.prototype,
            'relative',
            void 0
          ),
          (0, a.gn)([d.Command.Path('link')], fe.prototype, 'execute', null)
        class de extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            return this.cli.run(['exec', 'node', ...this.args])
          }
        }
        ;(de.usage = d.Command.Usage({
          description: 'run node with the hook already setup',
          details:
            "\n      This command simply runs Node. It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n\n      The Node process will use the exact same version of Node as the one used to run Yarn itself, which might be a good way to ensure that your commands always use a consistent Node version.\n    ",
          examples: [['Run a Node script', '$0 node ./my-script.js']],
        })),
          (0, a.gn)([d.Command.Proxy()], de.prototype, 'args', void 0),
          (0, a.gn)([d.Command.Path('node')], de.prototype, 'execute', null)
        var Ce = r(20624),
          Ie = r(12087),
          Ee = r(85622),
          me = r.n(Ee),
          Be = r(36545),
          ye = r(79669)
        class we extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.onlyIfNeeded = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            if (e.get('yarnPath') && this.onlyIfNeeded) return 0
            let t
            if ('latest' === this.version || 'berry' === this.version)
              t = 'https://github.com/yarnpkg/berry/raw/master/packages/yarnpkg-cli/bin/yarn.js'
            else if ('classic' === this.version) t = 'https://nightly.yarnpkg.com/latest.js'
            else if (Be.satisfiesWithPrereleases(this.version, '>=2.0.0'))
              t = `https://github.com/yarnpkg/berry/raw/%40yarnpkg/cli/${this.version}/packages/yarnpkg-cli/bin/yarn.js`
            else {
              if (!Be.satisfiesWithPrereleases(this.version, '^0.x || ^1.x'))
                throw Q().validRange(this.version)
                  ? new d.UsageError(
                      "Support for ranges got removed - please use the exact version you want to install, or 'latest' to get the latest build available"
                    )
                  : new d.UsageError(`Invalid version descriptor "${this.version}"`)
              t = `https://github.com/yarnpkg/yarn/releases/download/v${this.version}/yarn-${this.version}.js`
            }
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (r) => {
                r.reportInfo(u.b.UNNAMED, 'Downloading ' + m.pretty(e, t, 'green'))
                const n = await ye.get(t, { configuration: e })
                await Qe(e, null, n, { report: r })
              })
            ).exitCode()
          }
        }
        async function Qe(e, t, r, { report: n }) {
          const i = e.projectCwd ? e.projectCwd : e.startingCwd
          null === t &&
            (await B.xfs.mktempPromise(async (e) => {
              const n = y.y1.join(e, 'yarn.cjs')
              await B.xfs.writeFilePromise(n, r)
              const { stdout: o } = await ae.execvp(process.execPath, [y.cS.fromPortablePath(n), '--version'], {
                cwd: i,
                env: { ...process.env, YARN_IGNORE_PATH: '1' },
              })
              if (((t = o.trim()), !Q().valid(t))) throw new Error('Invalid semver version')
            }))
          const o = y.y1.resolve(i, '.yarn/releases'),
            A = y.y1.resolve(o, `yarn-${t}.cjs`),
            a = y.y1.relative(e.startingCwd, A),
            c = y.y1.relative(i, A),
            g = e.get('yarnPath'),
            l = null === g || g.startsWith(o + '/')
          n.reportInfo(u.b.UNNAMED, 'Saving the new release in ' + m.pretty(e, a, 'magenta')),
            await B.xfs.removePromise(y.y1.dirname(A)),
            await B.xfs.mkdirPromise(y.y1.dirname(A), { recursive: !0 }),
            await B.xfs.writeFilePromise(A, r),
            await B.xfs.chmodPromise(A, 493),
            l && (await s.VK.updateConfiguration(i, { yarnPath: c }))
        }
        ;(we.usage = d.Command.Usage({
          description: 'lock the Yarn version used by the project',
          details:
            '\n      This command will download a specific release of Yarn directly from the Yarn GitHub repository, will store it inside your project, and will change the `yarnPath` settings from your project `.yarnrc.yml` file to point to the new file.\n\n      A very good use case for this command is to enforce the version of Yarn used by the any single member of your team inside a same project - by doing this you ensure that you have control on Yarn upgrades and downgrades (including on your deployment servers), and get rid of most of the headaches related to someone using a slightly different version and getting a different behavior than you.\n    ',
          examples: [
            ['Download the latest release from the Yarn repository', '$0 set version latest'],
            ['Download the latest classic release from the Yarn repository', '$0 set version classic'],
            ['Download a specific Yarn 2 build', '$0 set version 2.0.0-rc.30'],
            ['Switch back to a specific Yarn 1 release', '$0 set version 1.22.1'],
          ],
        })),
          (0, a.gn)(
            [
              d.Command.Boolean('--only-if-needed', {
                description: "Only lock the Yarn version if it isn't already locked",
              }),
            ],
            we.prototype,
            'onlyIfNeeded',
            void 0
          ),
          (0, a.gn)([d.Command.String()], we.prototype, 'version', void 0),
          (0, a.gn)(
            [d.Command.Path('policies', 'set-version'), d.Command.Path('set', 'version')],
            we.prototype,
            'execute',
            null
          )
        const ve = /^[0-9]+$/
        function be(e) {
          return ve.test(e) ? `pull/${e}/head` : e
        }
        class De extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.repository = 'https://github.com/yarnpkg/berry.git'),
              (this.branch = 'master'),
              (this.plugins = []),
              (this.noMinify = !1),
              (this.force = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t =
                void 0 !== this.installPath
                  ? y.y1.resolve(this.context.cwd, y.cS.toPortablePath(this.installPath))
                  : y.y1.resolve(
                      y.cS.toPortablePath((0, Ie.tmpdir)()),
                      'yarnpkg-sources',
                      Ce.makeHash(this.repository).slice(0, 6)
                    )
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (r) => {
                await ke(this, { configuration: e, report: r, target: t }),
                  r.reportSeparator(),
                  r.reportInfo(u.b.UNNAMED, 'Building a fresh bundle'),
                  r.reportSeparator(),
                  await Se(
                    (({ plugins: e, noMinify: t }, r) => [
                      [
                        'yarn',
                        'build:cli',
                        ...new Array().concat(...e.map((e) => ['--plugin', me().resolve(r, e)])),
                        ...(t ? ['--no-minify'] : []),
                        '|',
                      ],
                    ])(this, t),
                    { configuration: e, context: this.context, target: t }
                  ),
                  r.reportSeparator()
                const n = y.y1.resolve(t, 'packages/yarnpkg-cli/bundles/yarn.js'),
                  i = await B.xfs.readFilePromise(n)
                await Qe(e, 'sources', i, { report: r })
              })
            ).exitCode()
          }
        }
        async function Se(e, { configuration: t, context: r, target: n }) {
          for (const [i, ...o] of e) {
            const e = '|' === o[o.length - 1]
            if ((e && o.pop(), e))
              await ae.pipevp(i, o, {
                cwd: n,
                stdin: r.stdin,
                stdout: r.stdout,
                stderr: r.stderr,
                strict: !0,
              })
            else {
              r.stdout.write(m.pretty(t, '  $ ' + [i, ...o].join(' '), 'grey') + '\n')
              try {
                await ae.execvp(i, o, { cwd: n, strict: !0 })
              } catch (e) {
                throw (r.stdout.write(e.stdout || e.stack), e)
              }
            }
          }
        }
        async function ke(e, { configuration: t, report: r, target: n }) {
          let i = !1
          if (!e.force && B.xfs.existsSync(y.y1.join(n, '.git'))) {
            r.reportInfo(u.b.UNNAMED, 'Fetching the latest commits'), r.reportSeparator()
            try {
              await Se(
                (({ branch: e }) => [
                  ['git', 'fetch', 'origin', be(e), '--force'],
                  ['git', 'reset', '--hard', 'FETCH_HEAD'],
                  ['git', 'clean', '-dfx'],
                ])(e),
                { configuration: t, context: e.context, target: n }
              ),
                (i = !0)
            } catch (e) {
              r.reportSeparator(), r.reportWarning(u.b.UNNAMED, "Repository update failed; we'll try to regenerate it")
            }
          }
          i ||
            (r.reportInfo(u.b.UNNAMED, 'Cloning the remote repository'),
            r.reportSeparator(),
            await B.xfs.removePromise(n),
            await B.xfs.mkdirPromise(n, { recursive: !0 }),
            await Se(
              (({ repository: e, branch: t }, r) => [
                ['git', 'init', y.cS.fromPortablePath(r)],
                ['git', 'remote', 'add', 'origin', e],
                ['git', 'fetch', 'origin', be(t)],
                ['git', 'reset', '--hard', 'FETCH_HEAD'],
              ])(e, n),
              { configuration: t, context: e.context, target: n }
            ))
        }
        ;(De.usage = d.Command.Usage({
          description: 'build Yarn from master',
          details:
            '\n      This command will clone the Yarn repository into a temporary folder, then build it. The resulting bundle will then be copied into the local project.\n    ',
          examples: [['Build Yarn from master', '$0 set version from sources']],
        })),
          (0, a.gn)(
            [
              d.Command.String('--path', {
                description: 'The path where the repository should be cloned to',
              }),
            ],
            De.prototype,
            'installPath',
            void 0
          ),
          (0, a.gn)(
            [d.Command.String('--repository', { description: 'The repository that should be cloned' })],
            De.prototype,
            'repository',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.String('--branch', {
                description: 'The branch of the repository that should be cloned',
              }),
            ],
            De.prototype,
            'branch',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Array('--plugin', {
                description: 'An array of additional plugins that should be included in the bundle',
              }),
            ],
            De.prototype,
            'plugins',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--no-minify', {
                description: 'Build a bundle for development (debugging) - non-minified and non-mangled',
              }),
            ],
            De.prototype,
            'noMinify',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-f,--force', {
                description: 'Always clone the repository instead of trying to fetch the latest commits',
              }),
            ],
            De.prototype,
            'force',
            void 0
          ),
          (0, a.gn)([d.Command.Path('set', 'version', 'from', 'sources')], De.prototype, 'execute', null)
        var Me = r(78835)
        const Fe = require('vm')
        async function Ne(e) {
          const t = await ye.get('https://raw.githubusercontent.com/yarnpkg/berry/master/plugins.yml', {
            configuration: e,
          })
          return (0, ue.parseSyml)(t.toString())
        }
        class Re extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            return (
              await p.Pk.start({ configuration: e, json: this.json, stdout: this.context.stdout }, async (t) => {
                const r = await Ne(e)
                for (const [e, { experimental: n, ...i }] of Object.entries(r)) {
                  let r = e
                  n && (r += ' [experimental]'), t.reportJson({ name: e, experimental: n, ...i }), t.reportInfo(null, r)
                }
              })
            ).exitCode()
          }
        }
        ;(Re.usage = d.Command.Usage({
          category: 'Plugin-related commands',
          description: 'list the available official plugins',
          details:
            '\n      This command prints the plugins available directly from the Yarn repository. Only those plugins can be referenced by name in `yarn plugin import`.\n    ',
          examples: [['List the official plugins', '$0 plugin list']],
        })),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            Re.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([d.Command.Path('plugin', 'list')], Re.prototype, 'execute', null)
        class Ke extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (t) => {
                const { project: r } = await h.I.find(e, this.context.cwd)
                let n, i
                if (this.name.match(/^\.{0,2}[\\/]/) || y.cS.isAbsolute(this.name)) {
                  const o = y.y1.resolve(this.context.cwd, y.cS.toPortablePath(this.name))
                  t.reportInfo(u.b.UNNAMED, 'Reading ' + m.pretty(e, o, m.Type.PATH)),
                    (n = y.y1.relative(r.cwd, o)),
                    (i = await B.xfs.readFilePromise(o))
                } else {
                  let r
                  if (this.name.match(/^https?:/)) {
                    try {
                      new Me.URL(this.name)
                    } catch (e) {
                      throw new X.lk(
                        u.b.INVALID_PLUGIN_REFERENCE,
                        `Plugin specifier "${this.name}" is neither a plugin name nor a valid url`
                      )
                    }
                    ;(n = this.name), (r = this.name)
                  } else {
                    const t = f.parseIdent(this.name.replace(/^((@yarnpkg\/)?plugin-)?/, '@yarnpkg/plugin-')),
                      i = f.stringifyIdent(t),
                      o = await Ne(e)
                    if (!Object.prototype.hasOwnProperty.call(o, i))
                      throw new X.lk(
                        u.b.PLUGIN_NAME_NOT_FOUND,
                        `Couldn't find a plugin named "${i}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be referenced by their name; any other plugin will have to be referenced through its public url (for example https://github.com/yarnpkg/berry/raw/master/packages/plugin-typescript/bin/%40yarnpkg/plugin-typescript.js).`
                      )
                    ;(n = i), (r = o[i].url)
                  }
                  t.reportInfo(u.b.UNNAMED, 'Downloading ' + m.pretty(e, r, 'green')),
                    (i = await ye.get(r, { configuration: e }))
                }
                await Le(n, i, { project: r, report: t })
              })
            ).exitCode()
          }
        }
        async function Le(e, t, { project: r, report: n }) {
          const { configuration: i } = r,
            o = {},
            A = { exports: o }
          ;(0, Fe.runInNewContext)(t.toString(), { module: A, exports: o })
          const a = A.exports.name,
            c = `.yarn/plugins/${a}.cjs`,
            g = y.y1.resolve(r.cwd, c)
          n.reportInfo(u.b.UNNAMED, 'Saving the new plugin in ' + m.pretty(i, c, 'magenta')),
            await B.xfs.mkdirPromise(y.y1.dirname(g), { recursive: !0 }),
            await B.xfs.writeFilePromise(g, t)
          const l = { path: c, spec: e }
          await s.VK.updateConfiguration(r.cwd, (e) => {
            const t = []
            let n = !1
            for (const i of e.plugins || []) {
              const e = 'string' != typeof i ? i.path : i,
                o = y.y1.resolve(r.cwd, y.cS.toPortablePath(e)),
                { name: A } = q.dynamicRequire(y.cS.fromPortablePath(o))
              A !== a ? t.push(i) : (t.push(l), (n = !0))
            }
            return n || t.push(l), { ...e, plugins: t }
          })
        }
        ;(Ke.usage = d.Command.Usage({
          category: 'Plugin-related commands',
          description: 'download a plugin',
          details:
            "\n      This command downloads the specified plugin from its remote location and updates the configuration to reference it in further CLI invocations.\n\n      Three types of plugin references are accepted:\n\n      - If the plugin is stored within the Yarn repository, it can be referenced by name.\n      - Third-party plugins can be referenced directly through their public urls.\n      - Local plugins can be referenced by their path on the disk.\n\n      Plugins cannot be downloaded from the npm registry, and aren't allowed to have dependencies (they need to be bundled into a single file, possibly thanks to the `@yarnpkg/builder` package).\n    ",
          examples: [
            ['Download and activate the "@yarnpkg/plugin-exec" plugin', '$0 plugin import @yarnpkg/plugin-exec'],
            ['Download and activate the "@yarnpkg/plugin-exec" plugin (shorthand)', '$0 plugin import exec'],
            ['Download and activate a community plugin', '$0 plugin import https://example.org/path/to/plugin.js'],
            ['Activate a local plugin', '$0 plugin import ./path/to/plugin.js'],
          ],
        })),
          (0, a.gn)([d.Command.String()], Ke.prototype, 'name', void 0),
          (0, a.gn)([d.Command.Path('plugin', 'import')], Ke.prototype, 'execute', null)
        class xe extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.repository = 'https://github.com/yarnpkg/berry.git'),
              (this.branch = 'master'),
              (this.noMinify = !1),
              (this.force = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t =
                void 0 !== this.installPath
                  ? y.y1.resolve(this.context.cwd, y.cS.toPortablePath(this.installPath))
                  : y.y1.resolve(
                      y.cS.toPortablePath((0, Ie.tmpdir)()),
                      'yarnpkg-sources',
                      Ce.makeHash(this.repository).slice(0, 6)
                    )
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (r) => {
                const { project: n } = await h.I.find(e, this.context.cwd),
                  i = f.parseIdent(this.name.replace(/^((@yarnpkg\/)?plugin-)?/, '@yarnpkg/plugin-')),
                  o = f.stringifyIdent(i),
                  A = await Ne(e)
                if (!Object.prototype.hasOwnProperty.call(A, o))
                  throw new X.lk(
                    u.b.PLUGIN_NAME_NOT_FOUND,
                    `Couldn't find a plugin named "${o}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be built and imported from sources.`
                  )
                const s = o,
                  a = s.replace(/@yarnpkg\//, '')
                await ke(this, { configuration: e, report: r, target: t }),
                  r.reportSeparator(),
                  r.reportInfo(u.b.UNNAMED, 'Building a fresh ' + a),
                  r.reportSeparator(),
                  await Se(
                    (({ pluginName: e, noMinify: t }, r) => [
                      ['yarn', 'build:' + e, ...(t ? ['--no-minify'] : []), '|'],
                    ])({ pluginName: a, noMinify: this.noMinify }),
                    { configuration: e, context: this.context, target: t }
                  ),
                  r.reportSeparator()
                const c = y.y1.resolve(t, `packages/${a}/bundles/${s}.js`),
                  g = await B.xfs.readFilePromise(c)
                await Le(s, g, { project: n, report: r })
              })
            ).exitCode()
          }
        }
        ;(xe.usage = d.Command.Usage({
          category: 'Plugin-related commands',
          description: 'build a plugin from sources',
          details:
            '\n      This command clones the Yarn repository into a temporary folder, builds the specified contrib plugin and updates the configuration to reference it in further CLI invocations.\n\n      The plugins can be referenced by their short name if sourced from the official Yarn repository.\n    ',
          examples: [
            [
              'Build and activate the "@yarnpkg/plugin-exec" plugin',
              '$0 plugin import from sources @yarnpkg/plugin-exec',
            ],
            ['Build and activate the "@yarnpkg/plugin-exec" plugin (shorthand)', '$0 plugin import from sources exec'],
          ],
        })),
          (0, a.gn)([d.Command.String()], xe.prototype, 'name', void 0),
          (0, a.gn)(
            [
              d.Command.String('--path', {
                description: 'The path where the repository should be cloned to',
              }),
            ],
            xe.prototype,
            'installPath',
            void 0
          ),
          (0, a.gn)(
            [d.Command.String('--repository', { description: 'The repository that should be cloned' })],
            xe.prototype,
            'repository',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.String('--branch', {
                description: 'The branch of the repository that should be cloned',
              }),
            ],
            xe.prototype,
            'branch',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--no-minify', {
                description: 'Build a plugin for development (debugging) - non-minified and non-mangled',
              }),
            ],
            xe.prototype,
            'noMinify',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-f,--force', {
                description: 'Always clone the repository instead of trying to fetch the latest commits',
              }),
            ],
            xe.prototype,
            'force',
            void 0
          ),
          (0, a.gn)([d.Command.Path('plugin', 'import', 'from', 'sources')], xe.prototype, 'execute', null)
        class Pe extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd)
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (r) => {
                const n = this.name,
                  i = f.parseIdent(n)
                if (!e.plugins.has(n))
                  throw new d.UsageError(f.prettyIdent(e, i) + " isn't referenced by the current configuration")
                const o = `.yarn/plugins/${n}.cjs`,
                  A = y.y1.resolve(t.cwd, o)
                B.xfs.existsSync(A) &&
                  (r.reportInfo(u.b.UNNAMED, `Removing ${m.pretty(e, o, m.Type.PATH)}...`),
                  await B.xfs.removePromise(A)),
                  r.reportInfo(u.b.UNNAMED, 'Updating the configuration...'),
                  await s.VK.updateConfiguration(t.cwd, (e) => {
                    if (!Array.isArray(e.plugins)) return e
                    const t = e.plugins.filter((e) => e.path !== o)
                    return e.plugins.length === t.length ? e : { ...e, plugins: t }
                  })
              })
            ).exitCode()
          }
        }
        ;(Pe.usage = d.Command.Usage({
          category: 'Plugin-related commands',
          description: 'remove a plugin',
          details:
            '\n      This command deletes the specified plugin from the .yarn/plugins folder and removes it from the configuration.\n\n      **Note:** The plugins have to be referenced by their name property, which can be obtained using the `yarn plugin runtime` command. Shorthands are not allowed.\n   ',
          examples: [
            ['Remove a plugin imported from the Yarn repository', '$0 plugin remove @yarnpkg/plugin-typescript'],
            ['Remove a plugin imported from a local file', '$0 plugin remove my-local-plugin'],
          ],
        })),
          (0, a.gn)([d.Command.String()], Pe.prototype, 'name', void 0),
          (0, a.gn)([d.Command.Path('plugin', 'remove')], Pe.prototype, 'execute', null)
        class Te extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            return (
              await p.Pk.start({ configuration: e, json: this.json, stdout: this.context.stdout }, async (t) => {
                for (const r of e.plugins.keys()) {
                  const e = this.context.plugins.plugins.has(r)
                  let n = r
                  e && (n += ' [builtin]'), t.reportJson({ name: r, builtin: e }), t.reportInfo(null, '' + n)
                }
              })
            ).exitCode()
          }
        }
        ;(Te.usage = d.Command.Usage({
          category: 'Plugin-related commands',
          description: 'list the active plugins',
          details:
            '\n      This command prints the currently active plugins. Will be displayed both builtin plugins and external plugins.\n    ',
          examples: [['List the currently active plugins', '$0 plugin runtime']],
        })),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            Te.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([d.Command.Path('plugin', 'runtime')], Te.prototype, 'execute', null)
        class Oe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.idents = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd),
              n = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const i = new Set()
            for (const e of this.idents) i.add(f.parseIdent(e).identHash)
            await t.resolveEverything({ cache: n, report: new I.$() })
            const o = e.get('bstatePath'),
              A = B.xfs.existsSync(o) ? (0, ue.parseSyml)(await B.xfs.readFilePromise(o, 'utf8')) : {},
              a = new Map()
            for (const e of t.storedPackages.values()) {
              if (!Object.prototype.hasOwnProperty.call(A, e.locatorHash)) continue
              if (0 === i.size || i.has(e.identHash)) continue
              const t = A[e.locatorHash]
              a.set(e.locatorHash, t)
            }
            if (a.size > 0) {
              const r = e.get('bstatePath'),
                n = h.I.generateBuildStateFile(a, t.storedPackages)
              await B.xfs.mkdirPromise(y.y1.dirname(r), { recursive: !0 }),
                await B.xfs.changeFilePromise(r, n, { automaticNewlines: !0 })
            } else await B.xfs.removePromise(o)
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout, includeLogs: !this.context.quiet },
                async (e) => {
                  await t.install({ cache: n, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(Oe.usage = d.Command.Usage({
          description: "rebuild the project's native packages",
          details:
            "\n      This command will automatically cause Yarn to forget about previous compilations of the given packages and to run them again.\n\n      Note that while Yarn forgets the compilation, the previous artifacts aren't erased from the filesystem and may affect the next builds (in good or bad). To avoid this, you may remove the .yarn/unplugged folder, or any other relevant location where packages might have been stored (Yarn may offer a way to do that automatically in the future).\n\n      By default all packages will be rebuilt, but you can filter the list by specifying the names of the packages you want to clear from memory.\n    ",
          examples: [
            ['Rebuild all packages', '$0 rebuild'],
            ['Rebuild fsevents only', '$0 rebuild fsevents'],
          ],
        })),
          (0, a.gn)([d.Command.Rest()], Oe.prototype, 'idents', void 0),
          (0, a.gn)([d.Command.Path('rebuild')], Oe.prototype, 'execute', null)
        class Ue extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.all = !1), (this.patterns = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd),
              n = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const o = this.all ? t.workspaces : [r],
              A = [i.REGULAR, i.DEVELOPMENT, i.PEER],
              a = []
            let l = !1
            const u = []
            for (const e of this.patterns) {
              let t = !1
              const r = f.parseIdent(e)
              for (const n of o) {
                const i = [...n.manifest.peerDependenciesMeta.keys()]
                for (const r of $()(i, e)) n.manifest.peerDependenciesMeta.delete(r), (l = !0), (t = !0)
                for (const e of A) {
                  const i = n.manifest.getForScope(e),
                    o = [...i.values()].map((e) => f.stringifyIdent(e))
                  for (const A of $()(o, f.stringifyIdent(r))) {
                    const { identHash: r } = f.parseIdent(A),
                      o = i.get(r)
                    if (void 0 === o) throw new Error('Assertion failed: Expected the descriptor to be registered')
                    n.manifest[e].delete(r), u.push([n, e, o]), (l = !0), (t = !0)
                  }
                }
              }
              t || a.push(e)
            }
            const C = a.length > 1 ? 'Patterns' : 'Pattern',
              I = a.length > 1 ? "don't" : "doesn't",
              E = this.all ? 'any' : 'this'
            if (a.length > 0)
              throw new d.UsageError(
                `${C} ${m.prettyList(e, a, s.a5.CODE)} ${I} match any packages referenced by ${E} workspace`
              )
            if (l) {
              await e.triggerMultipleHooks((e) => e.afterWorkspaceDependencyRemoval, u)
              return (
                await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (e) => {
                  await t.install({ cache: n, report: e })
                })
              ).exitCode()
            }
            return 0
          }
        }
        ;(Ue.usage = d.Command.Usage({
          description: 'remove dependencies from the project',
          details:
            '\n      This command will remove the packages matching the specified patterns from the current workspace.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n    ',
          examples: [
            ['Remove a dependency from the current project', '$0 remove lodash'],
            ['Remove a dependency from all workspaces at once', '$0 remove lodash --all'],
            ['Remove all dependencies starting with `eslint-`', "$0 remove 'eslint-*'"],
            ['Remove all dependencies with the `@babel` scope', "$0 remove '@babel/*'"],
            ['Remove all dependencies matching `react-dom` or `react-helmet`', "$0 remove 'react-{dom,helmet}'"],
          ],
        })),
          (0, a.gn)(
            [
              d.Command.Boolean('-A,--all', {
                description: 'Apply the operation to all workspaces from the current project',
              }),
            ],
            Ue.prototype,
            'all',
            void 0
          ),
          (0, a.gn)([d.Command.Rest()], Ue.prototype, 'patterns', void 0),
          (0, a.gn)([d.Command.Path('remove')], Ue.prototype, 'execute', null)
        class je extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (t) => {
                const n = r.manifest.scripts,
                  i = q.sortMap(n.keys(), (e) => e),
                  o = { breakLength: 1 / 0, colors: e.get('enableColors'), maxArrayLength: 2 },
                  A = i.reduce((e, t) => Math.max(e, t.length), 0)
                for (const [e, r] of n.entries()) t.reportInfo(null, `${e.padEnd(A, ' ')}   ${(0, O.inspect)(r, o)}`)
              })
            ).exitCode()
          }
        }
        ;(0, a.gn)([d.Command.Path('run')], je.prototype, 'execute', null)
        class Ye extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.inspect = !1),
              (this.inspectBrk = !1),
              (this.topLevel = !1),
              (this.binariesOnly = !1),
              (this.args = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r, locator: n } = await h.I.find(e, this.context.cwd)
            await t.restoreInstallState()
            const i = this.topLevel ? t.topLevelWorkspace.anchoredLocator : n
            if (!this.binariesOnly && (await K.hasPackageScript(i, this.scriptName, { project: t })))
              return await K.executePackageScript(i, this.scriptName, this.args, {
                project: t,
                stdin: this.context.stdin,
                stdout: this.context.stdout,
                stderr: this.context.stderr,
              })
            if ((await K.getPackageAccessibleBinaries(i, { project: t })).get(this.scriptName)) {
              const e = []
              return (
                this.inspect &&
                  ('string' == typeof this.inspect ? e.push('--inspect=' + this.inspect) : e.push('--inspect')),
                this.inspectBrk &&
                  ('string' == typeof this.inspectBrk
                    ? e.push('--inspect-brk=' + this.inspectBrk)
                    : e.push('--inspect-brk')),
                await K.executePackageAccessibleBinary(i, this.scriptName, this.args, {
                  cwd: this.context.cwd,
                  project: t,
                  stdin: this.context.stdin,
                  stdout: this.context.stdout,
                  stderr: this.context.stderr,
                  nodeArgs: e,
                })
              )
            }
            if (!this.topLevel && !this.binariesOnly && r && this.scriptName.includes(':')) {
              const e = (
                await Promise.all(t.workspaces.map(async (e) => (e.manifest.scripts.has(this.scriptName) ? e : null)))
              ).filter((e) => null !== e)
              if (1 === e.length)
                return await K.executeWorkspaceScript(e[0], this.scriptName, this.args, {
                  stdin: this.context.stdin,
                  stdout: this.context.stdout,
                  stderr: this.context.stderr,
                })
            }
            if (this.topLevel)
              throw 'node-gyp' === this.scriptName
                ? new d.UsageError(
                    `Couldn't find a script name "${this.scriptName}" in the top-level (used by ${f.prettyLocator(
                      e,
                      n
                    )}). This typically happens because some package depends on "node-gyp" to build itself, but didn't list it in their dependencies. To fix that, please run "yarn add node-gyp" into your top-level workspace. You also can open an issue on the repository of the specified package to suggest them to use an optional peer dependency.`
                  )
                : new d.UsageError(
                    `Couldn't find a script name "${this.scriptName}" in the top-level (used by ${f.prettyLocator(
                      e,
                      n
                    )}).`
                  )
            {
              if ('global' === this.scriptName)
                throw new d.UsageError(
                  "The 'yarn global' commands have been removed in 2.x - consider using 'yarn dlx' or a third-party plugin instead"
                )
              const e = [this.scriptName].concat(this.args)
              for (const [t, r] of c.pluginCommands)
                for (const n of r)
                  if (e.length >= n.length && JSON.stringify(e.slice(0, n.length)) === JSON.stringify(n))
                    throw new d.UsageError(
                      `Couldn't find a script named "${this.scriptName}", but a matching command can be found in the ${t} plugin. You can install it with "yarn plugin import ${t}".`
                    )
              throw new d.UsageError(`Couldn't find a script named "${this.scriptName}".`)
            }
          }
        }
        ;(Ye.usage = d.Command.Usage({
          description: 'run a script defined in the package.json',
          details:
            "\n      This command will run a tool. The exact tool that will be executed will depend on the current state of your workspace:\n\n      - If the `scripts` field from your local package.json contains a matching script name, its definition will get executed.\n\n      - Otherwise, if one of the local workspace's dependencies exposes a binary with a matching name, this binary will get executed.\n\n      - Otherwise, if the specified name contains a colon character and if one of the workspaces in the project contains exactly one script with a matching name, then this script will get executed.\n\n      Whatever happens, the cwd of the spawned process will be the workspace that declares the script (which makes it possible to call commands cross-workspaces using the third syntax).\n    ",
          examples: [
            ['Run the tests from the local workspace', '$0 run test'],
            ['Same thing, but without the "run" keyword', '$0 test'],
            ['Inspect Webpack while running', '$0 run --inspect-brk webpack'],
          ],
        })),
          (0, a.gn)(
            [
              d.Command.String('--inspect', {
                tolerateBoolean: !0,
                description: 'Forwarded to the underlying Node process when executing a binary',
              }),
            ],
            Ye.prototype,
            'inspect',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.String('--inspect-brk', {
                tolerateBoolean: !0,
                description: 'Forwarded to the underlying Node process when executing a binary',
              }),
            ],
            Ye.prototype,
            'inspectBrk',
            void 0
          ),
          (0, a.gn)([d.Command.Boolean('-T,--top-level', { hidden: !0 })], Ye.prototype, 'topLevel', void 0),
          (0, a.gn)([d.Command.Boolean('-B,--binaries-only', { hidden: !0 })], Ye.prototype, 'binariesOnly', void 0),
          (0, a.gn)([d.Command.Boolean('--silent', { hidden: !0 })], Ye.prototype, 'silent', void 0),
          (0, a.gn)([d.Command.String()], Ye.prototype, 'scriptName', void 0),
          (0, a.gn)([d.Command.Proxy()], Ye.prototype, 'args', void 0),
          (0, a.gn)([d.Command.Path('run')], Ye.prototype, 'execute', null)
        class Ge extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.save = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd),
              n = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const i = f.parseDescriptor(this.descriptor, !0),
              o = f.makeDescriptor(i, this.resolution)
            t.storedDescriptors.set(i.descriptorHash, i),
              t.storedDescriptors.set(o.descriptorHash, o),
              t.resolutionAliases.set(i.descriptorHash, o.descriptorHash)
            return (
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async (e) => {
                await t.install({ cache: n, report: e })
              })
            ).exitCode()
          }
        }
        ;(Ge.usage = d.Command.Usage({
          description: 'enforce a package resolution',
          details:
            '\n      This command updates the resolution table so that `descriptor` is resolved by `resolution`.\n\n      Note that by default this command only affect the current resolution table - meaning that this "manual override" will disappear if you remove the lockfile, or if the package disappear from the table. If you wish to make the enforced resolution persist whatever happens, add the `-s,--save` flag which will also edit the `resolutions` field from your top-level manifest.\n\n      Note that no attempt is made at validating that `resolution` is a valid resolution entry for `descriptor`.\n    ',
          examples: [
            ['Force all instances of lodash@^1.2.3 to resolve to 1.5.0', '$0 set resolution lodash@^1.2.3 1.5.0'],
          ],
        })),
          (0, a.gn)([d.Command.String()], Ge.prototype, 'descriptor', void 0),
          (0, a.gn)([d.Command.String()], Ge.prototype, 'resolution', void 0),
          (0, a.gn)(
            [
              d.Command.Boolean('-s,--save', {
                description: 'Persist the resolution inside the top-level manifest',
              }),
            ],
            Ge.prototype,
            'save',
            void 0
          ),
          (0, a.gn)([d.Command.Path('set', 'resolution')], Ge.prototype, 'execute', null)
        class He extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.patterns = []),
              (this.interactive = null),
              (this.exact = !1),
              (this.tilde = !1),
              (this.caret = !1)
          }
          async execute() {
            var e
            const t = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: r, workspace: n } = await h.I.find(t, this.context.cwd),
              o = await g.C.find(t)
            if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd)
            const a = null !== (e = this.interactive) && void 0 !== e ? e : t.get('preferInteractive'),
              I = v(this, r),
              E = a ? [A.KEEP, A.REUSE, A.PROJECT, A.LATEST] : [A.PROJECT, A.LATEST],
              B = [],
              y = []
            for (const e of this.patterns) {
              let t = !1
              const n = f.parseDescriptor(e)
              for (const e of r.workspaces)
                for (const A of [i.REGULAR, i.DEVELOPMENT]) {
                  const i = [...e.manifest.getForScope(A).values()].map((e) => f.stringifyIdent(e))
                  for (const s of $()(i, f.stringifyIdent(n))) {
                    const i = f.parseIdent(s),
                      a = e.manifest[A].get(i.identHash)
                    if (void 0 === a) throw new Error('Assertion failed: Expected the descriptor to be registered')
                    const c = f.makeDescriptor(i, n.range)
                    B.push(
                      Promise.resolve().then(async () => [
                        e,
                        A,
                        a,
                        await F(c, {
                          project: r,
                          workspace: e,
                          cache: o,
                          target: A,
                          modifier: I,
                          strategies: E,
                        }),
                      ])
                    ),
                      (t = !0)
                  }
                }
              t || y.push(e)
            }
            if (y.length > 1)
              throw new d.UsageError(
                `Patterns ${m.prettyList(t, y, s.a5.CODE)} don't match any packages referenced by any workspace`
              )
            if (y.length > 0)
              throw new d.UsageError(
                `Pattern ${m.prettyList(t, y, s.a5.CODE)} doesn't match any packages referenced by any workspace`
              )
            const w = await Promise.all(B),
              Q = await l.h.start({ configuration: t, stdout: this.context.stdout, suggestInstall: !1 }, async (e) => {
                for (const [, , n, { suggestions: i, rejections: o }] of w) {
                  const A = i.filter((e) => null !== e.descriptor)
                  if (0 === A.length) {
                    const [i] = o
                    if (void 0 === i) throw new Error('Assertion failed: Expected an error to have been set')
                    const A = this.cli.error(i)
                    r.configuration.get('enableNetwork')
                      ? e.reportError(
                          u.b.CANT_SUGGEST_RESOLUTIONS,
                          `${f.prettyDescriptor(t, n)} can't be resolved to a satisfying range\n\n${A}`
                        )
                      : e.reportError(
                          u.b.CANT_SUGGEST_RESOLUTIONS,
                          `${f.prettyDescriptor(
                            t,
                            n
                          )} can't be resolved to a satisfying range (note: network resolution has been disabled)\n\n${A}`
                        )
                  } else
                    A.length > 1 &&
                      !a &&
                      e.reportError(
                        u.b.CANT_SUGGEST_RESOLUTIONS,
                        f.prettyDescriptor(t, n) +
                          ' has multiple possible upgrade strategies; use -i to disambiguate manually'
                      )
                }
              })
            if (Q.hasErrors()) return Q.exitCode()
            let b = !1
            const D = []
            for (const [e, n, , { suggestions: i }] of w) {
              let o
              const A = i.filter((e) => null !== e.descriptor),
                s = A[0].descriptor,
                a = A.every((e) => f.areDescriptorsEqual(e.descriptor, s))
              1 === A.length || a
                ? (o = s)
                : ((b = !0),
                  ({ answer: o } = await (0, C.prompt)({
                    type: 'select',
                    name: 'answer',
                    message: `Which range to you want to use in ${f.prettyWorkspace(t, e)} ❯ ${n}?`,
                    choices: i.map(({ descriptor: e, name: t, reason: r }) =>
                      e ? { name: t, hint: r, descriptor: e } : { name: t, hint: r, disabled: !0 }
                    ),
                    onCancel: () => process.exit(130),
                    result(e) {
                      return this.find(e, 'descriptor')
                    },
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                  })))
              const c = e.manifest[n].get(o.identHash)
              if (void 0 === c) throw new Error('Assertion failed: This descriptor should have a matching entry')
              if (c.descriptorHash !== o.descriptorHash) e.manifest[n].set(o.identHash, o), D.push([e, n, c, o])
              else {
                const n = t.makeResolver(),
                  i = { project: r, resolver: n },
                  o = n.bindDescriptor(c, e.anchoredLocator, i)
                r.forgetResolution(o)
              }
            }
            await t.triggerMultipleHooks((e) => e.afterWorkspaceDependencyReplacement, D),
              b && this.context.stdout.write('\n')
            return (
              await p.Pk.start({ configuration: t, stdout: this.context.stdout }, async (e) => {
                await r.install({ cache: o, report: e })
              })
            ).exitCode()
          }
        }
        ;(He.usage = d.Command.Usage({
          description: 'upgrade dependencies across the project',
          details:
            "\n      This command upgrades the packages matching the list of specified patterns to their latest available version across the whole project (regardless of whether they're part of `dependencies` or `devDependencies` - `peerDependencies` won't be affected). This is a project-wide command: all workspaces will be upgraded in the process.\n\n      If `-i,--interactive` is set (or if the `preferInteractive` settings is toggled on) the command will offer various choices, depending on the detected upgrade paths. Some upgrades require this flag in order to resolve ambiguities.\n\n      The, `-C,--caret`, `-E,--exact` and  `-T,--tilde` options have the same meaning as in the `add` command (they change the modifier used when the range is missing or a tag, and are ignored when the range is explicitly set).\n\n      Generally you can see `yarn up` as a counterpart to what was `yarn upgrade --latest` in Yarn 1 (ie it ignores the ranges previously listed in your manifests), but unlike `yarn upgrade` which only upgraded dependencies in the current workspace, `yarn up` will upgrade all workspaces at the same time.\n\n      This command accepts glob patterns as arguments (if valid Descriptors and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      **Note:** The ranges have to be static, only the package scopes and names can contain glob patterns.\n    ",
          examples: [
            ['Upgrade all instances of lodash to the latest release', '$0 up lodash'],
            ['Upgrade all instances of lodash to the latest release, but ask confirmation for each', '$0 up lodash -i'],
            ['Upgrade all instances of lodash to 1.2.3', '$0 up lodash@1.2.3'],
            ['Upgrade all instances of packages with the `@babel` scope to the latest release', "$0 up '@babel/*'"],
            ['Upgrade all instances of packages containing the word `jest` to the latest release', "$0 up '*jest*'"],
            ['Upgrade all instances of packages with the `@babel` scope to 7.0.0', "$0 up '@babel/*@7.0.0'"],
          ],
        })),
          (0, a.gn)([d.Command.Rest()], He.prototype, 'patterns', void 0),
          (0, a.gn)(
            [
              d.Command.Boolean('-i,--interactive', {
                description: 'Offer various choices, depending on the detected upgrade paths',
              }),
            ],
            He.prototype,
            'interactive',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-E,--exact', {
                description: "Don't use any semver modifier on the resolved range",
              }),
            ],
            He.prototype,
            'exact',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-T,--tilde', {
                description: 'Use the `~` semver modifier on the resolved range',
              }),
            ],
            He.prototype,
            'tilde',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('-C,--caret', {
                description: 'Use the `^` semver modifier on the resolved range',
              }),
            ],
            He.prototype,
            'caret',
            void 0
          ),
          (0, a.gn)([d.Command.Path('up')], He.prototype, 'execute', null)
        class Je extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.recursive = !1), (this.json = !1), (this.peers = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            await t.restoreInstallState()
            const n = f.parseIdent(this.package).identHash,
              i = this.recursive
                ? (function (e, t, { configuration: r, peers: n }) {
                    const i = q.sortMap(e.workspaces, (e) => f.stringifyLocator(e.anchoredLocator)),
                      o = new Set(),
                      A = new Set(),
                      s = (r) => {
                        if (o.has(r.locatorHash)) return A.has(r.locatorHash)
                        if ((o.add(r.locatorHash), r.identHash === t)) return A.add(r.locatorHash), !0
                        let i = !1
                        r.identHash === t && (i = !0)
                        for (const t of r.dependencies.values()) {
                          if (!n && r.peerDependencies.has(t.identHash)) continue
                          const o = e.storedResolutions.get(t.descriptorHash)
                          if (!o) throw new Error('Assertion failed: The resolution should have been registered')
                          const A = e.storedPackages.get(o)
                          if (!A) throw new Error('Assertion failed: The package should have been registered')
                          s(A) && (i = !0)
                        }
                        return i && A.add(r.locatorHash), i
                      }
                    for (const t of i) {
                      const r = e.storedPackages.get(t.anchoredLocator.locatorHash)
                      if (!r) throw new Error('Assertion failed: The package should have been registered')
                      s(r)
                    }
                    const a = new Set(),
                      c = {},
                      g = { children: c },
                      l = (t, r, i) => {
                        if (!A.has(t.locatorHash)) return
                        const o = {},
                          s = {
                            value:
                              null !== i
                                ? m.tuple(m.Type.DEPENDENT, { locator: t, descriptor: i })
                                : m.tuple(m.Type.LOCATOR, t),
                            children: o,
                          }
                        if (
                          ((r[f.stringifyLocator(t)] = s),
                          !a.has(t.locatorHash) && (a.add(t.locatorHash), null === i || !e.tryWorkspaceByLocator(t)))
                        )
                          for (const r of t.dependencies.values()) {
                            if (!n && t.peerDependencies.has(r.identHash)) continue
                            const i = e.storedResolutions.get(r.descriptorHash)
                            if (!i) throw new Error('Assertion failed: The resolution should have been registered')
                            const A = e.storedPackages.get(i)
                            if (!A) throw new Error('Assertion failed: The package should have been registered')
                            l(A, o, r)
                          }
                      }
                    for (const t of i) {
                      const r = e.storedPackages.get(t.anchoredLocator.locatorHash)
                      if (!r) throw new Error('Assertion failed: The package should have been registered')
                      l(r, c, null)
                    }
                    return g
                  })(t, n, { configuration: e, peers: this.peers })
                : (function (e, t, { configuration: r, peers: n }) {
                    const i = q.sortMap(e.storedPackages.values(), (e) => f.stringifyLocator(e)),
                      o = {},
                      A = { children: o }
                    for (const r of i) {
                      const i = {},
                        A = null
                      for (const s of r.dependencies.values()) {
                        if (!n && r.peerDependencies.has(s.identHash)) continue
                        const a = e.storedResolutions.get(s.descriptorHash)
                        if (!a) throw new Error('Assertion failed: The resolution should have been registered')
                        const c = e.storedPackages.get(a)
                        if (!c) throw new Error('Assertion failed: The package should have been registered')
                        if (c.identHash !== t) continue
                        if (null === A) {
                          const e = f.stringifyLocator(r)
                          o[e] = { value: [r, m.Type.LOCATOR], children: i }
                        }
                        const g = f.stringifyLocator(c)
                        i[g] = { value: [{ descriptor: s, locator: c }, m.Type.DEPENDENT] }
                      }
                    }
                    return A
                  })(t, n, { configuration: e, peers: this.peers })
            ge.emitTree(i, {
              configuration: e,
              stdout: this.context.stdout,
              json: this.json,
              separators: 1,
            })
          }
        }
        ;(Je.usage = d.Command.Usage({
          description: 'display the reason why a package is needed',
          details:
            '\n      This command prints the exact reasons why a package appears in the dependency tree.\n\n      If `-R,--recursive` is set, the listing will go in depth and will list, for each workspaces, what are all the paths that lead to the dependency. Note that the display is somewhat optimized in that it will not print the package listing twice for a single package, so if you see a leaf named "Foo" when looking for "Bar", it means that "Foo" already got printed higher in the tree.\n    ',
          examples: [['Explain why lodash is used in your project', '$0 why lodash']],
        })),
          (0, a.gn)([d.Command.String()], Je.prototype, 'package', void 0),
          (0, a.gn)(
            [
              d.Command.Boolean('-R,--recursive', {
                description: 'List, for each workspace, what are all the paths that lead to the dependency',
              }),
            ],
            Je.prototype,
            'recursive',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            Je.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              d.Command.Boolean('--peers', {
                description: 'Also print the peer dependencies that match the specified name',
              }),
            ],
            Je.prototype,
            'peers',
            void 0
          ),
          (0, a.gn)([d.Command.Path('why')], Je.prototype, 'execute', null)
        class _e extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.verbose = !1), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd)
            return (
              await p.Pk.start({ configuration: e, json: this.json, stdout: this.context.stdout }, async (e) => {
                for (const r of t.workspaces) {
                  const { manifest: n } = r
                  let i
                  if (this.verbose) {
                    const e = new Set(),
                      r = new Set()
                    for (const i of E.G.hardDependencies)
                      for (const [o, A] of n.getForScope(i)) {
                        const n = t.tryWorkspaceByDescriptor(A)
                        null === n ? t.workspacesByIdent.has(o) && r.add(A) : e.add(n)
                      }
                    i = {
                      workspaceDependencies: Array.from(e).map((e) => e.relativeCwd),
                      mismatchedWorkspaceDependencies: Array.from(r).map((e) => f.stringifyDescriptor(e)),
                    }
                  }
                  e.reportInfo(null, '' + r.relativeCwd),
                    e.reportJson({
                      location: r.relativeCwd,
                      name: n.name ? f.stringifyIdent(n.name) : null,
                      ...i,
                    })
                }
              })
            ).exitCode()
          }
        }
        ;(_e.usage = d.Command.Usage({
          category: 'Workspace-related commands',
          description: 'list all available workspaces',
          details:
            '\n      This command will print the list of all workspaces in the project. If both the `-v,--verbose` and `--json` options are set, Yarn will also return the cross-dependencies between each workspaces (useful when you wish to automatically generate Buck / Bazel rules).\n    ',
        })),
          (0, a.gn)(
            [
              d.Command.Boolean('-v,--verbose', {
                description: 'Also return the cross-dependencies between workspaces',
              }),
            ],
            _e.prototype,
            'verbose',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            _e.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([d.Command.Path('workspaces', 'list')], _e.prototype, 'execute', null)
        class qe extends d.Command {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const n = t.workspaces,
              i = new Map(
                n.map((e) => {
                  const t = f.convertToIdent(e.locator)
                  return [f.stringifyIdent(t), e]
                })
              ),
              o = i.get(this.workspaceName)
            if (void 0 === o) {
              const e = Array.from(i.keys()).sort()
              throw new d.UsageError(
                `Workspace '${this.workspaceName}' not found. Did you mean any of the following:\n  - ${e.join(
                  '\n  - '
                )}?`
              )
            }
            return this.cli.run([this.commandName, ...this.args], { cwd: o.cwd })
          }
        }
        ;(qe.usage = d.Command.Usage({
          category: 'Workspace-related commands',
          description: 'run a command within the specified workspace',
          details: '\n      This command will run a given sub-command on a single workspace.\n    ',
          examples: [
            ['Add a package to a single workspace', 'yarn workspace components add -D react'],
            ['Run build script on a single workspace', 'yarn workspace components run build'],
          ],
        })),
          (0, a.gn)([d.Command.String()], qe.prototype, 'workspaceName', void 0),
          (0, a.gn)([d.Command.String()], qe.prototype, 'commandName', void 0),
          (0, a.gn)([d.Command.Proxy()], qe.prototype, 'args', void 0),
          (0, a.gn)([d.Command.Path('workspace')], qe.prototype, 'execute', null)
        const ze = {
          configuration: {
            enableImmutableInstalls: {
              description: 'If true, prevents the install command from modifying the lockfile',
              type: s.a2.BOOLEAN,
              default: !1,
            },
            defaultSemverRangePrefix: {
              description: "The default save prefix: '^', '~' or ''",
              type: s.a2.STRING,
              values: ['^', '~', ''],
              default: o.CARET,
            },
          },
          commands: [
            x,
            U,
            _,
            Ge,
            De,
            we,
            _e,
            ne,
            ie,
            oe,
            se,
            R,
            L,
            z,
            re,
            ce,
            le,
            pe,
            fe,
            de,
            xe,
            Ke,
            Pe,
            Re,
            Te,
            Oe,
            Ue,
            je,
            Ye,
            He,
            Je,
            qe,
          ],
        }
      },
      68023: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => E, fileUtils: () => n })
        var n = {}
        r.r(n),
          r.d(n, {
            makeArchiveFromLocator: () => p,
            makeBufferFromLocator: () => f,
            makeLocator: () => h,
            makeSpec: () => u,
            parseSpec: () => l,
          })
        var i = r(54143),
          o = r(46009)
        const A = /^(?:[a-zA-Z]:[\\/]|\.{0,2}\/)/,
          s = /^[^?]*\.(?:tar\.gz|tgz)(?:::.*)?$/
        var a = r(73632),
          c = r(72785),
          g = r(75448)
        function l(e) {
          const { params: t, selector: r } = i.parseRange(e),
            n = o.cS.toPortablePath(r)
          return {
            parentLocator: t && 'string' == typeof t.locator ? i.parseLocator(t.locator) : null,
            path: n,
          }
        }
        function u({ parentLocator: e, path: t, folderHash: r, protocol: n }) {
          const o = null !== e ? { locator: i.stringifyLocator(e) } : {},
            A = void 0 !== r ? { hash: r } : {}
          return i.makeRange({ protocol: n, source: t, selector: t, params: { ...A, ...o } })
        }
        function h(e, { parentLocator: t, path: r, folderHash: n, protocol: o }) {
          return i.makeLocator(e, u({ parentLocator: t, path: r, folderHash: n, protocol: o }))
        }
        async function p(e, { protocol: t, fetchOptions: r, inMemory: n = !1 }) {
          const { parentLocator: A, path: s } = i.parseFileStyleRange(e.reference, { protocol: t }),
            l = o.y1.isAbsolute(s)
              ? { packageFs: new g.M(o.LZ.root), prefixPath: o.LZ.dot, localPath: o.LZ.root }
              : await r.fetcher.fetch(A, r),
            u = l.localPath ? { packageFs: new g.M(o.LZ.root), prefixPath: o.y1.relative(o.LZ.root, l.localPath) } : l
          l !== u && l.releaseFs && l.releaseFs()
          const h = u.packageFs,
            p = o.y1.join(u.prefixPath, s)
          return await a.releaseAfterUseAsync(
            async () =>
              await c.makeArchiveFromDirectory(p, {
                baseFs: h,
                prefixPath: i.getIdentVendorPath(e),
                compressionLevel: r.project.configuration.get('compressionLevel'),
                inMemory: n,
              }),
            u.releaseFs
          )
        }
        async function f(e, { protocol: t, fetchOptions: r }) {
          return (await p(e, { protocol: t, fetchOptions: r, inMemory: !0 })).getBufferAndClose()
        }
        var d = r(20624),
          C = r(32485),
          I = r(46611)
        const E = {
          fetchers: [
            class {
              supports(e, t) {
                return !!s.test(e.reference) && !!e.reference.startsWith('file:')
              }
              getLocalPath(e, t) {
                return null
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [n, o, A] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        i.prettyLocator(t.project.configuration, e) +
                          " can't be found in the cache and will be fetched from the disk"
                      ),
                    loader: () => this.fetchFromDisk(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  })
                return { packageFs: n, releaseFs: o, prefixPath: i.getIdentVendorPath(e), checksum: A }
              }
              async fetchFromDisk(e, t) {
                const { parentLocator: r, path: n } = i.parseFileStyleRange(e.reference, {
                    protocol: 'file:',
                  }),
                  A = o.y1.isAbsolute(n)
                    ? { packageFs: new g.M(o.LZ.root), prefixPath: o.LZ.dot, localPath: o.LZ.root }
                    : await t.fetcher.fetch(r, t),
                  s = A.localPath
                    ? {
                        packageFs: new g.M(o.LZ.root),
                        prefixPath: o.y1.relative(o.LZ.root, A.localPath),
                      }
                    : A
                A !== s && A.releaseFs && A.releaseFs()
                const l = s.packageFs,
                  u = o.y1.join(s.prefixPath, n),
                  h = await l.readFilePromise(u)
                return await a.releaseAfterUseAsync(
                  async () =>
                    await c.convertToZip(h, {
                      compressionLevel: t.project.configuration.get('compressionLevel'),
                      prefixPath: i.getIdentVendorPath(e),
                      stripComponents: 1,
                    }),
                  s.releaseFs
                )
              }
            },
            class {
              supports(e, t) {
                return !!e.reference.startsWith('file:')
              }
              getLocalPath(e, t) {
                const { parentLocator: r, path: n } = i.parseFileStyleRange(e.reference, {
                  protocol: 'file:',
                })
                if (o.y1.isAbsolute(n)) return n
                const A = t.fetcher.getLocalPath(r, t)
                return null === A ? null : o.y1.resolve(A, n)
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [n, o, A] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        i.prettyLocator(t.project.configuration, e) +
                          " can't be found in the cache and will be fetched from the disk"
                      ),
                    loader: () => this.fetchFromDisk(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  })
                return {
                  packageFs: n,
                  releaseFs: o,
                  prefixPath: i.getIdentVendorPath(e),
                  localPath: this.getLocalPath(e, t),
                  checksum: A,
                }
              }
              async fetchFromDisk(e, t) {
                return p(e, { protocol: 'file:', fetchOptions: t })
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!s.test(e.range) && (!!e.range.startsWith('file:') || !!A.test(e.range))
              }
              supportsLocator(e, t) {
                return !!s.test(e.reference) && !!e.reference.startsWith('file:')
              }
              shouldPersistResolution(e, t) {
                return !0
              }
              bindDescriptor(e, t, r) {
                return (
                  A.test(e.range) && (e = i.makeDescriptor(e, 'file:' + e.range)),
                  i.bindDescriptor(e, { locator: i.stringifyLocator(t) })
                )
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                let n = e.range
                return (
                  n.startsWith('file:') && (n = n.slice('file:'.length)),
                  [i.makeLocator(e, 'file:' + o.cS.toPortablePath(n))]
                )
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error('Assertion failed: This resolver cannot be used unless a fetcher is configured')
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await a.releaseAfterUseAsync(
                    async () => await I.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: n.version || '0.0.0',
                  languageName: t.project.configuration.get('defaultLanguageName'),
                  linkType: C.U.HARD,
                  dependencies: n.dependencies,
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                }
              }
            },
            class {
              supportsDescriptor(e, t) {
                return !!e.range.match(A) || !!e.range.startsWith('file:')
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith('file:')
              }
              shouldPersistResolution(e, t) {
                return !1
              }
              bindDescriptor(e, t, r) {
                return (
                  A.test(e.range) && (e = i.makeDescriptor(e, 'file:' + e.range)),
                  i.bindDescriptor(e, { locator: i.stringifyLocator(t) })
                )
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                if (!r.fetchOptions)
                  throw new Error('Assertion failed: This resolver cannot be used unless a fetcher is configured')
                const { path: n, parentLocator: o } = l(e.range)
                if (null === o) throw new Error('Assertion failed: The descriptor should have been bound')
                const A = await f(
                  i.makeLocator(
                    e,
                    i.makeRange({
                      protocol: 'file:',
                      source: n,
                      selector: n,
                      params: { locator: i.stringifyLocator(o) },
                    })
                  ),
                  { protocol: 'file:', fetchOptions: r.fetchOptions }
                )
                return [
                  h(e, {
                    parentLocator: o,
                    path: n,
                    folderHash: d.makeHash('1', A).slice(0, 6),
                    protocol: 'file:',
                  }),
                ]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error('Assertion failed: This resolver cannot be used unless a fetcher is configured')
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await a.releaseAfterUseAsync(
                    async () => await I.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: n.version || '0.0.0',
                  languageName: t.project.configuration.get('defaultLanguageName'),
                  linkType: C.U.HARD,
                  dependencies: n.dependencies,
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                }
              }
            },
          ],
        }
      },
      75641: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => F, gitUtils: () => n })
        var n = {}
        r.r(n),
          r.d(n, {
            TreeishProtocols: () => B,
            clone: () => S,
            isGitUrl: () => y,
            lsRemote: () => b,
            normalizeLocator: () => v,
            normalizeRepoUrl: () => Q,
            resolveUrl: () => D,
            splitRepoUrl: () => w,
          })
        var i = r(39922),
          o = r(54143),
          A = r(63088),
          s = r(73632),
          a = r(72785),
          c = r(43896),
          g = r(46009),
          l = r(79669),
          u = r(6220),
          h = r(71191),
          p = r.n(h),
          f = r(53887),
          d = r.n(f),
          C = r(78835),
          I = r.n(C)
        function E() {
          return { ...process.env, GIT_SSH_COMMAND: 'ssh -o BatchMode=yes' }
        }
        const m = [
          /^ssh:/,
          /^git(?:\+[^:]+)?:/,
          /^(?:git\+)?https?:[^#]+\/[^#]+(?:\.git)(?:#.*)?$/,
          /^git@[^#]+\/[^#]+\.git(?:#.*)?$/,
          /^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z._0-9-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z._0-9-]+?)(?:\.git)?(?:#.*)?$/,
          /^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
        ]
        var B
        function y(e) {
          return !!e && m.some((t) => !!e.match(t))
        }
        function w(e) {
          const t = (e = Q(e)).indexOf('#')
          if (-1 === t) return { repo: e, treeish: { protocol: B.Head, request: 'master' }, extra: {} }
          const r = e.slice(0, t),
            n = e.slice(t + 1)
          if (n.match(/^[a-z]+=/)) {
            const e = p().parse(n)
            for (const [t, r] of Object.entries(e))
              if ('string' != typeof r) throw new Error(`Assertion failed: The ${t} parameter must be a literal string`)
            const t = Object.values(B).find((t) => Object.prototype.hasOwnProperty.call(e, t))
            let i, o
            void 0 !== t ? ((i = t), (o = e[t])) : ((i = B.Head), (o = 'master'))
            for (const t of Object.values(B)) delete e[t]
            return { repo: r, treeish: { protocol: i, request: o }, extra: e }
          }
          {
            const e = n.indexOf(':')
            let t, i
            return (
              -1 === e ? ((t = null), (i = n)) : ((t = n.slice(0, e)), (i = n.slice(e + 1))),
              { repo: r, treeish: { protocol: t, request: i }, extra: {} }
            )
          }
        }
        function Q(e, { git: t = !1 } = {}) {
          var r
          if (
            ((e = (e = (e = e.replace(/^git\+https:/, 'https:')).replace(
              /^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)(?:\.git)?(#.*)?$/,
              'https://github.com/$1/$2.git$3'
            )).replace(
              /^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
              'https://github.com/$1/$2.git#$3'
            )),
            t)
          ) {
            let t
            e = e.replace(/^git\+([^:]+):/, '$1:')
            try {
              t = I().parse(e)
            } catch (e) {
              t = null
            }
            t &&
              'ssh:' === t.protocol &&
              (null === (r = t.path) || void 0 === r ? void 0 : r.startsWith('/:')) &&
              (e = e.replace(/^ssh:\/\//, ''))
          }
          return e
        }
        function v(e) {
          return o.makeLocator(e, Q(e.reference))
        }
        async function b(e, t) {
          const r = Q(e, { git: !0 })
          if (!l.getNetworkSettings(r, { configuration: t }).enableNetwork)
            throw new Error(`Request to '${r}' has been blocked because of your configuration settings`)
          let n
          try {
            n = await u.execvp('git', ['ls-remote', '--refs', r], {
              cwd: t.startingCwd,
              env: E(),
              strict: !0,
            })
          } catch (t) {
            throw ((t.message = `Listing the refs for ${e} failed`), t)
          }
          const i = new Map(),
            o = /^([a-f0-9]{40})\t(refs\/[^\n]+)/gm
          let A
          for (; null !== (A = o.exec(n.stdout)); ) i.set(A[2], A[1])
          return i
        }
        async function D(e, t) {
          const {
              repo: r,
              treeish: { protocol: n, request: i },
              extra: o,
            } = w(e),
            A = await b(r, t),
            s = (e, t) => {
              switch (e) {
                case B.Commit:
                  if (!t.match(/^[a-f0-9]{40}$/)) throw new Error('Invalid commit hash')
                  return p().stringify({ ...o, commit: t })
                case B.Head: {
                  const e = A.get('refs/heads/' + t)
                  if (void 0 === e) throw new Error(`Unknown head ("${t}")`)
                  return p().stringify({ ...o, commit: e })
                }
                case B.Tag: {
                  const e = A.get('refs/tags/' + t)
                  if (void 0 === e) throw new Error(`Unknown tag ("${t}")`)
                  return p().stringify({ ...o, commit: e })
                }
                case B.Semver: {
                  if (!d().validRange(t)) throw new Error(`Invalid range ("${t}")`)
                  const e = new Map(
                      [...A.entries()]
                        .filter(([e]) => e.startsWith('refs/tags/'))
                        .map(([e, t]) => [d().parse(e.slice(10)), t])
                        .filter((e) => null !== e[0])
                    ),
                    r = d().maxSatisfying([...e.keys()], t)
                  if (null === r) throw new Error(`No matching range ("${t}")`)
                  return p().stringify({ ...o, commit: e.get(r) })
                }
                case null: {
                  let e
                  if (null !== (e = a(B.Commit, t))) return e
                  if (null !== (e = a(B.Tag, t))) return e
                  if (null !== (e = a(B.Head, t))) return e
                  throw t.match(/^[a-f0-9]+$/)
                    ? new Error(
                        `Couldn't resolve "${t}" as either a commit, a tag, or a head - if a commit, use the 40-characters commit hash`
                      )
                    : new Error(`Couldn't resolve "${t}" as either a commit, a tag, or a head`)
                }
                default:
                  throw new Error(`Invalid Git resolution protocol ("${e}")`)
              }
            },
            a = (e, t) => {
              try {
                return s(e, t)
              } catch (e) {
                return null
              }
            }
          return `${r}#${s(n, i)}`
        }
        async function S(e, t) {
          return await t.getLimit('cloneConcurrency')(async () => {
            const {
              repo: r,
              treeish: { protocol: n, request: i },
            } = w(e)
            if ('commit' !== n) throw new Error('Invalid treeish protocol when cloning')
            const o = Q(r, { git: !0 })
            if (!1 === l.getNetworkSettings(o, { configuration: t }).enableNetwork)
              throw new Error(`Request to '${o}' has been blocked because of your configuration settings`)
            const A = await c.xfs.mktempPromise(),
              s = { cwd: A, env: E(), strict: !0 }
            try {
              await u.execvp('git', ['clone', '-c core.autocrlf=false', o, g.cS.fromPortablePath(A)], s),
                await u.execvp('git', ['checkout', '' + i], s)
            } catch (e) {
              throw ((e.message = 'Repository clone failed: ' + e.message), e)
            }
            return A
          })
        }
        !(function (e) {
          ;(e.Commit = 'commit'), (e.Head = 'head'), (e.Tag = 'tag'), (e.Semver = 'semver')
        })(B || (B = {}))
        var k = r(32485),
          M = r(46611)
        const F = {
          configuration: {
            cloneConcurrency: {
              description: 'Maximal number of concurrent clones',
              type: i.a2.NUMBER,
              default: 2,
            },
          },
          fetchers: [
            class {
              supports(e, t) {
                return y(e.reference)
              }
              getLocalPath(e, t) {
                return null
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  n = v(e),
                  i = new Map(t.checksums)
                i.set(n.locatorHash, r)
                const A = { ...t, checksums: i },
                  s = await this.downloadHosted(n, A)
                if (null !== s) return s
                const [a, c, g] = await t.cache.fetchPackageFromCache(e, r, {
                  onHit: () => t.report.reportCacheHit(e),
                  onMiss: () =>
                    t.report.reportCacheMiss(
                      e,
                      o.prettyLocator(t.project.configuration, e) +
                        " can't be found in the cache and will be fetched from the remote repository"
                    ),
                  loader: () => this.cloneFromRemote(n, A),
                  skipIntegrityCheck: t.skipIntegrityCheck,
                })
                return { packageFs: a, releaseFs: c, prefixPath: o.getIdentVendorPath(e), checksum: g }
              }
              async downloadHosted(e, t) {
                return t.project.configuration.reduceHook((e) => e.fetchHostedRepository, null, e, t)
              }
              async cloneFromRemote(e, t) {
                const r = await S(e.reference, t.project.configuration),
                  n = w(e.reference),
                  i = g.y1.join(r, 'package.tgz')
                await A.prepareExternalProject(r, i, {
                  configuration: t.project.configuration,
                  report: t.report,
                  workspace: n.extra.workspace,
                })
                const l = await c.xfs.readFilePromise(i)
                return await s.releaseAfterUseAsync(
                  async () =>
                    await a.convertToZip(l, {
                      compressionLevel: t.project.configuration.get('compressionLevel'),
                      prefixPath: o.getIdentVendorPath(e),
                      stripComponents: 1,
                    })
                )
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return y(e.range)
              }
              supportsLocator(e, t) {
                return y(e.reference)
              }
              shouldPersistResolution(e, t) {
                return !0
              }
              bindDescriptor(e, t, r) {
                return e
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                const n = await D(e.range, r.project.configuration)
                return [o.makeLocator(e, n)]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error('Assertion failed: This resolver cannot be used unless a fetcher is configured')
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await s.releaseAfterUseAsync(
                    async () => await M.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: n.version || '0.0.0',
                  languageName: t.project.configuration.get('defaultLanguageName'),
                  linkType: k.U.HARD,
                  dependencies: n.dependencies,
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                }
              }
            },
          ],
        }
      },
      68126: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => f })
        var n = r(54143),
          i = r(79669),
          o = r(72785),
          A = r(63088),
          s = r(43896),
          a = r(75448),
          c = r(46009),
          g = r(75641),
          l = r(71191),
          u = r.n(l)
        const h = [
          /^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+)\/tarball\/([^/#]+)(?:#(.*))?$/,
          /^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+?)(?:\.git)?(?:#(.*))?$/,
        ]
        class p {
          supports(e, t) {
            return !(!(r = e.reference) || !h.some((e) => !!r.match(e)))
            var r
          }
          getLocalPath(e, t) {
            return null
          }
          async fetch(e, t) {
            const r = t.checksums.get(e.locatorHash) || null,
              [i, o, A] = await t.cache.fetchPackageFromCache(e, r, {
                onHit: () => t.report.reportCacheHit(e),
                onMiss: () =>
                  t.report.reportCacheMiss(
                    e,
                    n.prettyLocator(t.project.configuration, e) +
                      " can't be found in the cache and will be fetched from GitHub"
                  ),
                loader: () => this.fetchFromNetwork(e, t),
                skipIntegrityCheck: t.skipIntegrityCheck,
              })
            return { packageFs: i, releaseFs: o, prefixPath: n.getIdentVendorPath(e), checksum: A }
          }
          async fetchFromNetwork(e, t) {
            const r = await i.get(this.getLocatorUrl(e, t), { configuration: t.project.configuration })
            return await s.xfs.mktempPromise(async (i) => {
              const l = new a.M(i)
              await o.extractArchiveTo(r, l, { stripComponents: 1 })
              const u = g.gitUtils.splitRepoUrl(e.reference),
                h = c.y1.join(i, 'package.tgz')
              await A.prepareExternalProject(i, h, {
                configuration: t.project.configuration,
                report: t.report,
                workspace: u.extra.workspace,
              })
              const p = await s.xfs.readFilePromise(h)
              return await o.convertToZip(p, {
                compressionLevel: t.project.configuration.get('compressionLevel'),
                prefixPath: n.getIdentVendorPath(e),
                stripComponents: 1,
              })
            })
          }
          getLocatorUrl(e, t) {
            const { auth: r, username: n, reponame: i, treeish: o } = (function (e) {
              let t
              for (const r of h) if (((t = e.match(r)), t)) break
              if (!t) throw new Error(`Input cannot be parsed as a valid GitHub URL ('${e}').`)
              let [, r, n, i, o = 'master'] = t
              const { commit: A } = u().parse(o)
              return (o = A || o.replace(/[^:]*:/, '')), { auth: r, username: n, reponame: i, treeish: o }
            })(e.reference)
            return `https://${r ? r + '@' : ''}github.com/${n}/${i}/archive/${o}.tar.gz`
          }
        }
        const f = {
          hooks: {
            async fetchHostedRepository(e, t, r) {
              if (null !== e) return e
              const n = new p()
              if (!n.supports(t, r)) return null
              try {
                return await n.fetch(t, r)
              } catch (e) {
                return null
              }
            },
          },
        }
      },
      99148: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => l })
        var n = r(54143),
          i = r(79669),
          o = r(72785)
        const A = /^[^?]*\.(?:tar\.gz|tgz)(?:\?.*)?$/,
          s = /^https?:/
        var a = r(46611),
          c = r(32485),
          g = r(73632)
        const l = {
          fetchers: [
            class {
              supports(e, t) {
                return !!A.test(e.reference) && !!s.test(e.reference)
              }
              getLocalPath(e, t) {
                return null
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [i, o, A] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        n.prettyLocator(t.project.configuration, e) +
                          " can't be found in the cache and will be fetched from the remote server"
                      ),
                    loader: () => this.fetchFromNetwork(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  })
                return { packageFs: i, releaseFs: o, prefixPath: n.getIdentVendorPath(e), checksum: A }
              }
              async fetchFromNetwork(e, t) {
                const r = await i.get(e.reference, { configuration: t.project.configuration })
                return await o.convertToZip(r, {
                  compressionLevel: t.project.configuration.get('compressionLevel'),
                  prefixPath: n.getIdentVendorPath(e),
                  stripComponents: 1,
                })
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!A.test(e.range) && !!s.test(e.range)
              }
              supportsLocator(e, t) {
                return !!A.test(e.reference) && !!s.test(e.reference)
              }
              shouldPersistResolution(e, t) {
                return !0
              }
              bindDescriptor(e, t, r) {
                return e
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                return [n.convertDescriptorToLocator(e)]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error('Assertion failed: This resolver cannot be used unless a fetcher is configured')
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await g.releaseAfterUseAsync(
                    async () => await a.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: n.version || '0.0.0',
                  languageName: t.project.configuration.get('defaultLanguageName'),
                  linkType: c.U.HARD,
                  dependencies: n.dependencies,
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                }
              }
            },
          ],
        }
      },
      64314: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => I })
        var n = r(39922),
          i = r(36370),
          o = r(25413),
          A = r(46611),
          s = r(85824),
          a = r(6220),
          c = r(63088),
          g = r(54143),
          l = r(43896),
          u = r(46009),
          h = r(40822),
          p = r(80305),
          f = r.n(p),
          d = r(31669)
        class C extends o.BaseCommand {
          constructor() {
            super(...arguments),
              (this.usev2 = !1),
              (this.assumeFreshProject = !1),
              (this.yes = !1),
              (this.private = !1),
              (this.workspace = !1),
              (this.install = !1)
          }
          async execute() {
            if (l.xfs.existsSync(u.y1.join(this.context.cwd, A.G.fileName)))
              throw new h.UsageError('A package.json already exists in the specified directory')
            const e = await n.VK.find(this.context.cwd, this.context.plugins),
              t = this.install ? (!0 === this.install ? 'latest' : this.install) : null
            return null !== t ? await this.executeProxy(e, t) : await this.executeRegular(e)
          }
          async executeProxy(e, t) {
            if (null !== e.get('yarnPath'))
              throw new h.UsageError(
                `Cannot use the --install flag when the current directory already uses yarnPath (from ${e.sources.get(
                  'yarnPath'
                )})`
              )
            if (null !== e.projectCwd)
              throw new h.UsageError(
                'Cannot use the --install flag when the current directory is already part of a project'
              )
            l.xfs.existsSync(this.context.cwd) || (await l.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }))
            const r = u.y1.join(this.context.cwd, e.get('lockfileFilename'))
            l.xfs.existsSync(r) || (await l.xfs.writeFilePromise(r, ''))
            const n = await this.cli.run(['set', 'version', t])
            if (0 !== n) return n
            this.context.stdout.write('\n')
            const i = ['--assume-fresh-project']
            return (
              this.private && i.push('-p'),
              this.workspace && i.push('-w'),
              this.yes && i.push('-y'),
              await l.xfs.mktempPromise(async (e) => {
                const { code: t } = await a.pipevp('yarn', ['init', ...i], {
                  cwd: this.context.cwd,
                  stdin: this.context.stdin,
                  stdout: this.context.stdout,
                  stderr: this.context.stderr,
                  env: await c.makeScriptEnv({ binFolder: e }),
                })
                return t
              })
            )
          }
          async executeRegular(e) {
            let t = null
            if (!this.assumeFreshProject)
              try {
                t = await s.I.find(e, this.context.cwd)
              } catch (e) {
                t = null
              }
            l.xfs.existsSync(this.context.cwd) || (await l.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }))
            const r = new A.G(),
              n = Object.fromEntries(e.get('initFields').entries())
            r.load(n),
              (r.name = g.makeIdent(e.get('initScope'), u.y1.basename(this.context.cwd))),
              (r.version = e.get('initVersion')),
              (r.private = this.private || this.workspace),
              (r.license = e.get('initLicense')),
              this.workspace &&
                (await l.xfs.mkdirPromise(u.y1.join(this.context.cwd, 'packages'), { recursive: !0 }),
                (r.workspaceDefinitions = [{ pattern: 'packages/*' }]))
            const i = {}
            r.exportTo(i),
              (d.inspect.styles.name = 'cyan'),
              this.context.stdout.write((0, d.inspect)(i, { depth: 1 / 0, colors: !0, compact: !1 }) + '\n')
            const o = u.y1.join(this.context.cwd, A.G.fileName)
            await l.xfs.changeFilePromise(o, JSON.stringify(i, null, 2) + '\n')
            const c = u.y1.join(this.context.cwd, 'README.md')
            if ((l.xfs.existsSync(c) || (await l.xfs.writeFilePromise(c, `# ${g.stringifyIdent(r.name)}\n`)), !t)) {
              const t = u.y1.join(this.context.cwd, u.QS.lockfile)
              await l.xfs.writeFilePromise(t, '')
              const r = ['/.yarn/** linguist-vendored'].map((e) => e + '\n').join(''),
                n = u.y1.join(this.context.cwd, '.gitattributes')
              l.xfs.existsSync(n) || (await l.xfs.writeFilePromise(n, r))
              const i = [
                  '/.yarn/*',
                  '!/.yarn/releases',
                  '!/.yarn/plugins',
                  '!/.yarn/sdks',
                  '',
                  "# Swap the comments on the following lines if you don't wish to use zero-installs",
                  '# Documentation here: https://yarnpkg.com/features/zero-installs',
                  '!/.yarn/cache',
                  '#/.pnp.*',
                ]
                  .map((e) => e + '\n')
                  .join(''),
                o = u.y1.join(this.context.cwd, '.gitignore')
              l.xfs.existsSync(o) || (await l.xfs.writeFilePromise(o, i))
              const A = {
                '*': { endOfLine: 'lf', insertFinalNewline: !0 },
                '*.{js,json,.yml}': { charset: 'utf-8', indentStyle: 'space', indentSize: 2 },
              }
              f()(A, e.get('initEditorConfig'))
              let s = 'root = true\n'
              for (const [e, t] of Object.entries(A)) {
                s += `\n[${e}]\n`
                for (const [e, r] of Object.entries(t)) {
                  s += `${e.replace(/[A-Z]/g, (e) => '_' + e.toLowerCase())} = ${r}\n`
                }
              }
              const c = u.y1.join(this.context.cwd, '.editorconfig')
              l.xfs.existsSync(c) || (await l.xfs.writeFilePromise(c, s)),
                await a.execvp('git', ['init'], { cwd: this.context.cwd })
            }
          }
        }
        ;(C.usage = h.Command.Usage({
          description: 'create a new package',
          details:
            '\n      This command will setup a new package in your local directory.\n\n      If the `-p,--private` or `-w,--workspace` options are set, the package will be private by default.\n\n      If the `-w,--workspace` option is set, the package will be configured to accept a set of workspaces in the `packages/` directory.\n\n      If the `-i,--install` option is given a value, Yarn will first download it using `yarn set version` and only then forward the init call to the newly downloaded bundle. Without arguments, the downloaded bundle will be `latest`.\n\n      The initial settings of the manifest can be changed by using the `initScope` and `initFields` configuration values. Additionally, Yarn will generate an EditorConfig file whose rules can be altered via `initEditorConfig`, and will initialize a Git repository in the current directory.\n    ',
          examples: [
            ['Create a new package in the local directory', 'yarn init'],
            ['Create a new private package in the local directory', 'yarn init -p'],
            ['Create a new package and store the Yarn release inside', 'yarn init -i latest'],
            ['Create a new private package and defines it as a workspace root', 'yarn init -w'],
          ],
        })),
          (0, i.gn)([h.Command.Boolean('-2', { hidden: !0 })], C.prototype, 'usev2', void 0),
          (0, i.gn)(
            [h.Command.Boolean('--assume-fresh-project', { hidden: !0 })],
            C.prototype,
            'assumeFreshProject',
            void 0
          ),
          (0, i.gn)([h.Command.Boolean('-y,--yes', { hidden: !0 })], C.prototype, 'yes', void 0),
          (0, i.gn)(
            [h.Command.Boolean('-p,--private', { description: 'Initialize a private package' })],
            C.prototype,
            'private',
            void 0
          ),
          (0, i.gn)(
            [
              h.Command.Boolean('-w,--workspace', {
                description: 'Initialize a private workspace root with a `packages/` directory',
              }),
            ],
            C.prototype,
            'workspace',
            void 0
          ),
          (0, i.gn)(
            [
              h.Command.String('-i,--install', {
                tolerateBoolean: !0,
                description: 'Initialize a package with a specific bundle that will be locked in the project',
              }),
            ],
            C.prototype,
            'install',
            void 0
          ),
          (0, i.gn)([h.Command.Path('init')], C.prototype, 'execute', null)
        const I = {
          configuration: {
            initLicense: {
              description: 'License used when creating packages via the init command',
              type: n.a2.STRING,
              default: null,
            },
            initScope: {
              description: 'Scope used when creating packages via the init command',
              type: n.a2.STRING,
              default: null,
            },
            initVersion: {
              description: 'Version used when creating packages via the init command',
              type: n.a2.STRING,
              default: null,
            },
            initFields: {
              description: 'Additional fields to set when creating packages via the init command',
              type: n.a2.MAP,
              valueDefinition: { description: '', type: n.a2.ANY },
            },
            initEditorConfig: {
              description: 'Extra rules to define in the generator editorconfig',
              type: n.a2.MAP,
              valueDefinition: { description: '', type: n.a2.ANY },
            },
          },
          commands: [C],
        }
      },
      92994: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => g })
        var n = r(54143),
          i = r(46009),
          o = r(75448),
          A = r(10489)
        var s = r(46611),
          a = r(32485),
          c = r(73632)
        const g = {
          fetchers: [
            class {
              supports(e, t) {
                return !!e.reference.startsWith('link:')
              }
              getLocalPath(e, t) {
                const { parentLocator: r, path: o } = n.parseFileStyleRange(e.reference, {
                  protocol: 'link:',
                })
                if (i.y1.isAbsolute(o)) return o
                const A = t.fetcher.getLocalPath(r, t)
                return null === A ? null : i.y1.resolve(A, o)
              }
              async fetch(e, t) {
                const { parentLocator: r, path: s } = n.parseFileStyleRange(e.reference, {
                    protocol: 'link:',
                  }),
                  a = i.y1.isAbsolute(s)
                    ? { packageFs: new o.M(i.LZ.root), prefixPath: i.LZ.dot, localPath: i.LZ.root }
                    : await t.fetcher.fetch(r, t),
                  c = a.localPath
                    ? {
                        packageFs: new o.M(i.LZ.root),
                        prefixPath: i.y1.relative(i.LZ.root, a.localPath),
                      }
                    : a
                a !== c && a.releaseFs && a.releaseFs()
                const g = c.packageFs,
                  l = i.y1.join(c.prefixPath, s)
                return a.localPath
                  ? {
                      packageFs: new o.M(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                      discardFromLookup: !0,
                      localPath: l,
                    }
                  : {
                      packageFs: new A.n(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                      discardFromLookup: !0,
                    }
              }
            },
            class {
              supports(e, t) {
                return !!e.reference.startsWith('portal:')
              }
              getLocalPath(e, t) {
                const { parentLocator: r, path: o } = n.parseFileStyleRange(e.reference, {
                  protocol: 'portal:',
                })
                if (i.y1.isAbsolute(o)) return o
                const A = t.fetcher.getLocalPath(r, t)
                return null === A ? null : i.y1.resolve(A, o)
              }
              async fetch(e, t) {
                const { parentLocator: r, path: s } = n.parseFileStyleRange(e.reference, {
                    protocol: 'portal:',
                  }),
                  a = i.y1.isAbsolute(s)
                    ? { packageFs: new o.M(i.LZ.root), prefixPath: i.LZ.dot, localPath: i.LZ.root }
                    : await t.fetcher.fetch(r, t),
                  c = a.localPath
                    ? {
                        packageFs: new o.M(i.LZ.root),
                        prefixPath: i.y1.relative(i.LZ.root, a.localPath),
                      }
                    : a
                a !== c && a.releaseFs && a.releaseFs()
                const g = c.packageFs,
                  l = i.y1.join(c.prefixPath, s)
                return a.localPath
                  ? {
                      packageFs: new o.M(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                      localPath: l,
                    }
                  : {
                      packageFs: new A.n(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: i.LZ.dot,
                    }
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!e.range.startsWith('link:')
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith('link:')
              }
              shouldPersistResolution(e, t) {
                return !1
              }
              bindDescriptor(e, t, r) {
                return n.bindDescriptor(e, { locator: n.stringifyLocator(t) })
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                const o = e.range.slice('link:'.length)
                return [n.makeLocator(e, 'link:' + i.cS.toPortablePath(o))]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                return {
                  ...e,
                  version: '0.0.0',
                  languageName: t.project.configuration.get('defaultLanguageName'),
                  linkType: a.U.SOFT,
                  dependencies: new Map(),
                  peerDependencies: new Map(),
                  dependenciesMeta: new Map(),
                  peerDependenciesMeta: new Map(),
                  bin: new Map(),
                }
              }
            },
            class {
              supportsDescriptor(e, t) {
                return !!e.range.startsWith('portal:')
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith('portal:')
              }
              shouldPersistResolution(e, t) {
                return !1
              }
              bindDescriptor(e, t, r) {
                return n.bindDescriptor(e, { locator: n.stringifyLocator(t) })
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                const o = e.range.slice('portal:'.length)
                return [n.makeLocator(e, 'portal:' + i.cS.toPortablePath(o))]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error('Assertion failed: This resolver cannot be used unless a fetcher is configured')
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  n = await c.releaseAfterUseAsync(
                    async () => await s.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: n.version || '0.0.0',
                  languageName: t.project.configuration.get('defaultLanguageName'),
                  linkType: a.U.SOFT,
                  dependencies: new Map([...n.dependencies, ...n.devDependencies]),
                  peerDependencies: n.peerDependencies,
                  dependenciesMeta: n.dependenciesMeta,
                  peerDependenciesMeta: n.peerDependenciesMeta,
                  bin: n.bin,
                }
              }
            },
          ],
        }
      },
      8375: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => oe, getPnpPath: () => ie })
        var n,
          i = r(39922),
          o = r(46009),
          A = r(54143)
        !(function (e) {
          ;(e[(e.YES = 0)] = 'YES'), (e[(e.NO = 1)] = 'NO'), (e[(e.DEPENDS = 2)] = 'DEPENDS')
        })(n || (n = {}))
        const s = (e, t) => `${e}@${t}`,
          a = (e, t) => {
            const r = t.indexOf('#'),
              n = r >= 0 ? t.substring(r + 1) : t
            return s(e, n)
          }
        var c
        !(function (e) {
          ;(e[(e.NONE = -1)] = 'NONE'),
            (e[(e.PERF = 0)] = 'PERF'),
            (e[(e.CHECK = 1)] = 'CHECK'),
            (e[(e.REASONS = 2)] = 'REASONS'),
            (e[(e.INTENSIVE_CHECK = 9)] = 'INTENSIVE_CHECK')
        })(c || (c = {}))
        const g = (e, t) => {
            if (t.decoupled) return t
            const {
                name: r,
                references: n,
                ident: i,
                locator: o,
                dependencies: A,
                originalDependencies: s,
                hoistedDependencies: a,
                peerNames: c,
                reasons: g,
                isHoistBorder: l,
              } = t,
              u = {
                name: r,
                references: new Set(n),
                ident: i,
                locator: o,
                dependencies: new Map(A),
                originalDependencies: new Map(s),
                hoistedDependencies: new Map(a),
                peerNames: new Set(c),
                reasons: new Map(g),
                decoupled: !0,
                isHoistBorder: l,
              },
              h = u.dependencies.get(r)
            return h && h.ident == u.ident && u.dependencies.set(r, u), e.dependencies.set(u.name, u), u
          },
          l = (e) => {
            const t = new Set(),
              r = (n, i = new Set()) => {
                if (!i.has(n)) {
                  i.add(n)
                  for (const o of n.peerNames)
                    if (!e.peerNames.has(o)) {
                      const n = e.dependencies.get(o)
                      n && !t.has(n) && r(n, i)
                    }
                  t.add(n)
                }
              }
            for (const t of e.dependencies.values()) e.peerNames.has(t.name) || r(t)
            return t
          },
          u = (e, t, r, n, i = new Set()) => {
            const o = t[t.length - 1]
            if (i.has(o)) return
            i.add(o)
            const A = ((e, t) => {
                const r = new Map([[e.name, [e.ident]]])
                for (const t of e.dependencies.values()) e.peerNames.has(t.name) || r.set(t.name, [t.ident])
                const n = Array.from(t.keys())
                n.sort((e, r) => {
                  const n = t.get(e),
                    i = t.get(r)
                  return i.peerDependents.size !== n.peerDependents.size
                    ? i.peerDependents.size - n.peerDependents.size
                    : i.dependents.size - n.dependents.size
                })
                for (const t of n) {
                  const n = t.substring(0, t.indexOf('@', 1)),
                    i = t.substring(n.length + 1)
                  if (!e.peerNames.has(n)) {
                    let e = r.get(n)
                    e || ((e = []), r.set(n, e)), e.indexOf(i) < 0 && e.push(i)
                  }
                }
                return r
              })(o, E(o)),
              s = new Map(Array.from(A.entries()).map(([e, t]) => [e, t[0]])),
              a =
                o === e
                  ? new Map()
                  : ((e) => {
                      const t = new Map(),
                        r = new Set(),
                        n = (i) => {
                          if (!r.has(i)) {
                            r.add(i)
                            for (const r of i.hoistedDependencies.values())
                              e.dependencies.has(r.name) || t.set(r.name, r)
                            for (const e of i.dependencies.values()) i.peerNames.has(e.name) || n(e)
                          }
                        }
                      return n(e), t
                    })(o)
            let c
            do {
              p(e, t, r, a, s, A, n), (c = !1)
              for (const [e, t] of A)
                t.length > 1 && !o.dependencies.has(e) && (s.delete(e), t.shift(), s.set(e, t[0]), (c = !0))
            } while (c)
            for (const i of o.dependencies.values())
              o.peerNames.has(i.name) ||
                r.has(i.locator) ||
                (r.add(i.locator), u(e, [...t, i], r, n), r.delete(i.locator))
          },
          h = (e, t, r, i, o, A, { outputReason: s }) => {
            let a,
              c = null,
              g = new Set()
            s &&
              (a =
                '' +
                Array.from(e)
                  .map((e) => m(e))
                  .join('→'))
            const l = t[t.length - 1],
              u = r.ident === l.ident,
              h = o.get(r.name)
            let p = h === r.ident && !u
            if ((s && !p && h && !u && (c = `- filled by: ${m(A.get(r.name)[0])} at ${a}`), p)) {
              let e = !1
              const n = i.get(r.name)
              if (((e = !n || n.ident === r.ident), s && !e && (c = `- filled by: ${m(n.locator)} at ${a}`), e))
                for (let n = 1; n < t.length - 1; n++) {
                  const i = t[n],
                    o = i.dependencies.get(r.name)
                  if (o && o.ident !== r.ident) {
                    ;(e = !1), s && (c = `- filled by: ${m(o.locator)} at ${m(i.locator)}`)
                    break
                  }
                }
              p = e
            }
            if (p) {
              let e = !0
              const n = new Set(r.peerNames)
              for (let r = t.length - 1; r >= 1; r--) {
                const i = t[r]
                for (const o of n) {
                  if (i.peerNames.has(o) && i.originalDependencies.has(o)) continue
                  const A = i.dependencies.get(o)
                  A &&
                    (r === t.length - 1
                      ? g.add(A)
                      : ((g = null),
                        (e = !1),
                        s &&
                          (c = `- peer dependency ${m(A.locator)} from parent ${m(
                            i.locator
                          )} was not hoisted to ${a}`))),
                    n.delete(o)
                }
                if (!e) break
              }
              p = e
            }
            return null !== g && g.size > 0
              ? { isHoistable: n.DEPENDS, dependsOn: g, reason: c }
              : { isHoistable: p ? n.YES : n.NO, reason: c }
          },
          p = (e, t, r, i, o, A, s) => {
            const a = t[t.length - 1],
              u = new Set(),
              p = (t, d, I, E) => {
                if (u.has(I)) return
                const y = [...d, I.locator],
                  w = new Map(),
                  Q = new Map()
                for (const e of l(I)) {
                  let g = null
                  if (
                    (g ||
                      (g = h(r, [a, ...t, I], e, i, o, A, {
                        outputReason: s.debugLevel >= c.REASONS,
                      })),
                    Q.set(e, g),
                    g.isHoistable === n.DEPENDS)
                  )
                    for (const t of g.dependsOn) {
                      const r = w.get(t.name) || new Set()
                      r.add(e.name), w.set(t.name, r)
                    }
                }
                const v = new Set(),
                  b = (e, t, r) => {
                    if (!v.has(e)) {
                      v.add(e), e.ident !== I.ident && Q.set(e, { isHoistable: n.NO, reason: r })
                      for (const n of w.get(e.name) || []) b(I.dependencies.get(n), t, r)
                    }
                  }
                let D
                s.debugLevel >= c.REASONS &&
                  (D =
                    '' +
                    Array.from(r)
                      .map((e) => m(e))
                      .join('→'))
                for (const [e, t] of Q)
                  t.isHoistable === n.NO &&
                    b(e, t, `- peer dependency ${m(e.locator)} from parent ${m(I.locator)} was not hoisted to ${D}`)
                for (const e of Q.keys())
                  if (!v.has(e)) {
                    I.dependencies.delete(e.name), I.hoistedDependencies.set(e.name, e), I.reasons.delete(e.name)
                    const t = a.dependencies.get(e.name)
                    if (t) for (const r of e.references) t.references.add(r)
                    else a.ident !== e.ident && (a.dependencies.set(e.name, e), E.add(e))
                  }
                if (s.check) {
                  const r = f(e)
                  if (r)
                    throw new Error(
                      `${r}, after hoisting dependencies of ${[a, ...t, I].map((e) => m(e.locator)).join('→')}:\n${B(
                        e
                      )}`
                    )
                }
                const S = l(I)
                for (const e of S)
                  if (v.has(e) && y.indexOf(e.locator) < 0) {
                    const r = Q.get(e)
                    if ((r.isHoistable !== n.YES && I.reasons.set(e.name, r.reason), !e.isHoistBorder)) {
                      u.add(I)
                      const r = g(I, e)
                      p([...t, I], [...d, I.locator], r, C), u.delete(I)
                    }
                  }
              }
            let d,
              C = new Set(l(a))
            do {
              ;(d = C), (C = new Set())
              for (const e of d) {
                if (e.locator === a.locator || e.isHoistBorder) continue
                const t = g(a, e)
                p([], Array.from(r), t, C)
              }
            } while (C.size > 0)
          },
          f = (e) => {
            const t = [],
              r = new Set(),
              n = new Set(),
              i = (e, o) => {
                if (r.has(e)) return
                if ((r.add(e), n.has(e))) return
                const A = new Map(o)
                for (const t of e.dependencies.values()) e.peerNames.has(t.name) || A.set(t.name, t)
                for (const r of e.originalDependencies.values()) {
                  const i = A.get(r.name),
                    s = () =>
                      '' +
                      Array.from(n)
                        .concat([e])
                        .map((e) => m(e.locator))
                        .join('→')
                  if (e.peerNames.has(r.name)) {
                    const e = o.get(r.name)
                    ;(e === i && e && e.ident === r.ident) ||
                      t.push(`${s()} - broken peer promise: expected ${r.ident} but found ${e ? e.ident : e}`)
                  } else
                    i
                      ? i.ident !== r.ident &&
                        t.push(
                          `${s()} - broken require promise for ${r.name}: expected ${r.ident}, but found: ${i.ident}`
                        )
                      : t.push(`${s()} - broken require promise: no required dependency ${r.locator} found`)
                }
                n.add(e)
                for (const t of e.dependencies.values()) e.peerNames.has(t.name) || i(t, A)
                n.delete(e)
              }
            return i(e, e.dependencies), t.join('\n')
          },
          d = (e, t) => {
            const { identName: r, name: n, reference: i, peerNames: o } = e,
              A = {
                name: n,
                references: new Set([i]),
                locator: s(r, i),
                ident: a(r, i),
                dependencies: new Map(),
                originalDependencies: new Map(),
                hoistedDependencies: new Map(),
                peerNames: new Set(o),
                reasons: new Map(),
                decoupled: !0,
                isHoistBorder: !0,
              },
              c = new Map([[e, A]]),
              g = (e, r) => {
                let n = c.get(e)
                const i = !!n
                if (!n) {
                  const { name: i, identName: o, reference: A, peerNames: g } = e,
                    l = t.hoistingLimits.get(r.locator)
                  ;(n = {
                    name: i,
                    references: new Set([A]),
                    locator: s(o, A),
                    ident: a(o, A),
                    dependencies: new Map(),
                    originalDependencies: new Map(),
                    hoistedDependencies: new Map(),
                    peerNames: new Set(g),
                    reasons: new Map(),
                    decoupled: !0,
                    isHoistBorder: !!l && l.has(i),
                  }),
                    c.set(e, n)
                }
                if ((r.dependencies.set(e.name, n), r.originalDependencies.set(e.name, n), i)) {
                  const e = new Set(),
                    t = (r) => {
                      if (!e.has(r)) {
                        e.add(r), (r.decoupled = !1)
                        for (const e of r.dependencies.values()) r.peerNames.has(e.name) || t(e)
                      }
                    }
                  t(n)
                } else for (const t of e.dependencies) g(t, n)
              }
            for (const t of e.dependencies) g(t, A)
            return A
          },
          C = (e) => e.substring(0, e.indexOf('@', 1)),
          I = (e) => {
            const t = {
                name: e.name,
                identName: C(e.locator),
                references: new Set(e.references),
                dependencies: new Set(),
              },
              r = new Set([e]),
              n = (e, t, i) => {
                const o = r.has(e)
                let A
                if (t === e) A = i
                else {
                  const { name: t, references: r, locator: n } = e
                  A = { name: t, identName: C(n), references: r, dependencies: new Set() }
                }
                if ((i.dependencies.add(A), !o)) {
                  r.add(e)
                  for (const t of e.dependencies.values()) e.peerNames.has(t.name) || n(t, e, A)
                  r.delete(e)
                }
              }
            for (const r of e.dependencies.values()) n(r, e, t)
            return t
          },
          E = (e) => {
            const t = new Map(),
              r = new Set([e]),
              n = (e) => {
                const r = ((e) => `${e.name}@${e.ident}`)(e)
                let n = t.get(r)
                return n || ((n = { dependents: new Set(), peerDependents: new Set() }), t.set(r, n)), n
              },
              i = (e, t) => {
                const o = !!r.has(t)
                if ((n(t).dependents.add(e.ident), !o)) {
                  r.add(t)
                  for (const e of t.dependencies.values())
                    if (t.peerNames.has(e.name)) {
                      n(e).peerDependents.add(t.ident)
                    } else i(t, e)
                }
              }
            for (const t of e.dependencies.values()) e.peerNames.has(t.name) || i(e, t)
            return t
          },
          m = (e) => {
            const t = e.indexOf('@', 1),
              r = e.substring(0, t),
              n = e.substring(t + 1)
            if ('workspace:.' === n) return '.'
            if (n) {
              const e = (n.indexOf('#') > 0 ? n.split('#')[1] : n).replace('npm:', '')
              return n.startsWith('virtual') ? `v:${r}@${e}` : `${r}@${e}`
            }
            return '' + r
          },
          B = (e) => {
            let t = 0
            const r = (e, n, i = '') => {
              if (t > 5e4 || n.has(e)) return ''
              t++
              const o = Array.from(e.dependencies.values())
              let A = ''
              n.add(e)
              for (let t = 0; t < o.length; t++) {
                const s = o[t]
                if (!e.peerNames.has(s.name)) {
                  const a = e.reasons.get(s.name),
                    c = C(s.locator)
                  ;(A += `${i}${t < o.length - 1 ? '├─' : '└─'}${
                    (n.has(s) ? '>' : '') + (c !== s.name ? `a:${s.name}:` : '') + m(s.locator) + (a ? ' ' + a : '')
                  }\n`),
                    (A += r(s, n, `${i}${t < o.length - 1 ? '│ ' : '  '}`))
                }
              }
              return n.delete(e), A
            }
            return r(e, new Set()) + (t > 5e4 ? '\nTree is too large, part of the tree has been dunped\n' : '')
          }
        var y, w
        !(function (e) {
          ;(e.HARD = 'HARD'), (e.SOFT = 'SOFT')
        })(y || (y = {})),
          (function (e) {
            ;(e.WORKSPACES = 'workspaces'), (e.DEPENDENCIES = 'dependencies'), (e.NONE = 'none')
          })(w || (w = {}))
        const Q = (e, t) => {
            const { packageTree: r, hoistingLimits: n } = b(e, t),
              i = ((e, t = {}) => {
                const r = t.debugLevel || Number(process.env.NM_DEBUG_LEVEL || c.NONE),
                  n = {
                    check: t.check || r >= c.INTENSIVE_CHECK,
                    debugLevel: r,
                    hoistingLimits: t.hoistingLimits || new Map(),
                  }
                n.debugLevel >= c.PERF && console.time('hoist')
                const i = d(e, n)
                if (
                  (u(i, [i], new Set([i.locator]), n),
                  n.debugLevel >= c.PERF && console.timeEnd('hoist'),
                  n.debugLevel >= c.CHECK)
                ) {
                  const e = f(i)
                  if (e) throw new Error(`${e}, after hoisting finished:\n${B(i)}`)
                }
                return n.debugLevel >= c.REASONS && console.log(B(i)), I(i)
              })(r, { hoistingLimits: n })
            return D(e, i, t)
          },
          v = (e) => `${e.name}@${e.reference}`
        const b = (e, t) => {
          const r = e.getDependencyTreeRoots(),
            n = new Map(),
            i = new Map(),
            s = e.getPackageInformation(e.topLevel)
          if (null === s) throw new Error('Assertion failed: Expected the top-level package to have been registered')
          const a = e.findPackageLocator(s.packageLocation)
          if (null === a) throw new Error('Assertion failed: Expected the top-level package to have a physical locator')
          const c = o.cS.toPortablePath(s.packageLocation),
            g = v(a)
          if (t.project) {
            const e = { children: new Map() },
              r = t.project.cwd.split(o.y1.sep)
            for (const [n, i] of t.project.workspacesByCwd) {
              const t = n.split(o.y1.sep).slice(r.length)
              let s = e
              for (const e of t) {
                let t = s.children.get(e)
                t || ((t = { children: new Map() }), s.children.set(e, t)), (s = t)
              }
              s.workspaceLocator = {
                name: A.stringifyIdent(i.anchoredLocator),
                reference: i.anchoredLocator.reference,
              }
            }
            const n = (e, t) => {
              if (e.workspaceLocator) {
                const r = v(t)
                let n = i.get(r)
                n || ((n = new Set()), i.set(r, n)), n.add(e.workspaceLocator)
              }
              for (const r of e.children.values()) n(r, e.workspaceLocator || t)
            }
            for (const t of e.children.values()) n(t, e.workspaceLocator)
          } else
            for (const e of r)
              if (e.name !== a.name || e.reference !== a.reference) {
                let t = i.get(g)
                t || ((t = new Set()), i.set(g, t)), t.add(e)
              }
          const l = {
              name: a.name,
              identName: a.name,
              reference: a.reference,
              peerNames: s.packagePeers,
              dependencies: new Set(),
            },
            u = new Map(),
            h = (r, s, g, p, f, d, C) => {
              var I, E
              const m = ((e, t) => `${v(t)}:${e}`)(r, g)
              let B = u.get(m)
              const y = !!B
              if (
                (y || g.name !== a.name || g.reference !== a.reference || ((B = l), u.set(m, l)),
                B ||
                  ((B = {
                    name: r,
                    identName: g.name,
                    reference: g.reference,
                    dependencies: new Set(),
                    peerNames: s.packagePeers,
                  }),
                  u.set(m, B)),
                C)
              ) {
                const e = v({ name: p.identName, reference: p.reference }),
                  t = n.get(e) || new Set()
                n.set(e, t), t.add(B.name)
              }
              const Q = new Map(s.packageDependencies)
              if (t.project) {
                const e = t.project.workspacesByCwd.get(o.cS.toPortablePath(s.packageLocation.slice(0, -1)))
                if (e) {
                  const t = new Set([
                    ...Array.from(e.manifest.peerDependencies.values(), (e) => A.stringifyIdent(e)),
                    ...Array.from(e.manifest.peerDependenciesMeta.keys()),
                  ])
                  for (const e of t) Q.has(e) || (Q.set(e, f.get(e) || null), B.peerNames.add(e))
                }
              }
              const b = v(g),
                D = i.get(b)
              if (D) for (const e of D) Q.set(e.name + '$wsroot$', e.reference)
              p.dependencies.add(B)
              const S =
                t.pnpifyFs ||
                !(function (e) {
                  let t = A.parseDescriptor(e)
                  return A.isVirtualDescriptor(t) && (t = A.devirtualizeDescriptor(t)), t.range.startsWith('portal:')
                })(m)
              if (!y && S)
                for (const [r, n] of Q)
                  if (null !== n) {
                    const i = e.getLocator(r, n),
                      A = e.getLocator(r.replace('$wsroot$', ''), n),
                      s = e.getPackageInformation(A)
                    if (null === s) throw new Error('Assertion failed: Expected the package to have been registered')
                    const a = null === (I = t.hoistingLimitsByCwd) || void 0 === I ? void 0 : I.get(d),
                      g = o.y1.relative(c, o.cS.toPortablePath(s.packageLocation)) || o.LZ.dot,
                      l = null === (E = t.hoistingLimitsByCwd) || void 0 === E ? void 0 : E.get(g),
                      u = a === w.DEPENDENCIES || l === w.DEPENDENCIES || l === w.WORKSPACES
                    h(r, s, i, B, Q, g, u)
                  }
            }
          return h(a.name, s, a, l, s.packageDependencies, o.LZ.dot, !1), { packageTree: l, hoistingLimits: n }
        }
        const D = (e, t, r) => {
          const n = new Map(),
            i = (t, n) => {
              const { linkType: i, target: A } = (function (e, t, r) {
                const n = t.getLocator(e.name.replace('$wsroot$', ''), e.reference),
                  i = t.getPackageInformation(n)
                if (null === i) throw new Error('Assertion failed: Expected the package to be registered')
                let A, s
                if (r.pnpifyFs) (s = o.cS.toPortablePath(i.packageLocation)), (A = y.SOFT)
                else {
                  const r =
                    t.resolveVirtual && e.reference && e.reference.startsWith('virtual:')
                      ? t.resolveVirtual(i.packageLocation)
                      : i.packageLocation
                  ;(s = o.cS.toPortablePath(r || i.packageLocation)), (A = i.linkType)
                }
                return { linkType: A, target: s }
              })(t, e, r)
              return { locator: v(t), target: A, linkType: i, aliases: n }
            },
            s = (e) => {
              const [t, r] = e.split('/')
              return r ? { scope: (0, o.Zu)(t), name: (0, o.Zu)(r) } : { scope: null, name: (0, o.Zu)(t) }
            },
            a = new Set(),
            c = (e, t) => {
              if (!a.has(e)) {
                a.add(e)
                for (const r of e.dependencies) {
                  if (
                    r === e ||
                    (e.identName.endsWith('$wsroot$') && r.identName === e.identName.replace('$wsroot$', ''))
                  )
                    continue
                  const a = Array.from(r.references).sort(),
                    g = { name: r.identName, reference: a[0] },
                    { name: l, scope: u } = s(r.name),
                    h = u ? [u, l] : [l],
                    p = o.y1.join(t, 'node_modules'),
                    f = o.y1.join(p, ...h),
                    d = i(g, a.slice(1))
                  if (!r.name.endsWith('$wsroot$')) {
                    const e = n.get(f)
                    if (e) {
                      if (e.dirList) throw new Error(`Assertion failed: ${f} cannot merge dir node with leaf node`)
                      {
                        const t = A.parseLocator(e.locator),
                          r = A.parseLocator(d.locator)
                        if (e.linkType !== d.linkType)
                          throw new Error(`Assertion failed: ${f} cannot merge nodes with different link types`)
                        if (t.identHash !== r.identHash)
                          throw new Error(
                            `Assertion failed: ${f} cannot merge nodes with different idents ${A.stringifyLocator(
                              t
                            )} and ${A.stringifyLocator(r)}`
                          )
                        d.aliases = [...d.aliases, ...e.aliases, A.parseLocator(e.locator).reference]
                      }
                    }
                    n.set(f, d)
                    const t = f.split('/'),
                      r = t.indexOf('node_modules')
                    let i = t.length - 1
                    for (; r >= 0 && i > r; ) {
                      const e = o.cS.toPortablePath(t.slice(0, i).join(o.y1.sep)),
                        r = (0, o.Zu)(t[i]),
                        A = n.get(e)
                      if (A) {
                        if (A.dirList) {
                          if (A.dirList.has(r)) break
                          A.dirList.add(r)
                        }
                      } else n.set(e, { dirList: new Set([r]) })
                      i--
                    }
                  }
                  c(r, d.linkType === y.SOFT ? d.target : f)
                }
              }
            },
            g = i({ name: t.name, reference: Array.from(t.references)[0] }, []),
            l = g.target
          return n.set(l, g), c(t, l), n
        }
        var S = r(92659),
          k = r(32485),
          M = r(92409),
          F = r(73632),
          N = r(46611),
          R = r(35691),
          K = r(43896),
          L = r(17674),
          x = r(53660),
          P = r(65281),
          T = r(11640),
          O = r(5307),
          U = r(34432),
          j = r(58069),
          Y = r.n(j),
          G = r(40822),
          H = r(35747),
          J = r.n(H)
        const _ = 'node_modules'
        class q extends O.AbstractPnpInstaller {
          constructor() {
            super(...arguments), (this.manifestCache = new Map())
          }
          async getBuildScripts(e, t, r) {
            return []
          }
          async transformPackage(e, t, r, n, i) {
            return r.packageFs
          }
          async finalizeInstallWithPnp(e) {
            if ('node-modules' !== this.opts.project.configuration.get('nodeLinker')) return
            const t = new L.p({
              baseFs: new x.A({
                libzip: await (0, P.getLibzipPromise)(),
                maxOpenFiles: 80,
                readOnlyArchives: !0,
              }),
            })
            let r = await z(this.opts.project)
            if (null === r) {
              const e = this.opts.project.configuration.get('bstatePath')
              ;(await K.xfs.existsPromise(e)) && (await K.xfs.unlinkPromise(e)),
                (r = { locatorMap: new Map(), binSymlinks: new Map(), locationTree: new Map() })
            }
            const n = this.opts.project.configuration.get('nmHoistingLimits'),
              i = (0, U.oC)(e, this.opts.project.cwd, t),
              s = new Map(
                this.opts.project.workspaces.map((e) => {
                  var t, r
                  const { relativeCwd: i, manifest: o } = e
                  let s = n
                  try {
                    s = F.validateEnum(
                      w,
                      null !== (r = null === (t = o.installConfig) || void 0 === t ? void 0 : t.hoistingLimits) &&
                        void 0 !== r
                        ? r
                        : n
                    )
                  } catch (t) {
                    const r = A.prettyWorkspace(this.opts.project.configuration, e)
                    this.opts.report.reportWarning(
                      S.b.INVALID_MANIFEST,
                      `${r}: Invalid 'installConfig.hoistingLimits' value. Expected one of ${Object.values(w).join(
                        ', '
                      )}, using default: "${s}"`
                    )
                  }
                  return [i, s]
                })
              ),
              a = ((e) => {
                const t = new Map()
                for (const [r, n] of e.entries())
                  if (!n.dirList) {
                    let e = t.get(n.locator)
                    e ||
                      ((e = {
                        target: n.target,
                        linkType: n.linkType,
                        locations: [],
                        aliases: n.aliases,
                      }),
                      t.set(n.locator, e)),
                      e.locations.push(r)
                  }
                for (const e of t.values())
                  e.locations = e.locations.sort((e, t) => {
                    const r = e.split(o.y1.delimiter).length,
                      n = t.split(o.y1.delimiter).length
                    return r !== n ? n - r : t.localeCompare(e)
                  })
                return t
              })(Q(i, { pnpifyFs: !1, hoistingLimitsByCwd: s, project: this.opts.project }))
            await (async function (e, t, { baseFs: r, project: n, report: i, loadManifest: s }) {
              const a = o.y1.join(n.cwd, _),
                { locationTree: c, binSymlinks: g } = (function (e, t) {
                  const r = new Map([...e]),
                    n = new Map([...t])
                  for (const [t, r] of e) {
                    const e = o.y1.join(t, _)
                    if (!K.xfs.existsSync(e)) {
                      r.children.delete(_)
                      for (const t of n.keys()) null !== o.y1.contains(e, t) && n.delete(t)
                    }
                  }
                  return { locationTree: r, binSymlinks: n }
                })(e.locationTree, e.binSymlinks),
                l = X(t, { skipPrefix: n.cwd }),
                u = [],
                h = async ({ srcDir: e, dstDir: t, linkType: n }) => {
                  const i = (async () => {
                    try {
                      n === k.U.SOFT
                        ? (await K.xfs.mkdirPromise(o.y1.dirname(t), { recursive: !0 }), await Z(o.y1.resolve(e), t))
                        : await $(t, e, { baseFs: r })
                    } catch (r) {
                      throw ((r.message = `While persisting ${e} -> ${t} ${r.message}`), r)
                    } finally {
                      I.tick()
                    }
                  })().then(() => u.splice(u.indexOf(i), 1))
                  u.push(i), u.length > 4 && (await Promise.race(u))
                },
                p = async (e, t, r) => {
                  const n = (async () => {
                    const n = async (e, t, r) => {
                      try {
                        ;(r && r.innerLoop) || (await K.xfs.mkdirPromise(t, { recursive: !0 }))
                        const i = await K.xfs.readdirPromise(e, { withFileTypes: !0 })
                        for (const A of i) {
                          if (!((r && r.innerLoop) || '.bin' !== A.name)) continue
                          const i = o.y1.join(e, A.name),
                            s = o.y1.join(t, A.name)
                          A.isDirectory()
                            ? (A.name !== _ || (r && r.innerLoop)) &&
                              (await K.xfs.mkdirPromise(s, { recursive: !0 }), await n(i, s, { innerLoop: !0 }))
                            : await K.xfs.copyFilePromise(i, s, J().constants.COPYFILE_FICLONE)
                        }
                      } catch (n) {
                        throw ((r && r.innerLoop) || (n.message = `While cloning ${e} -> ${t} ${n.message}`), n)
                      } finally {
                        ;(r && r.innerLoop) || I.tick()
                      }
                    }
                    await n(e, t, r)
                  })().then(() => u.splice(u.indexOf(n), 1))
                  u.push(n), u.length > 4 && (await Promise.race(u))
                },
                f = async (e, t, r) => {
                  if (r)
                    for (const [n, i] of t.children) {
                      const t = r.children.get(n)
                      await f(o.y1.join(e, n), i, t)
                    }
                  else
                    t.children.has(_) && (await W(o.y1.join(e, _), { contentsOnly: !1 })),
                      await W(e, { contentsOnly: e === a })
                }
              for (const [e, t] of c) {
                const r = l.get(e)
                for (const [n, i] of t.children) {
                  if ('.' === n) continue
                  const t = r ? r.children.get(n) : r
                  await f(o.y1.join(e, n), i, t)
                }
              }
              const d = async (e, t, r) => {
                if (r) {
                  te(t.locator, r.locator) || (await W(e, { contentsOnly: t.linkType === k.U.HARD }))
                  for (const [n, i] of t.children) {
                    const t = r.children.get(n)
                    await d(o.y1.join(e, n), i, t)
                  }
                } else
                  t.children.has(_) && (await W(o.y1.join(e, _), { contentsOnly: !0 })),
                    await W(e, { contentsOnly: t.linkType === k.U.HARD })
              }
              for (const [e, t] of l) {
                const r = c.get(e)
                for (const [n, i] of t.children) {
                  if ('.' === n) continue
                  const t = r ? r.children.get(n) : r
                  await d(o.y1.join(e, n), i, t)
                }
              }
              const C = []
              for (const [r, { locations: i }] of e.locatorMap.entries())
                for (const e of i) {
                  const { locationRoot: i, segments: A } = V(e, { skipPrefix: n.cwd })
                  let s = l.get(i),
                    a = i
                  if (s) {
                    for (const e of A) if (((a = o.y1.join(a, e)), (s = s.children.get(e)), !s)) break
                    if (s && !te(s.locator, r)) {
                      const e = t.get(s.locator),
                        r = e.target,
                        n = a,
                        i = e.linkType
                      r !== n && C.push({ srcDir: r, dstDir: n, linkType: i })
                    }
                  }
                }
              for (const [e, { locations: r }] of t.entries())
                for (const i of r) {
                  const { locationRoot: r, segments: A } = V(i, { skipPrefix: n.cwd })
                  let s = c.get(r),
                    a = l.get(r),
                    g = r
                  const u = t.get(e),
                    h = u.target,
                    p = i
                  if (h === p) continue
                  const f = u.linkType
                  for (const e of A) a = a.children.get(e)
                  if (s) {
                    for (const e of A)
                      if (((g = o.y1.join(g, e)), (s = s.children.get(e)), !s)) {
                        C.push({ srcDir: h, dstDir: p, linkType: f })
                        break
                      }
                  } else C.push({ srcDir: h, dstDir: p, linkType: f })
                }
              const I = R.yG.progressViaCounter(C.length),
                E = i.reportProgress(I)
              try {
                const e = new Map()
                for (const t of C)
                  (t.linkType !== k.U.SOFT && e.has(t.srcDir)) || (e.set(t.srcDir, t.dstDir), await h({ ...t }))
                await Promise.all(u), (u.length = 0)
                for (const t of C) {
                  const r = e.get(t.srcDir)
                  t.linkType !== k.U.SOFT && t.dstDir !== r && (await p(r, t.dstDir))
                }
                await Promise.all(u), await K.xfs.mkdirPromise(a, { recursive: !0 })
                const r = await (async function (e, t, r, { loadManifest: n }) {
                  const i = new Map()
                  for (const [t, { locations: r }] of e) {
                    const e = ee(t) ? null : await n(t, r[0]),
                      A = new Map()
                    if (e)
                      for (const [t, n] of e.bin) {
                        const e = o.y1.join(r[0], n)
                        '' !== n && K.xfs.existsSync(e) && A.set(t, n)
                      }
                    i.set(t, A)
                  }
                  const A = new Map(),
                    s = (e, t, n) => {
                      const a = new Map(),
                        c = o.y1.contains(r, e)
                      if (n.locator && null !== c) {
                        const t = i.get(n.locator)
                        for (const [r, n] of t) {
                          const t = o.y1.join(e, o.cS.toPortablePath(n))
                          a.set((0, o.Zu)(r), t)
                        }
                        for (const [t, r] of n.children) {
                          const n = o.y1.join(e, t),
                            i = s(n, n, r)
                          i.size > 0 && A.set(e, new Map([...(A.get(e) || new Map()), ...i]))
                        }
                      } else
                        for (const [r, i] of n.children) {
                          const n = s(o.y1.join(e, r), t, i)
                          for (const [e, t] of n) a.set(e, t)
                        }
                      return a
                    }
                  for (const [e, r] of t) {
                    const t = s(e, e, r)
                    t.size > 0 && A.set(e, new Map([...(A.get(e) || new Map()), ...t]))
                  }
                  return A
                })(t, l, n.cwd, { loadManifest: s })
                await (async function (e, t) {
                  for (const r of e.keys())
                    if (!t.has(r)) {
                      const e = o.y1.join(r, _, '.bin')
                      await K.xfs.removePromise(e)
                    }
                  for (const [r, n] of t) {
                    const t = o.y1.join(r, _, '.bin'),
                      i = e.get(r) || new Map()
                    await K.xfs.mkdirPromise(t, { recursive: !0 })
                    for (const e of i.keys())
                      n.has(e) ||
                        (await K.xfs.removePromise(o.y1.join(t, e)),
                        'win32' === process.platform &&
                          (await K.xfs.removePromise(o.y1.join(t, (0, o.Zu)(e + '.cmd')))))
                    for (const [e, r] of n) {
                      const n = i.get(e),
                        A = o.y1.join(t, e)
                      n !== r &&
                        ('win32' === process.platform
                          ? await Y()(o.cS.fromPortablePath(r), o.cS.fromPortablePath(A), {
                              createPwshFile: !1,
                            })
                          : (await K.xfs.removePromise(A), await Z(r, A), await K.xfs.chmodPromise(r, 493)))
                    }
                  }
                })(g, r),
                  await (async function (e, t, r) {
                    let n = ''
                    ;(n += '# Warning: This file is automatically generated. Removing it is fine, but will\n'),
                      (n += '# cause your node_modules installation to become invalidated.\n'),
                      (n += '\n'),
                      (n += '__metadata:\n'),
                      (n += '  version: 1\n')
                    const i = Array.from(t.keys()).sort(),
                      s = A.stringifyLocator(e.topLevelWorkspace.anchoredLocator)
                    for (const A of i) {
                      const i = t.get(A)
                      ;(n += '\n'), (n += JSON.stringify(A) + ':\n'), (n += '  locations:\n')
                      for (const t of i.locations) {
                        const r = o.y1.contains(e.cwd, t)
                        if (null === r)
                          throw new Error(`Assertion failed: Expected the path to be within the project (${t})`)
                        n += `    - ${JSON.stringify(r)}\n`
                      }
                      if (i.aliases.length > 0) {
                        n += '  aliases:\n'
                        for (const e of i.aliases) n += `    - ${JSON.stringify(e)}\n`
                      }
                      if (A === s && r.size > 0) {
                        n += '  bin:\n'
                        for (const [t, i] of r) {
                          const r = o.y1.contains(e.cwd, t)
                          if (null === r)
                            throw new Error(`Assertion failed: Expected the path to be within the project (${t})`)
                          n += `    ${JSON.stringify(r)}:\n`
                          for (const [e, r] of i) {
                            const i = o.y1.relative(o.y1.join(t, _), r)
                            n += `      ${JSON.stringify(e)}: ${JSON.stringify(i)}\n`
                          }
                        }
                      }
                    }
                    const a = e.cwd,
                      c = o.y1.join(a, _, '.yarn-state.yml')
                    await K.xfs.changeFilePromise(c, n, { automaticNewlines: !0 })
                  })(n, t, r)
              } finally {
                E.stop()
              }
            })(r, a, {
              baseFs: t,
              project: this.opts.project,
              report: this.opts.report,
              loadManifest: this.cachedManifestLoad.bind(this, i, t),
            })
            const c = []
            for (const [e, r] of a.entries()) {
              if (ee(e)) continue
              const n = A.parseLocator(e),
                s = { name: A.stringifyIdent(n), reference: n.reference }
              if (null === i.getPackageInformation(s))
                throw new Error(
                  `Assertion failed: Expected the package to be registered (${A.prettyLocator(
                    this.opts.project.configuration,
                    n
                  )})`
                )
              const a = o.cS.toPortablePath(r.locations[0]),
                g = await this.cachedManifestLoad(i, t, e, a),
                l = await this.getSourceBuildScripts(a, g)
              l.length > 0 &&
                !this.opts.project.configuration.get('enableScripts') &&
                (this.opts.report.reportWarningOnce(
                  S.b.DISABLED_BUILD_SCRIPTS,
                  A.prettyLocator(this.opts.project.configuration, n) +
                    ' lists build scripts, but all build scripts have been disabled.'
                ),
                (l.length = 0)),
                l.length > 0 &&
                  r.linkType !== k.U.HARD &&
                  !this.opts.project.tryWorkspaceByLocator(n) &&
                  (this.opts.report.reportWarningOnce(
                    S.b.SOFT_LINK_BUILD,
                    A.prettyLocator(this.opts.project.configuration, n) +
                      " lists build scripts, but is referenced through a soft link. Soft links don't support build scripts, so they'll be ignored."
                  ),
                  (l.length = 0))
              const u = this.opts.project.getDependencyMeta(n, g.version)
              l.length > 0 &&
                u &&
                !1 === u.built &&
                (this.opts.report.reportInfoOnce(
                  S.b.BUILD_DISABLED,
                  A.prettyLocator(this.opts.project.configuration, n) +
                    ' lists build scripts, but its build has been explicitly disabled through configuration.'
                ),
                (l.length = 0)),
                l.length > 0 &&
                  c.push({
                    buildLocations: r.locations,
                    locatorHash: n.locatorHash,
                    buildDirective: l,
                  })
            }
            return c
          }
          async cachedManifestLoad(e, t, r, n) {
            let i = this.manifestCache.get(r)
            if (i) return i
            try {
              i = await N.G.find(n)
            } catch (n) {
              const s = o.cS.toPortablePath(e.getPackageInformation(A.parseLocator(r)).packageLocation)
              try {
                i = await N.G.find(s, { baseFs: t })
              } catch (e) {
                throw ((e.message = `While loading ${s}: ${e.message}`), e)
              }
            }
            return this.manifestCache.set(r, i), i
          }
          async getSourceBuildScripts(e, t) {
            const r = [],
              { scripts: n } = t
            for (const e of ['preinstall', 'install', 'postinstall']) n.has(e) && r.push([M.k.SCRIPT, e])
            const i = o.y1.resolve(e, 'binding.gyp')
            return !n.has('install') && K.xfs.existsSync(i) && r.push([M.k.SHELLCODE, 'node-gyp rebuild']), r
          }
        }
        async function z(e, { unrollAliases: t = !1 } = {}) {
          const r = e.cwd,
            n = o.y1.join(r, _, '.yarn-state.yml')
          if (!K.xfs.existsSync(n)) return null
          const i = (0, T.parseSyml)(await K.xfs.readFilePromise(n, 'utf8'))
          if (i.__metadata.version > 1) return null
          const s = new Map(),
            a = new Map()
          delete i.__metadata
          for (const [e, n] of Object.entries(i)) {
            const i = n.locations.map((e) => o.y1.join(r, e)),
              c = n.bin
            if (c)
              for (const [e, t] of Object.entries(c)) {
                const n = o.y1.join(r, o.cS.toPortablePath(e)),
                  i = F.getMapWithDefault(a, n)
                for (const [e, r] of Object.entries(t))
                  i.set((0, o.Zu)(e), o.cS.toPortablePath([n, _, r].join(o.y1.delimiter)))
              }
            if (
              (s.set(e, { target: o.LZ.dot, linkType: k.U.HARD, locations: i, aliases: n.aliases || [] }),
              t && n.aliases)
            )
              for (const t of n.aliases) {
                const { scope: r, name: n } = A.parseLocator(e),
                  a = A.makeLocator(A.makeIdent(r, n), t),
                  c = A.stringifyLocator(a)
                s.set(c, { target: o.LZ.dot, linkType: k.U.HARD, locations: i, aliases: [] })
              }
          }
          return { locatorMap: s, binSymlinks: a, locationTree: X(s, { skipPrefix: e.cwd }) }
        }
        const W = async (e, t) => {
            if (e.split(o.y1.sep).indexOf(_) < 0)
              throw new Error("Assertion failed: trying to remove dir that doesn't contain node_modules: " + e)
            try {
              if (!t.innerLoop) {
                if ((await K.xfs.lstatPromise(e)).isSymbolicLink()) return void (await K.xfs.unlinkPromise(e))
              }
              const r = await K.xfs.readdirPromise(e, { withFileTypes: !0 })
              for (const n of r) {
                const r = o.y1.join(e, (0, o.Zu)(n.name))
                n.isDirectory()
                  ? (n.name !== _ || (t && t.innerLoop)) && (await W(r, { innerLoop: !0, contentsOnly: !1 }))
                  : await K.xfs.unlinkPromise(r)
              }
              t.contentsOnly || (await K.xfs.rmdirPromise(e))
            } catch (e) {
              if ('ENOENT' !== e.code && 'ENOTEMPTY' !== e.code) throw e
            }
          },
          V = (e, { skipPrefix: t }) => {
            const r = o.y1.contains(t, e)
            if (null === r)
              throw new Error(
                `Assertion failed: Cannot process a path that isn't part of the requested prefix (${e} isn't within ${t})`
              )
            const n = r.split(o.y1.sep).filter((e) => '' !== e),
              i = n.indexOf(_),
              A = n.slice(0, i).join(o.y1.sep)
            return { locationRoot: o.y1.join(t, A), segments: n.slice(i) }
          },
          X = (e, { skipPrefix: t }) => {
            const r = new Map()
            if (null === e) return r
            const n = () => ({ children: new Map(), linkType: k.U.HARD })
            for (const [i, A] of e.entries()) {
              if (A.linkType === k.U.SOFT) {
                if (null !== o.y1.contains(t, A.target)) {
                  const e = F.getFactoryWithDefault(r, A.target, n)
                  ;(e.locator = i), (e.linkType = A.linkType)
                }
              }
              for (const e of A.locations) {
                const { locationRoot: o, segments: s } = V(e, { skipPrefix: t })
                let a = F.getFactoryWithDefault(r, o, n)
                for (let e = 0; e < s.length; ++e) {
                  const t = s[e]
                  if ('.' !== t) {
                    const e = F.getFactoryWithDefault(a.children, t, n)
                    a.children.set(t, e), (a = e)
                  }
                  e === s.length - 1 && ((a.locator = i), (a.linkType = A.linkType))
                }
              }
            }
            return r
          },
          Z = async (e, t) => {
            let r
            try {
              'win32' === process.platform && (r = K.xfs.lstatSync(e))
            } catch (e) {}
            'win32' != process.platform || (r && !r.isDirectory())
              ? K.xfs.symlinkPromise(o.y1.relative(o.y1.dirname(t), e), t)
              : K.xfs.symlinkPromise(e, t, 'junction')
          },
          $ = async (e, t, { baseFs: r, innerLoop: n }) => {
            await K.xfs.mkdirPromise(e, { recursive: !0 })
            const i = await r.readdirPromise(t, { withFileTypes: !0 }),
              A = async (e, t, n) => {
                if (n.isFile()) {
                  const n = await r.lstatPromise(t)
                  await r.copyFilePromise(t, e)
                  const i = 511 & n.mode
                  420 !== i && (await K.xfs.chmodPromise(e, i))
                } else {
                  if (!n.isSymbolicLink())
                    throw new Error(
                      `Unsupported file type (file: ${t}, mode: 0o${await K.xfs
                        .statSync(t)
                        .mode.toString(8)
                        .padStart(6, '0')})`
                    )
                  {
                    const n = await r.readlinkPromise(t)
                    await Z(o.y1.resolve(o.y1.dirname(e), n), e)
                  }
                }
              }
            for (const s of i) {
              const i = o.y1.join(t, (0, o.Zu)(s.name)),
                a = o.y1.join(e, (0, o.Zu)(s.name))
              s.isDirectory() ? (s.name !== _ || n) && (await $(a, i, { baseFs: r, innerLoop: !0 })) : await A(a, i, s)
            }
          }
        function ee(e) {
          let t = A.parseDescriptor(e)
          return A.isVirtualDescriptor(t) && (t = A.devirtualizeDescriptor(t)), t.range.startsWith('link:')
        }
        const te = (e, t) => {
          if (!e || !t) return e === t
          let r = A.parseLocator(e)
          A.isVirtualLocator(r) && (r = A.devirtualizeLocator(r))
          let n = A.parseLocator(t)
          return A.isVirtualLocator(n) && (n = A.devirtualizeLocator(n)), A.areLocatorsEqual(r, n)
        }
        class re extends O.PnpLinker {
          constructor() {
            super(...arguments), (this.mode = 'loose')
          }
          makeInstaller(e) {
            return new ne(e)
          }
        }
        class ne extends O.PnpInstaller {
          constructor() {
            super(...arguments), (this.mode = 'loose')
          }
          async finalizeInstallWithPnp(e) {
            if (this.opts.project.configuration.get('pnpMode') !== this.mode) return
            const t = new L.p({
                baseFs: new x.A({
                  libzip: await (0, P.getLibzipPromise)(),
                  maxOpenFiles: 80,
                  readOnlyArchives: !0,
                }),
              }),
              r = (0, U.oC)(e, this.opts.project.cwd, t),
              n = Q(r, { pnpifyFs: !1, project: this.opts.project }),
              i = new Map()
            e.fallbackPool = i
            const s = (e, t) => {
                const r = A.parseLocator(t.locator),
                  n = A.stringifyIdent(r)
                n === e ? i.set(e, r.reference) : i.set(e, [n, r.reference])
              },
              a = o.y1.join(this.opts.project.cwd, o.QS.nodeModules),
              c = n.get(a)
            if (void 0 === c) throw new Error('Assertion failed: Expected a root junction point')
            if ('target' in c) throw new Error('Assertion failed: Expected the root junction point to be a directory')
            for (const e of c.dirList) {
              const t = o.y1.join(a, e),
                r = n.get(t)
              if (void 0 === r) throw new Error('Assertion failed: Expected the child to have been registered')
              if ('target' in r) s(e, r)
              else
                for (const i of r.dirList) {
                  const r = o.y1.join(t, i),
                    A = n.get(r)
                  if (void 0 === A) throw new Error('Assertion failed: Expected the subchild to have been registered')
                  if (!('target' in A)) throw new Error('Assertion failed: Expected the leaf junction to be a package')
                  s(`${e}/${i}`, A)
                }
            }
            return super.finalizeInstallWithPnp(e)
          }
        }
        const ie = (e) => o.y1.join(e.cwd, '.pnp.js'),
          oe = {
            configuration: {
              nmHoistingLimits: {
                description: 'Prevent packages can be hoisted past specific levels',
                type: i.a2.STRING,
                values: [w.WORKSPACES, w.DEPENDENCIES, w.NONE],
                default: 'none',
              },
            },
            linkers: [
              class {
                supportsPackage(e, t) {
                  return 'node-modules' === t.project.configuration.get('nodeLinker')
                }
                async findPackageLocation(e, t) {
                  const r = t.project.tryWorkspaceByLocator(e)
                  if (r) return r.cwd
                  const n = await z(t.project, { unrollAliases: !0 })
                  if (null === n)
                    throw new G.UsageError(
                      "Couldn't find the node_modules state file - running an install might help (findPackageLocation)"
                    )
                  const i = n.locatorMap.get(A.stringifyLocator(e))
                  if (!i) {
                    const r = new G.UsageError(
                      `Couldn't find ${A.prettyLocator(
                        t.project.configuration,
                        e
                      )} in the currently installed node_modules map - running an install might help`
                    )
                    throw ((r.code = 'LOCATOR_NOT_INSTALLED'), r)
                  }
                  return i.locations[0]
                }
                async findPackageLocator(e, t) {
                  const r = await z(t.project, { unrollAliases: !0 })
                  if (null === r) return null
                  const { locationRoot: n, segments: i } = V(o.y1.resolve(e), {
                    skipPrefix: t.project.cwd,
                  })
                  let s = r.locationTree.get(n)
                  if (!s) return null
                  let a = s.locator
                  for (const e of i) {
                    if (((s = s.children.get(e)), !s)) break
                    a = s.locator || a
                  }
                  return A.parseLocator(a)
                }
                makeInstaller(e) {
                  return new q({ ...e, skipIncompatiblePackageLinking: !0 })
                }
              },
              re,
            ],
          }
      },
      8190: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => V })
        var n,
          i,
          o = r(39922),
          A = r(36370),
          s = r(25413),
          a = r(85824),
          c = r(62152),
          g = r(35691),
          l = r(92659),
          u = r(85875),
          h = r(15815),
          p = r(14224),
          f = r(40822)
        !(function (e) {
          ;(e.All = 'all'), (e.Production = 'production'), (e.Development = 'development')
        })(n || (n = {})),
          (function (e) {
            ;(e.Info = 'info'), (e.Low = 'low'), (e.Moderate = 'moderate'), (e.High = 'high'), (e.Critical = 'critical')
          })(i || (i = {}))
        var d = r(54143),
          C = r(73632),
          I = r(71643)
        const E = [i.Info, i.Low, i.Moderate, i.High, i.Critical]
        function m(e, t) {
          const r = [],
            n = new Set(),
            i = (e) => {
              n.has(e) || (n.add(e), r.push(e))
            }
          for (const e of t) i(e)
          const o = new Set()
          for (; r.length > 0; ) {
            const t = r.shift(),
              n = e.storedResolutions.get(t)
            if (void 0 === n) throw new Error('Assertion failed: Expected the resolution to have been registered')
            const A = e.storedPackages.get(n)
            if (A) {
              o.add(t)
              for (const e of A.dependencies.values()) i(e.descriptorHash)
            }
          }
          return o
        }
        function B(e, t, { all: r }) {
          const n = r ? e.workspaces : [t],
            i = n.map((e) => e.manifest),
            o = new Set(i.map((e) => [...e.dependencies].map(([e, t]) => e)).flat()),
            A = new Set(i.map((e) => [...e.devDependencies].map(([e, t]) => e)).flat()),
            s = n.map((e) => [...e.dependencies.values()]).flat(),
            a = s.filter((e) => o.has(e.identHash)).map((e) => e.descriptorHash),
            c = s.filter((e) => A.has(e.identHash)).map((e) => e.descriptorHash),
            g = m(e, a),
            l = m(e, c)
          return (u = l), (h = g), new Set([...u].filter((e) => !h.has(e)))
          var u, h
        }
        function y(e) {
          const t = {}
          for (const r of e) t[d.stringifyIdent(r)] = d.parseRange(r.range).selector
          return t
        }
        function w(e) {
          if (void 0 === e) return new Set()
          const t = E.indexOf(e),
            r = E.slice(t)
          return new Set(r)
        }
        function Q(e, t) {
          var r
          const n = (function (e, t) {
            const r = w(t),
              n = {}
            for (const t of r) n[t] = e[t]
            return n
          })(e, t)
          for (const e of Object.keys(n)) if (null !== (r = n[e]) && void 0 !== r && r) return !0
          return !1
        }
        class v extends s.BaseCommand {
          constructor() {
            super(...arguments),
              (this.all = !1),
              (this.recursive = !1),
              (this.environment = n.All),
              (this.json = !1),
              (this.severity = i.Info)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
            await t.restoreInstallState()
            const i = (function (e, t, { all: r, environment: i }) {
                const o = r ? e.workspaces : [t],
                  A = []
                if ([n.All, n.Production].includes(i))
                  for (const e of o) for (const t of e.manifest.dependencies.values()) A.push(t)
                const s = []
                if ([n.All, n.Development].includes(i))
                  for (const e of o) for (const t of e.manifest.devDependencies.values()) s.push(t)
                return y([...A, ...s].filter((e) => null === d.parseRange(e.range).protocol))
              })(t, r, { all: this.all, environment: this.environment }),
              A = (function (e, t, { all: r }) {
                var n
                const i = B(e, t, { all: r }),
                  o = {}
                for (const t of e.storedPackages.values())
                  o[d.stringifyIdent(t)] = {
                    version: null !== (n = t.version) && void 0 !== n ? n : '0.0.0',
                    integrity: t.identHash,
                    requires: y(t.dependencies.values()),
                    dev: i.has(d.convertLocatorToDescriptor(t).descriptorHash),
                  }
                return o
              })(t, r, { all: this.all })
            if (!this.recursive)
              for (const e of Object.keys(A))
                Object.prototype.hasOwnProperty.call(i, e) ? (A[e].requires = {}) : delete A[e]
            const f = { requires: i, dependencies: A },
              E = p.npmConfigUtils.getPublishRegistry(r.manifest, { configuration: e })
            let m
            const v = await c.h.start({ configuration: e, stdout: this.context.stdout }, async () => {
              try {
                m = await p.npmHttpUtils.post('/-/npm/v1/security/audits/quick', f, {
                  authType: p.npmHttpUtils.AuthType.NO_AUTH,
                  configuration: e,
                  jsonResponse: !0,
                  registry: E,
                })
              } catch (e) {
                throw 'HTTPError' !== e.name ? e : new g.lk(l.b.EXCEPTION, e.toString())
              }
            })
            if (v.hasErrors()) return v.exitCode()
            const b = Q(m.metadata.vulnerabilities, this.severity)
            if (!this.json && b)
              return (
                u.emitTree(
                  (function (e, t) {
                    const r = {},
                      n = { children: r }
                    let i = Object.values(e.advisories)
                    if (null != t) {
                      const e = w(t)
                      i = i.filter((t) => e.has(t.severity))
                    }
                    for (const e of C.sortMap(i, (e) => e.module_name))
                      r[e.module_name] = {
                        label: e.module_name,
                        value: I.tuple(I.Type.RANGE, e.findings.map((e) => e.version).join(', ')),
                        children: {
                          Issue: { label: 'Issue', value: I.tuple(I.Type.NO_HINT, e.title) },
                          URL: { label: 'URL', value: I.tuple(I.Type.URL, e.url) },
                          Severity: {
                            label: 'Severity',
                            value: I.tuple(I.Type.NO_HINT, e.severity),
                          },
                          'Vulnerable Versions': {
                            label: 'Vulnerable Versions',
                            value: I.tuple(I.Type.RANGE, e.vulnerable_versions),
                          },
                          'Patched Versions': {
                            label: 'Patched Versions',
                            value: I.tuple(I.Type.RANGE, e.patched_versions),
                          },
                          Via: {
                            label: 'Via',
                            value: I.tuple(
                              I.Type.NO_HINT,
                              Array.from(
                                new Set(
                                  e.findings
                                    .map((e) => e.paths)
                                    .flat()
                                    .map((e) => e.split('>')[0])
                                )
                              ).join(', ')
                            ),
                          },
                          Recommendation: {
                            label: 'Recommendation',
                            value: I.tuple(I.Type.NO_HINT, e.recommendation.replace(/\n/g, ' ')),
                          },
                        },
                      }
                    return n
                  })(m, this.severity),
                  { configuration: e, json: this.json, stdout: this.context.stdout, separators: 2 }
                ),
                1
              )
            return (
              await h.Pk.start(
                { configuration: e, includeFooter: !1, json: this.json, stdout: this.context.stdout },
                async (e) => {
                  e.reportJson(m), b || e.reportInfo(l.b.EXCEPTION, 'No audit suggestions')
                }
              )
            ).exitCode()
          }
        }
        ;(v.usage = f.Command.Usage({
          description: 'perform a vulnerability audit against the installed packages',
          details: `\n      This command checks for known security reports on the packages you use. The reports are by default extracted from the npm registry, and may or may not be relevant to your actual program (not all vulnerabilities affect all code paths).\n\n      For consistency with our other commands the default is to only check the direct dependencies for the active workspace. To extend this search to all workspaces, use \`-A,--all\`. To extend this search to both direct and transitive dependencies, use \`-R,--recursive\`.\n\n      Applying the \`--severity\` flag will limit the audit table to vulnerabilities of the corresponding severity and above. Valid values are ${E.map(
            (e) => `\`${e}\``
          ).join(
            ', '
          )}.\n\n      If the \`--json\` flag is set, Yarn will print the output exactly as received from the registry. Regardless of this flag, the process will exit with a non-zero exit code if a report is found for the selected packages.\n\n      To understand the dependency tree requiring vulnerable packages, check the raw report with the \`--json\` flag or use \`yarn why <package>\` to get more information as to who depends on them.\n    `,
          examples: [
            [
              'Checks for known security issues with the installed packages. The output is a list of known issues.',
              'yarn npm audit',
            ],
            ['Audit dependencies in all workspaces', 'yarn npm audit --all'],
            [
              'Limit auditing to `dependencies` (excludes `devDependencies`)',
              'yarn npm audit --environment production',
            ],
            ['Show audit report as valid JSON', 'yarn npm audit --json'],
            ['Audit all direct and transitive dependencies', 'yarn npm audit --recursive'],
            ['Output moderate (or more severe) vulnerabilities', 'yarn npm audit --severity moderate'],
          ],
        })),
          (0, A.gn)([f.Command.Boolean('-A,--all')], v.prototype, 'all', void 0),
          (0, A.gn)([f.Command.Boolean('-R,--recursive')], v.prototype, 'recursive', void 0),
          (0, A.gn)([f.Command.String('--environment')], v.prototype, 'environment', void 0),
          (0, A.gn)([f.Command.Boolean('--json')], v.prototype, 'json', void 0),
          (0, A.gn)([f.Command.String('--severity')], v.prototype, 'severity', void 0),
          (0, A.gn)([f.Command.Path('npm', 'audit')], v.prototype, 'execute', null)
        var b = r(85622),
          D = r.n(b),
          S = r(53887),
          k = r.n(S),
          M = r(31669)
        class F extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await a.I.find(e, this.context.cwd),
              r = void 0 !== this.fields ? new Set(['name', ...this.fields.split(/\s*,\s*/)]) : null,
              n = []
            let i = !1
            const A = await h.Pk.start(
              { configuration: e, includeFooter: !1, json: this.json, stdout: this.context.stdout },
              async (o) => {
                for (const A of this.packages) {
                  let s
                  if ('.' === A) {
                    const e = t.topLevelWorkspace
                    if (!e.manifest.name)
                      throw new f.UsageError("Missing 'name' field in " + D().join(e.cwd, 'package.json'))
                    s = d.makeDescriptor(e.manifest.name, 'unknown')
                  } else s = d.parseDescriptor(A)
                  const a = p.npmHttpUtils.getIdentUrl(s)
                  let c
                  try {
                    c = N(
                      await p.npmHttpUtils.get(a, {
                        configuration: e,
                        ident: s,
                        jsonResponse: !0,
                      })
                    )
                  } catch (e) {
                    throw 'HTTPError' !== e.name
                      ? e
                      : 404 === e.response.statusCode
                      ? new g.lk(l.b.EXCEPTION, 'Package not found')
                      : new g.lk(l.b.EXCEPTION, e.toString())
                  }
                  const u = Object.keys(c.versions).sort(k().compareLoose)
                  let h = c['dist-tags'].latest || u[u.length - 1]
                  if (k().validRange(s.range)) {
                    const t = k().maxSatisfying(u, s.range)
                    null !== t
                      ? (h = t)
                      : (o.reportWarning(
                          l.b.UNNAMED,
                          `Unmet range ${d.prettyRange(e, s.range)}; falling back to the latest version`
                        ),
                        (i = !0))
                  } else
                    'unknown' !== s.range &&
                      (o.reportWarning(
                        l.b.UNNAMED,
                        `Invalid range ${d.prettyRange(e, s.range)}; falling back to the latest version`
                      ),
                      (i = !0))
                  const C = c.versions[h],
                    I = { ...c, ...C, version: h, versions: u }
                  let E
                  if (null !== r) {
                    E = {}
                    for (const t of r) {
                      const r = I[t]
                      void 0 !== r
                        ? (E[t] = r)
                        : (o.reportWarning(
                            l.b.EXCEPTION,
                            `The '${t}' field doesn't exist inside ${d.prettyIdent(e, s)}'s informations`
                          ),
                          (i = !0))
                    }
                  } else this.json || (delete I.dist, delete I.readme, delete I.users), (E = I)
                  o.reportJson(E), this.json || n.push(E)
                }
              }
            )
            M.inspect.styles.name = 'cyan'
            for (const e of n)
              (e !== n[0] || i) && this.context.stdout.write('\n'),
                this.context.stdout.write((0, M.inspect)(e, { depth: 1 / 0, colors: !0, compact: !1 }) + '\n')
            return A.exitCode()
          }
        }
        function N(e) {
          if (Array.isArray(e)) {
            const t = []
            for (let r of e) (r = N(r)), r && t.push(r)
            return t
          }
          if ('object' == typeof e && null !== e) {
            const t = {}
            for (const r of Object.keys(e)) {
              if (r.startsWith('_')) continue
              const n = N(e[r])
              n && (t[r] = n)
            }
            return t
          }
          return e || null
        }
        ;(F.usage = f.Command.Usage({
          category: 'Npm-related commands',
          description: 'show information about a package',
          details:
            "\n      This command will fetch information about a package from the npm registry, and prints it in a tree format.\n\n      The package does not have to be installed locally, but needs to have been published (in particular, local changes will be ignored even for workspaces).\n\n      Append `@<range>` to the package argument to provide information specific to the latest version that satisfies the range. If the range is invalid or if there is no version satisfying the range, the command will print a warning and fall back to the latest version.\n\n      If the `-f,--fields` option is set, it's a comma-separated list of fields which will be used to only display part of the package informations.\n\n      By default, this command won't return the `dist`, `readme`, and `users` fields, since they are often very long. To explicitly request those fields, explicitly list them with the `--fields` flag or request the output in JSON mode.\n    ",
          examples: [
            [
              'Show all available information about react (except the `dist`, `readme`, and `users` fields)',
              'yarn npm info react',
            ],
            [
              'Show all available information about react as valid JSON (including the `dist`, `readme`, and `users` fields)',
              'yarn npm info react --json',
            ],
            ['Show all available information about react 16.12.0', 'yarn npm info react@16.12.0'],
            ['Show the description of react', 'yarn npm info react --fields description'],
            ['Show all available versions of react', 'yarn npm info react --fields versions'],
            ['Show the readme of react', 'yarn npm info react --fields readme'],
            ['Show a few fields of react', 'yarn npm info react --fields homepage,repository'],
          ],
        })),
          (0, A.gn)([f.Command.Rest()], F.prototype, 'packages', void 0),
          (0, A.gn)(
            [
              f.Command.String('-f,--fields', {
                description: 'A comma-separated list of manifest fields that should be displayed',
              }),
            ],
            F.prototype,
            'fields',
            void 0
          ),
          (0, A.gn)(
            [f.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            F.prototype,
            'json',
            void 0
          ),
          (0, A.gn)([f.Command.Path('npm', 'info')], F.prototype, 'execute', null)
        var R = r(61899)
        class K extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              t = await L({
                configuration: e,
                cwd: this.context.cwd,
                publish: this.publish,
                scope: this.scope,
              })
            return (
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async (r) => {
                const n = await (async function ({ registry: e, report: t, stdin: r, stdout: n }) {
                    if (process.env.TEST_ENV)
                      return {
                        name: process.env.TEST_NPM_USER || '',
                        password: process.env.TEST_NPM_PASSWORD || '',
                      }
                    t.reportInfo(l.b.UNNAMED, 'Logging in to ' + e)
                    let i = !1
                    e.match(/^https:\/\/npm\.pkg\.github\.com(\/|$)/) &&
                      (t.reportInfo(
                        l.b.UNNAMED,
                        "You seem to be using the GitHub Package Registry. Tokens must be generated with the 'repo', 'write:packages', and 'read:packages' permissions."
                      ),
                      (i = !0))
                    t.reportSeparator()
                    const { username: o, password: A } = await (0, R.prompt)([
                      {
                        type: 'input',
                        name: 'username',
                        message: 'Username:',
                        required: !0,
                        onCancel: () => process.exit(130),
                        stdin: r,
                        stdout: n,
                      },
                      {
                        type: 'password',
                        name: 'password',
                        message: i ? 'Token:' : 'Password:',
                        required: !0,
                        onCancel: () => process.exit(130),
                        stdin: r,
                        stdout: n,
                      },
                    ])
                    return t.reportSeparator(), { name: o, password: A }
                  })({
                    registry: t,
                    report: r,
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                  }),
                  i = '/-/user/org.couchdb.user:' + encodeURIComponent(n.name),
                  A = await p.npmHttpUtils.put(i, n, {
                    attemptedAs: n.name,
                    configuration: e,
                    registry: t,
                    jsonResponse: !0,
                    authType: p.npmHttpUtils.AuthType.NO_AUTH,
                  })
                return (
                  await (async function (e, t, { configuration: r, scope: n }) {
                    const i = (e) => (r) => {
                        const n = C.isIndexableObject(r) ? r : {},
                          i = n[e],
                          o = C.isIndexableObject(i) ? i : {}
                        return { ...n, [e]: { ...o, npmAuthToken: t } }
                      },
                      A = n ? { npmScopes: i(n) } : { npmRegistries: i(e) }
                    return await o.VK.updateHomeConfiguration(A)
                  })(t, A.token, { configuration: e, scope: this.scope }),
                  r.reportInfo(l.b.UNNAMED, 'Successfully logged in')
                )
              })
            ).exitCode()
          }
        }
        async function L({ scope: e, publish: t, configuration: r, cwd: n }) {
          return e && t
            ? p.npmConfigUtils.getScopeRegistry(e, {
                configuration: r,
                type: p.npmConfigUtils.RegistryType.PUBLISH_REGISTRY,
              })
            : e
            ? p.npmConfigUtils.getScopeRegistry(e, { configuration: r })
            : t
            ? p.npmConfigUtils.getPublishRegistry((await (0, s.openWorkspace)(r, n)).manifest, {
                configuration: r,
              })
            : p.npmConfigUtils.getDefaultRegistry({ configuration: r })
        }
        ;(K.usage = f.Command.Usage({
          category: 'Npm-related commands',
          description: 'store new login info to access the npm registry',
          details:
            '\n      This command will ask you for your username, password, and 2FA One-Time-Password (when it applies). It will then modify your local configuration (in your home folder, never in the project itself) to reference the new tokens thus generated.\n\n      Adding the `-s,--scope` flag will cause the authentication to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the authentication to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n    ',
          examples: [
            ['Login to the default registry', 'yarn npm login'],
            ['Login to the registry linked to the @my-scope registry', 'yarn npm login --scope my-scope'],
            ['Login to the publish registry for the current package', 'yarn npm login --publish'],
          ],
        })),
          (0, A.gn)(
            [
              f.Command.String('-s,--scope', {
                description: 'Login to the registry configured for a given scope',
              }),
            ],
            K.prototype,
            'scope',
            void 0
          ),
          (0, A.gn)(
            [f.Command.Boolean('--publish', { description: 'Login to the publish registry' })],
            K.prototype,
            'publish',
            void 0
          ),
          (0, A.gn)([f.Command.Path('npm', 'login')], K.prototype, 'execute', null)
        const x = new Set(['npmAuthIdent', 'npmAuthToken'])
        class P extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1), (this.all = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              t = async () => {
                var t
                const r = await L({
                    configuration: e,
                    cwd: this.context.cwd,
                    publish: this.publish,
                    scope: this.scope,
                  }),
                  n = await o.VK.find(this.context.cwd, this.context.plugins),
                  i = d.makeIdent(null !== (t = this.scope) && void 0 !== t ? t : null, 'pkg')
                return !p.npmConfigUtils.getAuthConfiguration(r, { configuration: n, ident: i }).get('npmAuthToken')
              }
            return (
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async (r) => {
                if (
                  (this.all &&
                    (await (async function () {
                      const e = (e) => {
                        let t = !1
                        const r = C.isIndexableObject(e) ? { ...e } : {}
                        r.npmAuthToken && (delete r.npmAuthToken, (t = !0))
                        for (const e of Object.keys(r)) T(r, e) && (t = !0)
                        if (0 !== Object.keys(r).length) return t ? r : e
                      }
                      return await o.VK.updateHomeConfiguration({
                        npmRegistries: e,
                        npmScopes: e,
                      })
                    })(),
                    r.reportInfo(l.b.UNNAMED, 'Successfully logged out from everything')),
                  this.scope)
                )
                  return (
                    await O('npmScopes', this.scope),
                    void ((await t())
                      ? r.reportInfo(l.b.UNNAMED, 'Successfully logged out from ' + this.scope)
                      : r.reportWarning(
                          l.b.UNNAMED,
                          'Scope authentication settings removed, but some other ones settings still apply to it'
                        ))
                  )
                const n = await L({ configuration: e, cwd: this.context.cwd, publish: this.publish })
                await O('npmRegistries', n),
                  (await t())
                    ? r.reportInfo(l.b.UNNAMED, 'Successfully logged out from ' + n)
                    : r.reportWarning(
                        l.b.UNNAMED,
                        'Registry authentication settings removed, but some other ones settings still apply to it'
                      )
              })
            ).exitCode()
          }
        }
        function T(e, t) {
          const r = e[t]
          if (!C.isIndexableObject(r)) return !1
          const n = new Set(Object.keys(r))
          if ([...x].every((e) => !n.has(e))) return !1
          for (const e of x) n.delete(e)
          if (0 === n.size) return (e[t] = void 0), !0
          const i = { ...r }
          for (const e of x) delete i[e]
          return (e[t] = i), !0
        }
        async function O(e, t) {
          return await o.VK.updateHomeConfiguration({
            [e]: (e) => {
              const r = C.isIndexableObject(e) ? e : {}
              if (!Object.prototype.hasOwnProperty.call(r, t)) return e
              const n = r[t],
                i = C.isIndexableObject(n) ? n : {},
                o = new Set(Object.keys(i))
              if ([...x].every((e) => !o.has(e))) return e
              for (const e of x) o.delete(e)
              if (0 === o.size) {
                if (1 === Object.keys(r).length) return
                return { ...r, [t]: void 0 }
              }
              const A = {}
              for (const e of x) A[e] = void 0
              return { ...r, [t]: { ...i, ...A } }
            },
          })
        }
        ;(P.usage = f.Command.Usage({
          category: 'Npm-related commands',
          description: 'logout of the npm registry',
          details:
            '\n      This command will log you out by modifying your local configuration (in your home folder, never in the project itself) to delete all credentials linked to a registry.\n\n      Adding the `-s,--scope` flag will cause the deletion to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the deletion to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n\n      Adding the `-A,--all` flag will cause the deletion to be done against all registries and scopes.\n    ',
          examples: [
            ['Logout of the default registry', 'yarn npm logout'],
            ['Logout of the @my-scope scope', 'yarn npm logout --scope my-scope'],
            ['Logout of the publish registry for the current package', 'yarn npm logout --publish'],
            ['Logout of all registries', 'yarn npm logout --all'],
          ],
        })),
          (0, A.gn)(
            [
              f.Command.String('-s,--scope', {
                description: 'Logout of the registry configured for a given scope',
              }),
            ],
            P.prototype,
            'scope',
            void 0
          ),
          (0, A.gn)(
            [f.Command.Boolean('--publish', { description: 'Logout of the publish registry' })],
            P.prototype,
            'publish',
            void 0
          ),
          (0, A.gn)(
            [f.Command.Boolean('-A,--all', { description: 'Logout of all registries' })],
            P.prototype,
            'all',
            void 0
          ),
          (0, A.gn)([f.Command.Path('npm', 'logout')], P.prototype, 'execute', null)
        var U = r(63088),
          j = r(49881)
        class Y extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.tag = 'latest'), (this.tolerateRepublish = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
            if (r.manifest.private) throw new f.UsageError('Private workspaces cannot be published')
            if (null === r.manifest.name || null === r.manifest.version)
              throw new f.UsageError(
                'Workspaces must have valid names and versions to be published on an external registry'
              )
            await t.restoreInstallState()
            const n = r.manifest.name,
              i = r.manifest.version,
              A = p.npmConfigUtils.getPublishRegistry(r.manifest, { configuration: e })
            return (
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async (t) => {
                if (this.tolerateRepublish)
                  try {
                    const r = await p.npmHttpUtils.get(p.npmHttpUtils.getIdentUrl(n), {
                      configuration: e,
                      registry: A,
                      ident: n,
                      jsonResponse: !0,
                    })
                    if (!Object.prototype.hasOwnProperty.call(r, 'versions'))
                      throw new g.lk(
                        l.b.REMOTE_INVALID,
                        'Registry returned invalid data for - missing "versions" field'
                      )
                    if (Object.prototype.hasOwnProperty.call(r.versions, i))
                      return void t.reportWarning(l.b.UNNAMED, `Registry already knows about version ${i}; skipping.`)
                  } catch (e) {
                    if ('HTTPError' !== e.name) throw e
                    if (404 !== e.response.statusCode)
                      throw new g.lk(
                        l.b.NETWORK_ERROR,
                        `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
                      )
                  }
                await U.maybeExecuteWorkspaceLifecycleScript(r, 'prepublish', { report: t }),
                  await j.packUtils.prepareForPack(r, { report: t }, async () => {
                    const i = await j.packUtils.genPackList(r)
                    for (const e of i) t.reportInfo(null, e)
                    const o = await j.packUtils.genPackStream(r, i),
                      s = await C.bufferStream(o),
                      a = await p.npmPublishUtils.makePublishBody(r, s, {
                        access: this.access,
                        tag: this.tag,
                        registry: A,
                      })
                    try {
                      await p.npmHttpUtils.put(p.npmHttpUtils.getIdentUrl(n), a, {
                        configuration: e,
                        registry: A,
                        ident: n,
                        jsonResponse: !0,
                      })
                    } catch (e) {
                      if ('HTTPError' !== e.name) throw e
                      {
                        const r =
                          e.response.body && e.response.body.error
                            ? e.response.body.error
                            : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
                        t.reportError(l.b.NETWORK_ERROR, r)
                      }
                    }
                  }),
                  t.hasErrors() || t.reportInfo(l.b.UNNAMED, 'Package archive published')
              })
            ).exitCode()
          }
        }
        ;(Y.usage = f.Command.Usage({
          category: 'Npm-related commands',
          description: 'publish the active workspace to the npm registry',
          details:
            '\n      This command will pack the active workspace into a fresh archive and upload it to the npm registry.\n\n      The package will by default be attached to the `latest` tag on the registry, but this behavior can be overriden by using the `--tag` option.\n\n      Note that for legacy reasons scoped packages are by default published with an access set to `restricted` (aka "private packages"). This requires you to register for a paid npm plan. In case you simply wish to publish a public scoped package to the registry (for free), just add the `--access public` flag. This behavior can be enabled by default through the `npmPublishAccess` settings.\n    ',
          examples: [['Publish the active workspace', 'yarn npm publish']],
        })),
          (0, A.gn)(
            [
              f.Command.String('--access', {
                description: 'The access for the published package (public or restricted)',
              }),
            ],
            Y.prototype,
            'access',
            void 0
          ),
          (0, A.gn)(
            [
              f.Command.String('--tag', {
                description: 'The tag on the registry that the package should be attached to',
              }),
            ],
            Y.prototype,
            'tag',
            void 0
          ),
          (0, A.gn)(
            [
              f.Command.Boolean('--tolerate-republish', {
                description: 'Warn and exit when republishing an already existing version of a package',
              }),
            ],
            Y.prototype,
            'tolerateRepublish',
            void 0
          ),
          (0, A.gn)([f.Command.Path('npm', 'publish')], Y.prototype, 'execute', null)
        var G = r(46009)
        class H extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            let n
            if (void 0 !== this.package) n = d.parseIdent(this.package)
            else {
              if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
              if (!r.manifest.name) throw new f.UsageError("Missing 'name' field in " + G.y1.join(r.cwd, G.QS.manifest))
              n = r.manifest.name
            }
            const i = await J(n, e),
              A = {
                children: C.sortMap(Object.entries(i), ([e]) => e).map(([e, t]) => ({
                  value: I.tuple(I.Type.RESOLUTION, {
                    descriptor: d.makeDescriptor(n, e),
                    locator: d.makeLocator(n, t),
                  }),
                })),
              }
            return u.emitTree(A, { configuration: e, json: this.json, stdout: this.context.stdout })
          }
        }
        async function J(e, t) {
          const r = `/-/package${p.npmHttpUtils.getIdentUrl(e)}/dist-tags`
          return p.npmHttpUtils.get(r, { configuration: t, ident: e, jsonResponse: !0 }).catch((e) => {
            throw 'HTTPError' !== e.name
              ? e
              : 404 === e.response.statusCode
              ? new g.lk(l.b.EXCEPTION, 'Package not found')
              : new g.lk(l.b.EXCEPTION, e.toString())
          })
        }
        ;(H.usage = f.Command.Usage({
          category: 'Npm-related commands',
          description: 'list all dist-tags of a package',
          details:
            '\n      This command will list all tags of a package from the npm registry.\n\n      If the package is not specified, Yarn will default to the current workspace.\n    ',
          examples: [['List all tags of package `my-pkg`', 'yarn npm tag list my-pkg']],
        })),
          (0, A.gn)([f.Command.String({ required: !1 })], H.prototype, 'package', void 0),
          (0, A.gn)(
            [f.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            H.prototype,
            'json',
            void 0
          ),
          (0, A.gn)([f.Command.Path('npm', 'tag', 'list')], H.prototype, 'execute', null)
        class _ extends s.BaseCommand {
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const n = d.parseDescriptor(this.package, !0),
              i = n.range
            if (!k().valid(i))
              throw new f.UsageError(`The range ${I.pretty(e, n.range, I.Type.RANGE)} must be a valid semver version`)
            const A = p.npmConfigUtils.getPublishRegistry(r.manifest, { configuration: e }),
              c = I.pretty(e, n, I.Type.IDENT),
              g = I.pretty(e, i, I.Type.RANGE),
              u = I.pretty(e, this.tag, I.Type.CODE)
            return (
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async (t) => {
                const r = await J(n, e)
                Object.prototype.hasOwnProperty.call(r, this.tag) &&
                  r[this.tag] === i &&
                  t.reportWarning(l.b.UNNAMED, `Tag ${u} is already set to version ${g}`)
                try {
                  const t = `/-/package${p.npmHttpUtils.getIdentUrl(n)}/dist-tags/${encodeURIComponent(this.tag)}`
                  await p.npmHttpUtils.put(t, i, {
                    configuration: e,
                    registry: A,
                    ident: n,
                    jsonRequest: !0,
                    jsonResponse: !0,
                  })
                } catch (e) {
                  if ('HTTPError' !== e.name) throw e
                  {
                    const r =
                      e.response.body && e.response.body.error
                        ? e.response.body.error
                        : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
                    t.reportError(l.b.NETWORK_ERROR, r)
                  }
                }
                t.hasErrors() || t.reportInfo(l.b.UNNAMED, `Tag ${u} added to version ${g} of package ${c}`)
              })
            ).exitCode()
          }
        }
        ;(_.usage = f.Command.Usage({
          category: 'Npm-related commands',
          description: 'add a tag for a specific version of a package',
          details:
            '\n      This command will add a tag to the npm registry for a specific version of a package. If the tag already exists, it will be overwritten.\n    ',
          examples: [
            [
              'Add a `beta` tag for version `2.3.4-beta.4` of package `my-pkg`',
              'yarn npm tag add my-pkg@2.3.4-beta.4 beta',
            ],
          ],
        })),
          (0, A.gn)([f.Command.String()], _.prototype, 'package', void 0),
          (0, A.gn)([f.Command.String()], _.prototype, 'tag', void 0),
          (0, A.gn)([f.Command.Path('npm', 'tag', 'add')], _.prototype, 'execute', null)
        var q = r(15966)
        class z extends s.BaseCommand {
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const n = d.parseIdent(this.package),
              i = p.npmConfigUtils.getPublishRegistry(r.manifest, { configuration: e }),
              A = I.pretty(e, this.tag, I.Type.CODE),
              c = I.pretty(e, n, I.Type.IDENT),
              g = await J(n, e)
            if (!Object.prototype.hasOwnProperty.call(g, this.tag))
              throw new f.UsageError(`${A} is not a tag of package ${c}`)
            return (
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async (t) => {
                try {
                  const t = `/-/package${p.npmHttpUtils.getIdentUrl(n)}/dist-tags/${encodeURIComponent(this.tag)}`
                  await p.npmHttpUtils.del(t, {
                    configuration: e,
                    registry: i,
                    ident: n,
                    jsonResponse: !0,
                  })
                } catch (e) {
                  if ('HTTPError' !== e.name) throw e
                  {
                    const r =
                      e.response.body && e.response.body.error
                        ? e.response.body.error
                        : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
                    t.reportError(l.b.NETWORK_ERROR, r)
                  }
                }
                t.hasErrors() || t.reportInfo(l.b.UNNAMED, `Tag ${A} removed from package ${c}`)
              })
            ).exitCode()
          }
        }
        ;(z.schema = q.object().shape({ tag: q.string().notOneOf(['latest']) })),
          (z.usage = f.Command.Usage({
            category: 'Npm-related commands',
            description: 'remove a tag from a package',
            details: '\n      This command will remove a tag from a package from the npm registry.\n    ',
            examples: [['Remove the `beta` tag from package `my-pkg`', 'yarn npm tag remove my-pkg beta']],
          })),
          (0, A.gn)([f.Command.String()], z.prototype, 'package', void 0),
          (0, A.gn)([f.Command.String()], z.prototype, 'tag', void 0),
          (0, A.gn)([f.Command.Path('npm', 'tag', 'remove')], z.prototype, 'execute', null)
        class W extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins)
            let t
            t =
              this.scope && this.publish
                ? p.npmConfigUtils.getScopeRegistry(this.scope, {
                    configuration: e,
                    type: p.npmConfigUtils.RegistryType.PUBLISH_REGISTRY,
                  })
                : this.scope
                ? p.npmConfigUtils.getScopeRegistry(this.scope, { configuration: e })
                : this.publish
                ? p.npmConfigUtils.getPublishRegistry((await (0, s.openWorkspace)(e, this.context.cwd)).manifest, {
                    configuration: e,
                  })
                : p.npmConfigUtils.getDefaultRegistry({ configuration: e })
            return (
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async (r) => {
                try {
                  const n = await p.npmHttpUtils.get('/-/whoami', {
                    configuration: e,
                    registry: t,
                    authType: p.npmHttpUtils.AuthType.ALWAYS_AUTH,
                    jsonResponse: !0,
                    ident: this.scope ? d.makeIdent(this.scope, '') : void 0,
                  })
                  r.reportInfo(l.b.UNNAMED, n.username)
                } catch (e) {
                  if ('HTTPError' !== e.name) throw e
                  401 === e.response.statusCode || 403 === e.response.statusCode
                    ? r.reportError(
                        l.b.AUTHENTICATION_INVALID,
                        'Authentication failed - your credentials may have expired'
                      )
                    : r.reportError(l.b.AUTHENTICATION_INVALID, e.toString())
                }
              })
            ).exitCode()
          }
        }
        ;(W.usage = f.Command.Usage({
          category: 'Npm-related commands',
          description: 'display the name of the authenticated user',
          details:
            "\n      Print the username associated with the current authentication settings to the standard output.\n\n      When using `-s,--scope`, the username printed will be the one that matches the authentication settings of the registry associated with the given scope (those settings can be overriden using the `npmRegistries` map, and the registry associated with the scope is configured via the `npmScopes` map).\n\n      When using `--publish`, the registry we'll select will by default be the one used when publishing packages (`publishConfig.registry` or `npmPublishRegistry` if available, otherwise we'll fallback to the regular `npmRegistryServer`).\n    ",
          examples: [
            ['Print username for the default registry', 'yarn npm whoami'],
            ['Print username for the registry on a given scope', 'yarn npm whoami --scope company'],
          ],
        })),
          (0, A.gn)(
            [
              f.Command.String('-s,--scope', {
                description: 'Print username for the registry configured for a given scope',
              }),
            ],
            W.prototype,
            'scope',
            void 0
          ),
          (0, A.gn)(
            [f.Command.Boolean('--publish', { description: 'Print username for the publish registry' })],
            W.prototype,
            'publish',
            void 0
          ),
          (0, A.gn)([f.Command.Path('npm', 'whoami')], W.prototype, 'execute', null)
        const V = {
          configuration: {
            npmPublishAccess: {
              description: 'Default access of the published packages',
              type: o.a2.STRING,
              default: null,
            },
          },
          commands: [v, F, K, P, Y, _, H, z, W],
        }
      },
      14224: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            default: () => z,
            npmConfigUtils: () => n,
            npmHttpUtils: () => i,
            npmPublishUtils: () => o,
          })
        var n = {}
        r.r(n),
          r.d(n, {
            RegistryType: () => l,
            getAuthConfiguration: () => Q,
            getDefaultRegistry: () => B,
            getPublishRegistry: () => E,
            getRegistryConfiguration: () => y,
            getScopeConfiguration: () => w,
            getScopeRegistry: () => m,
            normalizeRegistry: () => I,
          })
        var i = {}
        r.r(i),
          r.d(i, {
            AuthType: () => u,
            del: () => M,
            get: () => D,
            getIdentUrl: () => b,
            handleInvalidAuthenticationError: () => v,
            post: () => S,
            put: () => k,
          })
        var o = {}
        r.r(o), r.d(o, { makePublishBody: () => J })
        var A = r(39922),
          s = r(54143),
          a = r(72785),
          c = r(53887),
          g = r.n(c)
        var l,
          u,
          h = r(79669),
          p = r(35691),
          f = r(92659),
          d = r(61899),
          C = r(78835)
        function I(e) {
          return e.replace(/\/$/, '')
        }
        function E(e, { configuration: t }) {
          return e.publishConfig && e.publishConfig.registry
            ? I(e.publishConfig.registry)
            : e.name
            ? m(e.name.scope, { configuration: t, type: l.PUBLISH_REGISTRY })
            : B({ configuration: t, type: l.PUBLISH_REGISTRY })
        }
        function m(e, { configuration: t, type: r = l.FETCH_REGISTRY }) {
          const n = w(e, { configuration: t })
          if (null === n) return B({ configuration: t, type: r })
          const i = n.get(r)
          return null === i ? B({ configuration: t, type: r }) : I(i)
        }
        function B({ configuration: e, type: t = l.FETCH_REGISTRY }) {
          const r = e.get(t)
          return I(null !== r ? r : e.get(l.FETCH_REGISTRY))
        }
        function y(e, { configuration: t }) {
          const r = t.get('npmRegistries'),
            n = r.get(e)
          if (void 0 !== n) return n
          const i = r.get(e.replace(/^[a-z]+:/, ''))
          return void 0 !== i ? i : null
        }
        function w(e, { configuration: t }) {
          if (null === e) return null
          const r = t.get('npmScopes').get(e)
          return r || null
        }
        function Q(e, { configuration: t, ident: r }) {
          const n = r && w(r.scope, { configuration: t })
          if ((null == n ? void 0 : n.get('npmAuthIdent')) || (null == n ? void 0 : n.get('npmAuthToken'))) return n
          return y(e, { configuration: t }) || t
        }
        async function v(e, { attemptedAs: t, registry: r, headers: n, configuration: i }) {
          if ('HTTPError' === e.name && 401 === e.response.statusCode)
            throw new p.lk(
              f.b.AUTHENTICATION_INVALID,
              `Invalid authentication (${
                'string' != typeof t
                  ? 'as ' +
                    (await (async function (e, t, { configuration: r }) {
                      var n
                      if (void 0 === t || void 0 === t.authorization) return 'an anonymous user'
                      try {
                        const i = await h.get(new C.URL(e + '/-/whoami').href, {
                          configuration: r,
                          headers: t,
                          jsonResponse: !0,
                        })
                        return null !== (n = i.username) && void 0 !== n ? n : 'an unknown user'
                      } catch (e) {
                        return 'an unknown user'
                      }
                    })(r, n, { configuration: i }))
                  : 'attempted as ' + t
              })`
            )
        }
        function b(e) {
          return e.scope ? `/@${e.scope}%2f${e.name}` : '/' + e.name
        }
        async function D(e, { configuration: t, headers: r, ident: n, authType: i, registry: o, ...A }) {
          if (
            (n && void 0 === o && (o = m(n.scope, { configuration: t })),
            n && n.scope && void 0 === i && (i = u.BEST_EFFORT),
            'string' != typeof o)
          )
            throw new Error('Assertion failed: The registry should be a string')
          const s = F(o, { authType: i, configuration: t, ident: n })
          let a
          s && (r = { ...r, authorization: s })
          try {
            a = new C.URL(e)
          } catch (t) {
            a = new C.URL(o + e)
          }
          try {
            return await h.get(a.href, { configuration: t, headers: r, ...A })
          } catch (e) {
            throw (await v(e, { registry: o, configuration: t, headers: r }), e)
          }
        }
        async function S(
          e,
          t,
          { attemptedAs: r, configuration: n, headers: i, ident: o, authType: A = u.ALWAYS_AUTH, registry: s, ...a }
        ) {
          if ((o && void 0 === s && (s = m(o.scope, { configuration: n })), 'string' != typeof s))
            throw new Error('Assertion failed: The registry should be a string')
          const c = F(s, { authType: A, configuration: n, ident: o })
          c && (i = { ...i, authorization: c })
          try {
            return await h.post(s + e, t, { configuration: n, headers: i, ...a })
          } catch (o) {
            if (!R(o)) throw (await v(o, { attemptedAs: r, registry: s, configuration: n, headers: i }), o)
            const A = await N(),
              c = { ...i, ...K(A) }
            try {
              return await h.post(`${s}${e}`, t, { configuration: n, headers: c, ...a })
            } catch (e) {
              throw (await v(e, { attemptedAs: r, registry: s, configuration: n, headers: i }), e)
            }
          }
        }
        async function k(
          e,
          t,
          { attemptedAs: r, configuration: n, headers: i, ident: o, authType: A = u.ALWAYS_AUTH, registry: s, ...a }
        ) {
          if ((o && void 0 === s && (s = m(o.scope, { configuration: n })), 'string' != typeof s))
            throw new Error('Assertion failed: The registry should be a string')
          const c = F(s, { authType: A, configuration: n, ident: o })
          c && (i = { ...i, authorization: c })
          try {
            return await h.put(s + e, t, { configuration: n, headers: i, ...a })
          } catch (o) {
            if (!R(o)) throw (await v(o, { attemptedAs: r, registry: s, configuration: n, headers: i }), o)
            const A = await N(),
              c = { ...i, ...K(A) }
            try {
              return await h.put(`${s}${e}`, t, { configuration: n, headers: c, ...a })
            } catch (e) {
              throw (await v(e, { attemptedAs: r, registry: s, configuration: n, headers: i }), e)
            }
          }
        }
        async function M(
          e,
          { attemptedAs: t, configuration: r, headers: n, ident: i, authType: o = u.ALWAYS_AUTH, registry: A, ...s }
        ) {
          if ((i && void 0 === A && (A = m(i.scope, { configuration: r })), 'string' != typeof A))
            throw new Error('Assertion failed: The registry should be a string')
          const a = F(A, { authType: o, configuration: r, ident: i })
          a && (n = { ...n, authorization: a })
          try {
            return await h.del(A + e, { configuration: r, headers: n, ...s })
          } catch (i) {
            if (!R(i)) throw (await v(i, { attemptedAs: t, registry: A, configuration: r, headers: n }), i)
            const o = await N(),
              a = { ...n, ...K(o) }
            try {
              return await h.del(`${A}${e}`, { configuration: r, headers: a, ...s })
            } catch (e) {
              throw (await v(e, { attemptedAs: t, registry: A, configuration: r, headers: n }), e)
            }
          }
        }
        function F(e, { authType: t = u.CONFIGURATION, configuration: r, ident: n }) {
          const i = Q(e, { configuration: r, ident: n }),
            o = (function (e, t) {
              switch (t) {
                case u.CONFIGURATION:
                  return e.get('npmAlwaysAuth')
                case u.BEST_EFFORT:
                case u.ALWAYS_AUTH:
                  return !0
                case u.NO_AUTH:
                  return !1
                default:
                  throw new Error('Unreachable')
              }
            })(i, t)
          if (!o) return null
          if (i.get('npmAuthToken')) return 'Bearer ' + i.get('npmAuthToken')
          if (i.get('npmAuthIdent')) return 'Basic ' + i.get('npmAuthIdent')
          if (o && t !== u.BEST_EFFORT)
            throw new p.lk(f.b.AUTHENTICATION_NOT_FOUND, 'No authentication configured for request')
          return null
        }
        async function N() {
          if (process.env.TEST_ENV) return process.env.TEST_NPM_2FA_TOKEN || ''
          const { otp: e } = await (0, d.prompt)({
            type: 'password',
            name: 'otp',
            message: 'One-time password:',
            required: !0,
            onCancel: () => process.exit(130),
          })
          return e
        }
        function R(e) {
          if ('HTTPError' !== e.name) return !1
          try {
            return e.response.headers['www-authenticate']
              .split(/,\s*/)
              .map((e) => e.toLowerCase())
              .includes('otp')
          } catch (e) {
            return !1
          }
        }
        function K(e) {
          return { 'npm-otp': e }
        }
        !(function (e) {
          ;(e.FETCH_REGISTRY = 'npmRegistryServer'), (e.PUBLISH_REGISTRY = 'npmPublishRegistry')
        })(l || (l = {})),
          (function (e) {
            ;(e[(e.NO_AUTH = 0)] = 'NO_AUTH'),
              (e[(e.BEST_EFFORT = 1)] = 'BEST_EFFORT'),
              (e[(e.CONFIGURATION = 2)] = 'CONFIGURATION'),
              (e[(e.ALWAYS_AUTH = 3)] = 'ALWAYS_AUTH')
          })(u || (u = {}))
        class L {
          supports(e, t) {
            if (!e.reference.startsWith('npm:')) return !1
            const r = new C.URL(e.reference)
            return !!g().valid(r.pathname) && !r.searchParams.has('__archiveUrl')
          }
          getLocalPath(e, t) {
            return null
          }
          async fetch(e, t) {
            const r = t.checksums.get(e.locatorHash) || null,
              [n, i, o] = await t.cache.fetchPackageFromCache(e, r, {
                onHit: () => t.report.reportCacheHit(e),
                onMiss: () =>
                  t.report.reportCacheMiss(
                    e,
                    s.prettyLocator(t.project.configuration, e) +
                      " can't be found in the cache and will be fetched from the remote registry"
                  ),
                loader: () => this.fetchFromNetwork(e, t),
                skipIntegrityCheck: t.skipIntegrityCheck,
              })
            return { packageFs: n, releaseFs: i, prefixPath: s.getIdentVendorPath(e), checksum: o }
          }
          async fetchFromNetwork(e, t) {
            let r
            try {
              r = await D(L.getLocatorUrl(e), { configuration: t.project.configuration, ident: e })
            } catch (n) {
              r = await D(L.getLocatorUrl(e).replace(/%2f/g, '/'), {
                configuration: t.project.configuration,
                ident: e,
              })
            }
            return await a.convertToZip(r, {
              compressionLevel: t.project.configuration.get('compressionLevel'),
              prefixPath: s.getIdentVendorPath(e),
              stripComponents: 1,
            })
          }
          static isConventionalTarballUrl(e, t, { configuration: r }) {
            let n = m(e.scope, { configuration: r })
            const i = L.getLocatorUrl(e)
            return (
              (t = t.replace(/^https?:(\/\/(?:[^/]+\.)?npmjs.org(?:$|\/))/, 'https:$1')),
              (n = n.replace(/^https:\/\/registry\.npmjs\.org($|\/)/, 'https://registry.yarnpkg.com$1')),
              (t = t.replace(/^https:\/\/registry\.npmjs\.org($|\/)/, 'https://registry.yarnpkg.com$1')) === n + i ||
                t === n + i.replace(/%2f/g, '/')
            )
          }
          static getLocatorUrl(e) {
            const t = g().clean(e.reference.slice('npm:'.length))
            if (null === t)
              throw new p.lk(
                f.b.RESOLVER_NOT_FOUND,
                "The npm semver resolver got selected, but the version isn't semver"
              )
            return `${b(e)}/-/${e.name}-${t}.tgz`
          }
        }
        var x = r(46611),
          P = r(36545),
          T = r(32485)
        const O = s.makeIdent(null, 'node-gyp'),
          U = /\b(node-gyp|prebuild-install)\b/
        var j = r(52779)
        var Y = r(49881),
          G = r(76417),
          H = r(10129)
        async function J(e, t, { access: r, tag: n, registry: i }) {
          const o = e.project.configuration,
            A = e.manifest.name,
            a = e.manifest.version,
            c = s.stringifyIdent(A),
            g = (0, G.createHash)('sha1').update(t).digest('hex'),
            l = H.Sd(t).toString()
          void 0 === r &&
            (r =
              e.manifest.publishConfig && 'string' == typeof e.manifest.publishConfig.access
                ? e.manifest.publishConfig.access
                : null !== o.get('npmPublishAccess')
                ? o.get('npmPublishAccess')
                : A.scope
                ? 'restricted'
                : 'public')
          const u = await Y.packUtils.genPackageManifest(e),
            h = `${c}-${a}.tgz`,
            p = new C.URL(`${c}/-/${h}`, i)
          return {
            _id: c,
            _attachments: {
              [h]: {
                content_type: 'application/octet-stream',
                data: t.toString('base64'),
                length: t.length,
              },
            },
            name: c,
            access: r,
            'dist-tags': { [n]: a },
            versions: {
              [a]: {
                ...u,
                _id: `${c}@${a}`,
                name: c,
                version: a,
                dist: { shasum: g, integrity: l, tarball: p.toString() },
              },
            },
          }
        }
        const _ = {
            npmAlwaysAuth: {
              description: "URL of the selected npm registry (note: npm enterprise isn't supported)",
              type: A.a2.BOOLEAN,
              default: !1,
            },
            npmAuthIdent: {
              description: 'Authentication identity for the npm registry (_auth in npm and yarn v1)',
              type: A.a2.SECRET,
              default: null,
            },
            npmAuthToken: {
              description: 'Authentication token for the npm registry (_authToken in npm and yarn v1)',
              type: A.a2.SECRET,
              default: null,
            },
          },
          q = {
            npmPublishRegistry: {
              description: 'Registry to push packages to',
              type: A.a2.STRING,
              default: null,
            },
            npmRegistryServer: {
              description: "URL of the selected npm registry (note: npm enterprise isn't supported)",
              type: A.a2.STRING,
              default: 'https://registry.yarnpkg.com',
            },
          },
          z = {
            configuration: {
              ..._,
              ...q,
              npmScopes: {
                description: 'Settings per package scope',
                type: A.a2.MAP,
                valueDefinition: { description: '', type: A.a2.SHAPE, properties: { ..._, ...q } },
              },
              npmRegistries: {
                description: 'Settings per registry',
                type: A.a2.MAP,
                normalizeKeys: I,
                valueDefinition: { description: '', type: A.a2.SHAPE, properties: { ..._ } },
              },
            },
            fetchers: [
              class {
                supports(e, t) {
                  if (!e.reference.startsWith('npm:')) return !1
                  const { selector: r, params: n } = s.parseRange(e.reference)
                  return !!g().valid(r) && null !== n && 'string' == typeof n.__archiveUrl
                }
                getLocalPath(e, t) {
                  return null
                }
                async fetch(e, t) {
                  const r = t.checksums.get(e.locatorHash) || null,
                    [n, i, o] = await t.cache.fetchPackageFromCache(e, r, {
                      onHit: () => t.report.reportCacheHit(e),
                      onMiss: () =>
                        t.report.reportCacheMiss(
                          e,
                          s.prettyLocator(t.project.configuration, e) +
                            " can't be found in the cache and will be fetched from the remote server"
                        ),
                      loader: () => this.fetchFromNetwork(e, t),
                      skipIntegrityCheck: t.skipIntegrityCheck,
                    })
                  return {
                    packageFs: n,
                    releaseFs: i,
                    prefixPath: s.getIdentVendorPath(e),
                    checksum: o,
                  }
                }
                async fetchFromNetwork(e, t) {
                  const { params: r } = s.parseRange(e.reference)
                  if (null === r || 'string' != typeof r.__archiveUrl)
                    throw new Error('Assertion failed: The archiveUrl querystring parameter should have been available')
                  const n = await D(r.__archiveUrl, {
                    configuration: t.project.configuration,
                    ident: e,
                  })
                  return await a.convertToZip(n, {
                    compressionLevel: t.project.configuration.get('compressionLevel'),
                    prefixPath: s.getIdentVendorPath(e),
                    stripComponents: 1,
                  })
                }
              },
              L,
            ],
            resolvers: [
              class {
                supportsDescriptor(e, t) {
                  return !!e.range.startsWith('npm:') && !!s.tryParseDescriptor(e.range.slice('npm:'.length), !0)
                }
                supportsLocator(e, t) {
                  return !1
                }
                shouldPersistResolution(e, t) {
                  throw new Error('Unreachable')
                }
                bindDescriptor(e, t, r) {
                  return e
                }
                getResolutionDependencies(e, t) {
                  const r = s.parseDescriptor(e.range.slice('npm:'.length), !0)
                  return t.resolver.getResolutionDependencies(r, t)
                }
                async getCandidates(e, t, r) {
                  const n = s.parseDescriptor(e.range.slice('npm:'.length), !0)
                  return await r.resolver.getCandidates(n, t, r)
                }
                async getSatisfying(e, t, r) {
                  const n = s.parseDescriptor(e.range.slice('npm:'.length), !0)
                  return r.resolver.getSatisfying(n, t, r)
                }
                resolve(e, t) {
                  throw new Error('Unreachable')
                }
              },
              class {
                supportsDescriptor(e, t) {
                  return !!e.range.startsWith('npm:') && !!P.validRange(e.range.slice('npm:'.length))
                }
                supportsLocator(e, t) {
                  if (!e.reference.startsWith('npm:')) return !1
                  const { selector: r } = s.parseRange(e.reference)
                  return !!g().valid(r)
                }
                shouldPersistResolution(e, t) {
                  return !0
                }
                bindDescriptor(e, t, r) {
                  return e
                }
                getResolutionDependencies(e, t) {
                  return []
                }
                async getCandidates(e, t, r) {
                  const n = P.validRange(e.range.slice('npm:'.length))
                  if (null === n) throw new Error('Expected a valid range, got ' + e.range.slice('npm:'.length))
                  const i = await D(b(e), {
                      configuration: r.project.configuration,
                      ident: e,
                      jsonResponse: !0,
                    }),
                    o = Object.keys(i.versions)
                      .map((e) => new (g().SemVer)(e))
                      .filter((e) => n.test(e)),
                    A = o.filter((e) => !i.versions[e.raw].deprecated),
                    a = A.length > 0 ? A : o
                  return (
                    a.sort((e, t) => -e.compare(t)),
                    a.map((t) => {
                      const n = s.makeLocator(e, 'npm:' + t.raw),
                        o = i.versions[t.raw].dist.tarball
                      return L.isConventionalTarballUrl(n, o, {
                        configuration: r.project.configuration,
                      })
                        ? n
                        : s.bindLocator(n, { __archiveUrl: o })
                    })
                  )
                }
                async getSatisfying(e, t, r) {
                  const n = P.validRange(e.range.slice('npm:'.length))
                  if (null === n) throw new Error('Expected a valid range, got ' + e.range.slice('npm:'.length))
                  return t
                    .map((e) => {
                      try {
                        return new (g().SemVer)(e.slice('npm:'.length))
                      } catch (e) {
                        return null
                      }
                    })
                    .filter((e) => null !== e)
                    .filter((e) => n.test(e))
                    .sort((e, t) => -e.compare(t))
                    .map((t) => s.makeLocator(e, 'npm:' + t.raw))
                }
                async resolve(e, t) {
                  const { selector: r } = s.parseRange(e.reference),
                    n = g().clean(r)
                  if (null === n)
                    throw new p.lk(
                      f.b.RESOLVER_NOT_FOUND,
                      "The npm semver resolver got selected, but the version isn't semver"
                    )
                  const i = await D(b(e), {
                    configuration: t.project.configuration,
                    ident: e,
                    jsonResponse: !0,
                  })
                  if (!Object.prototype.hasOwnProperty.call(i, 'versions'))
                    throw new p.lk(f.b.REMOTE_INVALID, 'Registry returned invalid data for - missing "versions" field')
                  if (!Object.prototype.hasOwnProperty.call(i.versions, n))
                    throw new p.lk(f.b.REMOTE_NOT_FOUND, `Registry failed to return reference "${n}"`)
                  const o = new x.G()
                  if ((o.load(i.versions[n]), !o.dependencies.has(O.identHash) && !o.peerDependencies.has(O.identHash)))
                    for (const r of o.scripts.values())
                      if (r.match(U)) {
                        o.dependencies.set(O.identHash, s.makeDescriptor(O, 'latest')),
                          t.report.reportWarning(
                            f.b.NODE_GYP_INJECTED,
                            s.prettyLocator(t.project.configuration, e) +
                              ': Implicit dependencies on node-gyp are discouraged'
                          )
                        break
                      }
                  return (
                    'string' == typeof o.raw.deprecated &&
                      t.report.reportWarning(
                        f.b.DEPRECATED_PACKAGE,
                        `${s.prettyLocator(t.project.configuration, e)} is deprecated: ${o.raw.deprecated}`
                      ),
                    {
                      ...e,
                      version: n,
                      languageName: 'node',
                      linkType: T.U.HARD,
                      dependencies: o.dependencies,
                      peerDependencies: o.peerDependencies,
                      dependenciesMeta: o.dependenciesMeta,
                      peerDependenciesMeta: o.peerDependenciesMeta,
                      bin: o.bin,
                    }
                  )
                }
              },
              class {
                supportsDescriptor(e, t) {
                  return !!e.range.startsWith('npm:') && !!j.c.test(e.range.slice('npm:'.length))
                }
                supportsLocator(e, t) {
                  return !1
                }
                shouldPersistResolution(e, t) {
                  throw new Error('Unreachable')
                }
                bindDescriptor(e, t, r) {
                  return e
                }
                getResolutionDependencies(e, t) {
                  return []
                }
                async getCandidates(e, t, r) {
                  const n = e.range.slice('npm:'.length),
                    i = await D(b(e), {
                      configuration: r.project.configuration,
                      ident: e,
                      jsonResponse: !0,
                    })
                  if (!Object.prototype.hasOwnProperty.call(i, 'dist-tags'))
                    throw new p.lk(f.b.REMOTE_INVALID, 'Registry returned invalid data - missing "dist-tags" field')
                  const o = i['dist-tags']
                  if (!Object.prototype.hasOwnProperty.call(o, n))
                    throw new p.lk(f.b.REMOTE_NOT_FOUND, `Registry failed to return tag "${n}"`)
                  const A = o[n],
                    a = s.makeLocator(e, 'npm:' + A),
                    c = i.versions[A].dist.tarball
                  return L.isConventionalTarballUrl(a, c, { configuration: r.project.configuration })
                    ? [a]
                    : [s.bindLocator(a, { __archiveUrl: c })]
                }
                async getSatisfying(e, t, r) {
                  return null
                }
                async resolve(e, t) {
                  throw new Error('Unreachable')
                }
              },
            ],
          }
      },
      49881: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => U, packUtils: () => n })
        var n = {}
        r.r(n),
          r.d(n, {
            genPackList: () => N,
            genPackStream: () => M,
            genPackageManifest: () => F,
            hasPackScripts: () => S,
            prepareForPack: () => k,
          })
        var i = r(54143),
          o = r(35691),
          A = r(92659),
          s = r(36370),
          a = r(40822)
        class c extends a.Command {}
        ;(0, s.gn)([a.Command.String('--cwd', { hidden: !0 })], c.prototype, 'cwd', void 0)
        var g = r(46611),
          l = r(46009)
        class u extends a.UsageError {
          constructor(e, t) {
            super(
              `This command can only be run from within a workspace of your project (${l.y1.relative(
                e,
                t
              )} isn't a workspace of ${l.y1.join(e, g.G.fileName)}).`
            )
          }
        }
        r(63129), r(5864), r(35747)
        new Map([
          ['constraints', [['constraints', 'query'], ['constraints', 'source'], ['constraints']]],
          ['exec', []],
          ['interactive-tools', [['search'], ['upgrade-interactive']]],
          ['stage', [['stage']]],
          ['typescript', []],
          ['version', [['version', 'apply'], ['version', 'check'], ['version']]],
          [
            'workspace-tools',
            [
              ['workspaces', 'focus'],
              ['workspaces', 'foreach'],
            ],
          ],
        ])
        var h = r(71643),
          p = r(39922)
        ;(0, s.gn)(
          [a.Command.Path('--welcome')],
          class extends c {
            async execute() {
              const e = await p.VK.find(this.context.cwd, this.context.plugins)
              this.context.stdout.write(
                ((e) =>
                  `\n${h.pretty(
                    e,
                    'Welcome on Yarn 2!',
                    'bold'
                  )} 🎉 Thanks for helping us shape our vision of how projects\nshould be managed going forward.\n\nBeing still in RC, Yarn 2 isn't completely stable yet. Some features might be\nmissing, and some behaviors may have received major overhaul. In case of doubt,\nuse the following URLs to get some insight:\n\n  - The changelog:\n    ${h.pretty(
                    e,
                    'https://github.com/yarnpkg/berry/tree/CHANGELOG.md',
                    'cyan'
                  )}\n\n  - Our issue tracker:\n    ${h.pretty(
                    e,
                    'https://github.com/yarnpkg/berry',
                    'cyan'
                  )}\n\n  - Our Discord server:\n    ${h.pretty(
                    e,
                    'https://discord.gg/yarnpkg',
                    'cyan'
                  )}\n\nWe're hoping you will enjoy the experience. For now, a good start is to run\nthe two following commands:\n\n  ${h.pretty(
                    e,
                    'find . -name node_modules -prune -exec rm -r {} \\;',
                    'magenta'
                  )}\n  ${h.pretty(
                    e,
                    'yarn install',
                    'magenta'
                  )}\n\nOne last trick! If you need at some point to upgrade Yarn to a nightly build,\nthe following command will install the CLI straight from master:\n\n  ${h.pretty(
                    e,
                    'yarn set version from sources',
                    'magenta'
                  )}\n\nSee you later 👋\n`)(e).trim() + '\n'
              )
            }
          }.prototype,
          'execute',
          null
        )
        var f = r(85824),
          d = r(28148),
          C = r(33720),
          I = r(15815),
          E = r(43896),
          m = r(63088),
          B = r(10489),
          y = r(2401),
          w = r.n(y),
          Q = r(59938),
          v = r(78761)
        const b = [
            '/package.json',
            '/readme',
            '/readme.*',
            '/license',
            '/license.*',
            '/licence',
            '/licence.*',
            '/changelog',
            '/changelog.*',
          ],
          D = ['/package.tgz', '.github', '.git', '.hg', 'node_modules', '.npmignore', '.gitignore', '.#*', '.DS_Store']
        async function S(e) {
          return !!m.hasWorkspaceScript(e, 'prepack') || !!m.hasWorkspaceScript(e, 'postpack')
        }
        async function k(e, { report: t }, r) {
          await m.maybeExecuteWorkspaceLifecycleScript(e, 'prepack', { report: t })
          try {
            await r()
          } finally {
            await m.maybeExecuteWorkspaceLifecycleScript(e, 'postpack', { report: t })
          }
        }
        async function M(e, t) {
          var r, n
          void 0 === t && (t = await N(e))
          const i = new Set()
          for (const t of null !==
            (n = null === (r = e.manifest.publishConfig) || void 0 === r ? void 0 : r.executableFiles) && void 0 !== n
            ? n
            : new Set())
            i.add(l.y1.normalize(t))
          for (const t of e.manifest.bin.values()) i.add(l.y1.normalize(t))
          const o = Q.pack()
          process.nextTick(async () => {
            for (const r of t) {
              const t = l.y1.normalize(r),
                n = l.y1.resolve(e.cwd, t),
                A = l.y1.join('package', t),
                s = await E.xfs.lstatPromise(n),
                a = { name: A, mtime: new Date(3155328e5) },
                c = i.has(t) ? 493 : 420
              let g, u
              const h = new Promise((e, t) => {
                  ;(g = e), (u = t)
                }),
                p = (e) => {
                  e ? u(e) : g()
                }
              if (s.isFile()) {
                let r
                ;(r =
                  'package.json' === t
                    ? Buffer.from(JSON.stringify(await F(e), null, 2))
                    : await E.xfs.readFilePromise(n)),
                  o.entry({ ...a, mode: c, type: 'file' }, r, p)
              } else
                s.isSymbolicLink() &&
                  o.entry({ ...a, mode: c, type: 'symlink', linkname: await E.xfs.readlinkPromise(n) }, p)
              await h
            }
            o.finalize()
          })
          const A = (0, v.createGzip)()
          return o.pipe(A), A
        }
        async function F(e) {
          const t = JSON.parse(JSON.stringify(e.manifest.raw))
          return await e.project.configuration.triggerHook((e) => e.beforeWorkspacePacking, e, t), t
        }
        async function N(e) {
          var t, r, n, i, o, A, s, a
          const c = e.project,
            g = c.configuration,
            u = { accept: [], reject: [] }
          for (const e of D) u.reject.push(e)
          for (const e of b) u.accept.push(e)
          u.reject.push(g.get('rcFilename'))
          const h = (t) => {
            if (null === t || !t.startsWith(e.cwd + '/')) return
            const r = l.y1.relative(e.cwd, t),
              n = l.y1.resolve(l.LZ.root, r)
            u.reject.push(n)
          }
          h(l.y1.resolve(c.cwd, g.get('lockfileFilename'))),
            h(g.get('bstatePath')),
            h(g.get('cacheFolder')),
            h(g.get('globalFolder')),
            h(g.get('installStatePath')),
            h(g.get('virtualFolder')),
            h(g.get('yarnPath')),
            await g.triggerHook(
              (e) => e.populateYarnPaths,
              c,
              (e) => {
                h(e)
              }
            )
          for (const t of c.workspaces) {
            const r = l.y1.relative(e.cwd, t.cwd)
            '' === r || r.match(/^(\.\.)?\//) || u.reject.push('/' + r)
          }
          const p = { accept: [], reject: [] },
            f =
              null !== (r = null === (t = e.manifest.publishConfig) || void 0 === t ? void 0 : t.main) && void 0 !== r
                ? r
                : e.manifest.main,
            d =
              null !== (i = null === (n = e.manifest.publishConfig) || void 0 === n ? void 0 : n.module) && void 0 !== i
                ? i
                : e.manifest.module,
            C =
              null !== (A = null === (o = e.manifest.publishConfig) || void 0 === o ? void 0 : o.browser) &&
              void 0 !== A
                ? A
                : e.manifest.browser,
            I =
              null !== (a = null === (s = e.manifest.publishConfig) || void 0 === s ? void 0 : s.bin) && void 0 !== a
                ? a
                : e.manifest.bin
          null != f && p.accept.push(l.y1.resolve(l.LZ.root, f)),
            null != d && p.accept.push(l.y1.resolve(l.LZ.root, d)),
            'string' == typeof C && p.accept.push(l.y1.resolve(l.LZ.root, C))
          for (const e of I.values()) p.accept.push(l.y1.resolve(l.LZ.root, e))
          if (C instanceof Map)
            for (const [e, t] of C.entries())
              p.accept.push(l.y1.resolve(l.LZ.root, e)),
                'string' == typeof t && p.accept.push(l.y1.resolve(l.LZ.root, t))
          const E = null !== e.manifest.files
          if (E) {
            p.reject.push('/*')
            for (const t of e.manifest.files) K(p.accept, t, { cwd: l.LZ.root })
          }
          return await (async function (e, { hasExplicitFileList: t, globalList: r, ignoreList: n }) {
            const i = [],
              o = new B.n(e),
              A = [[l.LZ.root, [n]]]
            for (; A.length > 0; ) {
              const [e, n] = A.pop(),
                s = await o.lstatPromise(e)
              if (!L(e, { globalList: r, ignoreLists: s.isDirectory() ? null : n }))
                if (s.isDirectory()) {
                  const i = await o.readdirPromise(e)
                  let s = !1,
                    a = !1
                  if (!t || e !== l.LZ.root)
                    for (const e of i) (s = s || '.gitignore' === e), (a = a || '.npmignore' === e)
                  const c = a ? await R(o, e, '.npmignore') : s ? await R(o, e, '.gitignore') : null
                  let g = null !== c ? [c].concat(n) : n
                  L(e, { globalList: r, ignoreLists: n }) && (g = [...n, { accept: [], reject: ['**/*'] }])
                  for (const t of i) A.push([l.y1.resolve(e, t), g])
                } else i.push(l.y1.relative(l.LZ.root, e))
            }
            return i.sort()
          })(e.cwd, { hasExplicitFileList: E, globalList: u, ignoreList: p })
        }
        async function R(e, t, r) {
          const n = { accept: [], reject: [] },
            i = await e.readFilePromise(l.y1.join(t, r), 'utf8')
          for (const e of i.split(/\n/g)) K(n.reject, e, { cwd: t })
          return n
        }
        function K(e, t, { cwd: r }) {
          const n = t.trim()
          '' !== n &&
            '#' !== n[0] &&
            e.push(
              (function (e, { cwd: t }) {
                const r = '!' === e[0]
                return r && (e = e.slice(1)), e.match(/\.{0,1}\//) && (e = l.y1.resolve(t, e)), r && (e = '!' + e), e
              })(n, { cwd: r })
            )
        }
        function L(e, { globalList: t, ignoreLists: r }) {
          if (x(e, t.accept)) return !1
          if (x(e, t.reject)) return !0
          if (null !== r)
            for (const t of r) {
              if (x(e, t.accept)) return !1
              if (x(e, t.reject)) return !0
            }
          return !1
        }
        function x(e, t) {
          let r = t
          const n = []
          for (let e = 0; e < t.length; ++e)
            '!' !== t[e][0] ? r !== t && r.push(t[e]) : (r === t && (r = t.slice(0, e)), n.push(t[e].slice(1)))
          return !P(e, n) && !!P(e, r)
        }
        function P(e, t) {
          let r = t
          const n = []
          for (let e = 0; e < t.length; ++e)
            t[e].includes('/') ? r !== t && r.push(t[e]) : (r === t && (r = t.slice(0, e)), n.push(t[e]))
          return (
            !!w().isMatch(e, r, { dot: !0, nocase: !0 }) || !!w().isMatch(e, n, { dot: !0, basename: !0, nocase: !0 })
          )
        }
        class T extends c {
          constructor() {
            super(...arguments), (this.installIfNeeded = !1), (this.dryRun = !1), (this.json = !1)
          }
          async execute() {
            const e = await p.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await f.I.find(e, this.context.cwd)
            if (!r) throw new u(t.cwd, this.context.cwd)
            ;(await S(r)) &&
              (this.installIfNeeded
                ? await t.install({ cache: await d.C.find(e), report: new C.$() })
                : await t.restoreInstallState())
            const n =
              void 0 !== this.out
                ? l.y1.resolve(
                    this.context.cwd,
                    (function (e, { workspace: t }) {
                      const r = e
                        .replace(
                          '%s',
                          (function (e) {
                            return null !== e.manifest.name ? i.slugifyIdent(e.manifest.name) : 'package'
                          })(t)
                        )
                        .replace(
                          '%v',
                          (function (e) {
                            return null !== e.manifest.version ? e.manifest.version : 'unknown'
                          })(t)
                        )
                      return l.cS.toPortablePath(r)
                    })(this.out, { workspace: r })
                  )
                : l.y1.resolve(r.cwd, 'package.tgz')
            return (
              await I.Pk.start({ configuration: e, stdout: this.context.stdout, json: this.json }, async (t) => {
                await k(r, { report: t }, async () => {
                  t.reportJson({ base: r.cwd })
                  const e = await N(r)
                  for (const r of e) t.reportInfo(null, r), t.reportJson({ location: r })
                  if (!this.dryRun) {
                    const t = await M(r, e),
                      i = E.xfs.createWriteStream(n)
                    t.pipe(i),
                      await new Promise((e) => {
                        i.on('finish', e)
                      })
                  }
                }),
                  this.dryRun ||
                    (t.reportInfo(A.b.UNNAMED, 'Package archive generated in ' + h.pretty(e, n, h.Type.PATH)),
                    t.reportJson({ output: n }))
              })
            ).exitCode()
          }
        }
        ;(T.usage = a.Command.Usage({
          description: 'generate a tarball from the active workspace',
          details:
            '\n      This command will turn the active workspace into a compressed archive suitable for publishing. The archive will by default be stored at the root of the workspace (`package.tgz`).\n\n      If the `-o,---out` is set the archive will be created at the specified path. The `%s` and `%v` variables can be used within the path and will be respectively replaced by the package name and version.\n    ',
          examples: [
            ['Create an archive from the active workspace', 'yarn pack'],
            ["List the files that would be made part of the workspace's archive", 'yarn pack --dry-run'],
            ['Name and output the archive in a dedicated folder', 'yarn pack --out /artifacts/%s-%v.tgz'],
          ],
        })),
          (0, s.gn)(
            [
              a.Command.Boolean('--install-if-needed', {
                description: 'Run a preliminary `yarn install` if the package contains build scripts',
              }),
            ],
            T.prototype,
            'installIfNeeded',
            void 0
          ),
          (0, s.gn)(
            [
              a.Command.Boolean('-n,--dry-run', {
                description: 'Print the file paths without actually generating the package archive',
              }),
            ],
            T.prototype,
            'dryRun',
            void 0
          ),
          (0, s.gn)(
            [a.Command.Boolean('--json', { description: 'Format the output as an NDJSON stream' })],
            T.prototype,
            'json',
            void 0
          ),
          (0, s.gn)(
            [
              a.Command.String('--filename', {
                hidden: !1,
                description: 'Create the archive at the specified path',
              }),
              a.Command.String('-o,--out', { description: 'Create the archive at the specified path' }),
            ],
            T.prototype,
            'out',
            void 0
          ),
          (0, s.gn)([a.Command.Path('pack')], T.prototype, 'execute', null)
        const O = ['dependencies', 'devDependencies', 'peerDependencies'],
          U = {
            hooks: {
              beforeWorkspacePacking: (e, t) => {
                t.publishConfig &&
                  (t.publishConfig.main && (t.main = t.publishConfig.main),
                  t.publishConfig.browser && (t.browser = t.publishConfig.browser),
                  t.publishConfig.module && (t.module = t.publishConfig.module),
                  t.publishConfig.browser && (t.browser = t.publishConfig.browser),
                  t.publishConfig.bin && (t.bin = t.publishConfig.bin))
                const r = e.project
                for (const n of O)
                  for (const s of e.manifest.getForScope(n).values()) {
                    const e = r.tryWorkspaceByDescriptor(s),
                      a = i.parseRange(s.range)
                    if ('workspace:' === a.protocol)
                      if (null === e) {
                        if (null === r.tryWorkspaceByIdent(s))
                          throw new o.lk(
                            A.b.WORKSPACE_NOT_FOUND,
                            i.prettyDescriptor(r.configuration, s) + ': No local workspace found for this range'
                          )
                      } else {
                        let r
                        ;(r =
                          i.areDescriptorsEqual(s, e.anchoredDescriptor) || '*' === a.selector
                            ? e.manifest.version
                            : a.selector),
                          (t[n][i.stringifyIdent(s)] = r)
                      }
                  }
              },
            },
            commands: [T],
          }
      },
      29936: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => re, patchUtils: () => n })
        var n = {}
        r.r(n),
          r.d(n, {
            applyPatchFile: () => S,
            diffFolders: () => H,
            extractPackageToDisk: () => G,
            isParentRequired: () => j,
            loadPatchFiles: () => Y,
            makeDescriptor: () => T,
            makeLocator: () => O,
            parseDescriptor: () => L,
            parseLocator: () => x,
            parsePatchFile: () => v,
          })
        var i = r(39922),
          o = r(35691),
          A = r(92659),
          s = r(54143),
          a = r(73632),
          c = r(43896),
          g = r(46009),
          l = r(90739),
          u = r(75448),
          h = r(65281),
          p = r(33720),
          f = r(6220),
          d = r(36545),
          C = r(78420)
        class I extends Error {
          constructor(e, t) {
            super('Cannot apply hunk #' + (e + 1)), (this.hunk = t)
          }
        }
        const E = /^@@ -(\d+)(,(\d+))? \+(\d+)(,(\d+))? @@.*/
        function m(e) {
          return g.y1.relative(g.LZ.root, g.y1.resolve(g.LZ.root, g.cS.toPortablePath(e)))
        }
        function B(e) {
          const t = e.trim().match(E)
          if (!t) throw new Error(`Bad header line: '${e}'`)
          return {
            original: { start: Math.max(Number(t[1]), 1), length: Number(t[3] || 1) },
            patched: { start: Math.max(Number(t[4]), 1), length: Number(t[6] || 1) },
          }
        }
        var y
        !(function (e) {
          ;(e.Context = 'context'), (e.Insertion = 'insertion'), (e.Deletion = 'deletion')
        })(y || (y = {}))
        const w = {
          '@': 'header',
          '-': y.Deletion,
          '+': y.Insertion,
          ' ': y.Context,
          '\\': 'pragma',
          undefined: y.Context,
        }
        function Q(e) {
          const t = 511 & parseInt(e, 8)
          if (420 !== t && 493 !== t) throw new Error('Unexpected file mode string: ' + e)
          return t
        }
        function v(e) {
          const t = e.split(/\n/g)
          return (
            '' === t[t.length - 1] && t.pop(),
            (function (e) {
              const t = []
              for (const r of e) {
                const {
                    semverExclusivity: e,
                    diffLineFromPath: n,
                    diffLineToPath: i,
                    oldMode: o,
                    newMode: A,
                    deletedFileMode: s,
                    newFileMode: c,
                    renameFrom: g,
                    renameTo: l,
                    beforeHash: u,
                    afterHash: h,
                    fromPath: p,
                    toPath: f,
                    hunks: d,
                  } = r,
                  C = g
                    ? 'rename'
                    : s
                    ? 'file deletion'
                    : c
                    ? 'file creation'
                    : d && d.length > 0
                    ? 'patch'
                    : 'mode change'
                let I = null
                switch (C) {
                  case 'rename':
                    if (!g || !l) throw new Error('Bad parser state: rename from & to not given')
                    t.push({ type: 'rename', semverExclusivity: e, fromPath: m(g), toPath: m(l) }), (I = l)
                    break
                  case 'file deletion':
                    {
                      const r = n || p
                      if (!r) throw new Error('Bad parse state: no path given for file deletion')
                      t.push({
                        type: 'file deletion',
                        semverExclusivity: e,
                        hunk: (d && d[0]) || null,
                        path: m(r),
                        mode: Q(s),
                        hash: u,
                      })
                    }
                    break
                  case 'file creation':
                    {
                      const r = i || f
                      if (!r) throw new Error('Bad parse state: no path given for file creation')
                      t.push({
                        type: 'file creation',
                        semverExclusivity: e,
                        hunk: (d && d[0]) || null,
                        path: m(r),
                        mode: Q(c),
                        hash: h,
                      })
                    }
                    break
                  case 'patch':
                  case 'mode change':
                    I = f || i
                    break
                  default:
                    a.assertNever(C)
                }
                I &&
                  o &&
                  A &&
                  o !== A &&
                  t.push({
                    type: 'mode change',
                    semverExclusivity: e,
                    path: m(I),
                    oldMode: Q(o),
                    newMode: Q(A),
                  }),
                  I &&
                    d &&
                    d.length &&
                    t.push({
                      type: 'patch',
                      semverExclusivity: e,
                      path: m(I),
                      hunks: d,
                      beforeHash: u,
                      afterHash: h,
                    })
              }
              return t
            })(
              (function (e) {
                const t = []
                let r = {
                    semverExclusivity: null,
                    diffLineFromPath: null,
                    diffLineToPath: null,
                    oldMode: null,
                    newMode: null,
                    deletedFileMode: null,
                    newFileMode: null,
                    renameFrom: null,
                    renameTo: null,
                    beforeHash: null,
                    afterHash: null,
                    fromPath: null,
                    toPath: null,
                    hunks: null,
                  },
                  n = 'parsing header',
                  i = null,
                  o = null
                function A() {
                  i && (o && (i.parts.push(o), (o = null)), r.hunks.push(i), (i = null))
                }
                function s() {
                  A(),
                    t.push(r),
                    (r = {
                      semverExclusivity: null,
                      diffLineFromPath: null,
                      diffLineToPath: null,
                      oldMode: null,
                      newMode: null,
                      deletedFileMode: null,
                      newFileMode: null,
                      renameFrom: null,
                      renameTo: null,
                      beforeHash: null,
                      afterHash: null,
                      fromPath: null,
                      toPath: null,
                      hunks: null,
                    })
                }
                for (let t = 0; t < e.length; t++) {
                  const c = e[t]
                  if ('parsing header' === n)
                    if (c.startsWith('@@')) (n = 'parsing hunks'), (r.hunks = []), (t -= 1)
                    else if (c.startsWith('diff --git ')) {
                      r && r.diffLineFromPath && s()
                      const e = c.match(/^diff --git a\/(.*?) b\/(.*?)\s*$/)
                      if (!e) throw new Error('Bad diff line: ' + c)
                      ;(r.diffLineFromPath = e[1]), (r.diffLineToPath = e[2])
                    } else if (c.startsWith('old mode ')) r.oldMode = c.slice('old mode '.length).trim()
                    else if (c.startsWith('new mode ')) r.newMode = c.slice('new mode '.length).trim()
                    else if (c.startsWith('deleted file mode '))
                      r.deletedFileMode = c.slice('deleted file mode '.length).trim()
                    else if (c.startsWith('new file mode ')) r.newFileMode = c.slice('new file mode '.length).trim()
                    else if (c.startsWith('rename from ')) r.renameFrom = c.slice('rename from '.length).trim()
                    else if (c.startsWith('rename to ')) r.renameTo = c.slice('rename to '.length).trim()
                    else if (c.startsWith('index ')) {
                      const e = c.match(/(\w+)\.\.(\w+)/)
                      if (!e) continue
                      ;(r.beforeHash = e[1]), (r.afterHash = e[2])
                    } else
                      c.startsWith('semver exclusivity ')
                        ? (r.semverExclusivity = c.slice('semver exclusivity '.length).trim())
                        : c.startsWith('--- ')
                        ? (r.fromPath = c.slice('--- a/'.length).trim())
                        : c.startsWith('+++ ') && (r.toPath = c.slice('+++ b/'.length).trim())
                  else {
                    const e = w[c[0]] || null
                    switch (e) {
                      case 'header':
                        A(), (i = { header: B(c), parts: [] })
                        break
                      case null:
                        ;(n = 'parsing header'), s(), (t -= 1)
                        break
                      case 'pragma':
                        if (!c.startsWith('\\ No newline at end of file'))
                          throw new Error('Unrecognized pragma in patch file: ' + c)
                        if (!o)
                          throw new Error('Bad parser state: No newline at EOF pragma encountered without context')
                        o.noNewlineAtEndOfFile = !0
                        break
                      case y.Context:
                      case y.Deletion:
                      case y.Insertion:
                        if (!i) throw new Error('Bad parser state: Hunk lines encountered before hunk header')
                        o && o.type !== e && (i.parts.push(o), (o = null)),
                          o || (o = { type: e, lines: [], noNewlineAtEndOfFile: !1 }),
                          o.lines.push(c.slice(1))
                        break
                      default:
                        a.assertNever(e)
                    }
                  }
                }
                s()
                for (const { hunks: e } of t) if (e) for (const t of e) b(t)
                return t
              })(t)
            )
          )
        }
        function b(e) {
          let t = 0,
            r = 0
          for (const { type: n, lines: i } of e.parts)
            switch (n) {
              case y.Context:
                ;(r += i.length), (t += i.length)
                break
              case y.Deletion:
                t += i.length
                break
              case y.Insertion:
                r += i.length
                break
              default:
                a.assertNever(n)
            }
          if (t !== e.header.original.length || r !== e.header.patched.length) {
            const n = (e) => (e < 0 ? e : '+' + e)
            throw new Error(
              `hunk header integrity check failed (expected @@ ${n(e.header.original.length)} ${n(
                e.header.patched.length
              )} @@, got @@ ${n(t)} ${n(r)} @@)`
            )
          }
        }
        async function D(e, t, r) {
          const n = await e.lstatPromise(t),
            i = await r()
          if ((void 0 !== i && (t = i), e.lutimesPromise)) await e.lutimesPromise(t, n.atime, n.mtime)
          else {
            if (n.isSymbolicLink()) throw new Error('Cannot preserve the time values of a symlink')
            await e.utimesPromise(t, n.atime, n.mtime)
          }
        }
        async function S(e, { baseFs: t = new C.S(), dryRun: r = !1, version: n = null } = {}) {
          for (const i of e)
            if (null === i.semverExclusivity || null === n || d.satisfiesWithPrereleases(n, i.semverExclusivity))
              switch (i.type) {
                case 'file deletion':
                  if (r) {
                    if (!t.existsSync(i.path)) throw new Error("Trying to delete a file that doesn't exist: " + i.path)
                  } else
                    await D(t, g.y1.dirname(i.path), async () => {
                      await t.unlinkPromise(i.path)
                    })
                  break
                case 'rename':
                  if (r) {
                    if (!t.existsSync(i.fromPath))
                      throw new Error("Trying to move a file that doesn't exist: " + i.fromPath)
                  } else
                    await D(t, g.y1.dirname(i.fromPath), async () => {
                      await D(t, g.y1.dirname(i.toPath), async () => {
                        await D(t, i.fromPath, async () => (await t.movePromise(i.fromPath, i.toPath), i.toPath))
                      })
                    })
                  break
                case 'file creation':
                  if (r) {
                    if (t.existsSync(i.path)) throw new Error('Trying to create a file that already exists: ' + i.path)
                  } else {
                    const e = i.hunk
                      ? i.hunk.parts[0].lines.join('\n') + (i.hunk.parts[0].noNewlineAtEndOfFile ? '' : '\n')
                      : ''
                    await t.mkdirpPromise(g.y1.dirname(i.path), {
                      chmod: 493,
                      utimes: [315532800, 315532800],
                    }),
                      await t.writeFilePromise(i.path, e, { mode: i.mode }),
                      await t.utimesPromise(i.path, 315532800, 315532800)
                  }
                  break
                case 'patch':
                  await D(t, i.path, async () => {
                    await F(i, { baseFs: t, dryRun: r })
                  })
                  break
                case 'mode change':
                  {
                    const e = (await t.statPromise(i.path)).mode
                    if (k(i.newMode) !== k(e)) continue
                    await D(t, i.path, async () => {
                      await t.chmodPromise(i.path, i.newMode)
                    })
                  }
                  break
                default:
                  a.assertNever(i)
              }
        }
        function k(e) {
          return (64 & e) > 0
        }
        function M(e) {
          return e.replace(/\s+$/, '')
        }
        async function F({ hunks: e, path: t }, { baseFs: r, dryRun: n = !1 }) {
          const i = await r.statSync(t).mode,
            o = (await r.readFileSync(t, 'utf8')).split(/\n/),
            A = []
          let s = 0,
            c = 0
          for (const t of e) {
            const r = Math.max(c, t.header.patched.start + s),
              n = Math.max(0, r - c),
              i = Math.max(0, o.length - r - t.header.original.length),
              a = Math.max(n, i)
            let g = 0,
              l = 0,
              u = null
            for (; g <= a; ) {
              if (g <= n && ((l = r - g), (u = N(t, o, l)), null !== u)) {
                g = -g
                break
              }
              if (g <= i && ((l = r + g), (u = N(t, o, l)), null !== u)) break
              g += 1
            }
            if (null === u) throw new I(e.indexOf(t), t)
            A.push(u), (s += g), (c = l + t.header.original.length)
          }
          if (n) return
          let g = 0
          for (const e of A)
            for (const t of e)
              switch (t.type) {
                case 'splice':
                  {
                    const e = t.index + g
                    o.splice(e, t.numToDelete, ...t.linesToInsert), (g += t.linesToInsert.length - t.numToDelete)
                  }
                  break
                case 'pop':
                  o.pop()
                  break
                case 'push':
                  o.push(t.line)
                  break
                default:
                  a.assertNever(t)
              }
          await r.writeFilePromise(t, o.join('\n'), { mode: i })
        }
        function N(e, t, r) {
          const n = []
          for (const o of e.parts)
            switch (o.type) {
              case y.Context:
              case y.Deletion:
                for (const e of o.lines) {
                  const n = t[r]
                  if (null == n || ((i = e), M(n) !== M(i))) return null
                  r += 1
                }
                o.type === y.Deletion &&
                  (n.push({
                    type: 'splice',
                    index: r - o.lines.length,
                    numToDelete: o.lines.length,
                    linesToInsert: [],
                  }),
                  o.noNewlineAtEndOfFile && n.push({ type: 'push', line: '' }))
                break
              case y.Insertion:
                n.push({ type: 'splice', index: r, numToDelete: 0, linesToInsert: o.lines }),
                  o.noNewlineAtEndOfFile && n.push({ type: 'pop' })
                break
              default:
                a.assertNever(o.type)
            }
          var i
          return n
        }
        const R = /^builtin<([^>]+)>$/
        function K(e, t) {
          const { source: r, selector: n, params: i } = s.parseRange(e)
          if (null === r) throw new Error('Patch locators must explicitly define their source')
          const o = n ? n.split(/&/).map((e) => g.cS.toPortablePath(e)) : [],
            A = i && 'string' == typeof i.locator ? s.parseLocator(i.locator) : null,
            a = i && 'string' == typeof i.version ? i.version : null
          return { parentLocator: A, sourceItem: t(r), patchPaths: o, sourceVersion: a }
        }
        function L(e) {
          const { sourceItem: t, ...r } = K(e.range, s.parseDescriptor)
          return { ...r, sourceDescriptor: t }
        }
        function x(e) {
          const { sourceItem: t, ...r } = K(e.reference, s.parseLocator)
          return { ...r, sourceLocator: t }
        }
        function P({ parentLocator: e, sourceItem: t, patchPaths: r, sourceVersion: n, patchHash: i }, o) {
          const A = null !== e ? { locator: s.stringifyLocator(e) } : {},
            a = void 0 !== n ? { version: n } : {},
            c = void 0 !== i ? { hash: i } : {}
          return s.makeRange({
            protocol: 'patch:',
            source: o(t),
            selector: r.join('&'),
            params: { ...a, ...c, ...A },
          })
        }
        function T(e, { parentLocator: t, sourceDescriptor: r, patchPaths: n }) {
          return s.makeLocator(e, P({ parentLocator: t, sourceItem: r, patchPaths: n }, s.stringifyDescriptor))
        }
        function O(e, { parentLocator: t, sourcePackage: r, patchPaths: n, patchHash: i }) {
          return s.makeLocator(
            e,
            P(
              { parentLocator: t, sourceItem: r, sourceVersion: r.version, patchPaths: n, patchHash: i },
              s.stringifyLocator
            )
          )
        }
        function U({ onAbsolute: e, onRelative: t, onBuiltin: r }, n) {
          const i = n.match(R)
          return null !== i ? r(i[1]) : g.y1.isAbsolute(n) ? e(n) : t(n)
        }
        function j(e) {
          return U({ onAbsolute: () => !1, onRelative: () => !0, onBuiltin: () => !1 }, e)
        }
        async function Y(e, t, r) {
          const n = null !== e ? await r.fetcher.fetch(e, r) : null,
            i =
              n && n.localPath
                ? { packageFs: new u.M(g.LZ.root), prefixPath: g.y1.relative(g.LZ.root, n.localPath) }
                : n
          n && n !== i && n.releaseFs && n.releaseFs()
          return (
            await a.releaseAfterUseAsync(
              async () =>
                await Promise.all(
                  t.map(async (e) =>
                    U(
                      {
                        onAbsolute: async () => await c.xfs.readFilePromise(e, 'utf8'),
                        onRelative: async () => {
                          if (null === n)
                            throw new Error('Assertion failed: The parent locator should have been fetched')
                          return await n.packageFs.readFilePromise(e, 'utf8')
                        },
                        onBuiltin: async (e) =>
                          await r.project.configuration.firstHook((e) => e.getBuiltinPatch, r.project, e),
                      },
                      e
                    )
                  )
                )
            )
          ).map((e) => ('string' == typeof e ? e.replace(/\r\n?/g, '\n') : e))
        }
        async function G(e, { cache: t, project: r }) {
          const n = r.storedChecksums,
            i = new p.$(),
            o = r.configuration.makeFetcher(),
            A = await o.fetch(e, { cache: t, project: r, fetcher: o, checksums: n, report: i }),
            a = await c.xfs.mktempPromise()
          return (
            await c.xfs.copyPromise(a, A.prefixPath, { baseFs: A.packageFs }),
            await c.xfs.writeJsonPromise(g.y1.join(a, '.yarn-patch.json'), {
              locator: s.stringifyLocator(e),
            }),
            c.xfs.detachTemp(a),
            a
          )
        }
        async function H(e, t) {
          const r = g.cS.fromPortablePath(e).replace(/\\/g, '/'),
            n = g.cS.fromPortablePath(t).replace(/\\/g, '/'),
            { stdout: i } = await f.execvp(
              'git',
              ['diff', '--src-prefix=a/', '--dst-prefix=b/', '--ignore-cr-at-eol', '--full-index', '--no-index', r, n],
              { cwd: g.cS.toPortablePath(process.cwd()) }
            ),