      25545: e => {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        (t.keys = () => []), (t.resolve = t), (t.id = 25545), (e.exports = t);
        'use strict';
        r.r(t), r.d(t, { default: () => g });
        var n = r(54143);
            [
              '@samverschueren/stream-to-observable@*',
              { peerDependenciesMeta: { rxjs: i, zenObservable: i } }
            ],
            [
              'got@<11',
              { dependencies: { '@types/responselike': '^1.0.0', '@types/keyv': '^3.1.1' } }
            ],
                  'vscode-languageserver-protocol': '^3.15.0'
                }
              }
                  'postcss-scss': i
                }
              }
            ],
            [
              'jss-plugin-rule-value-function@<=10.1.1',
              { dependencies: { 'tiny-warning': '^1.0.2' } }
            [
              'useragent@^2.0.0',
              { dependencies: { request: '^2.88.0', yamlparser: '0.0.x', semver: '5.5.x' } }
            ],
            [
              '@apollographql/apollo-tools@*',
              { peerDependencies: { graphql: '^14.2.1 || ^15.0.0' } }
            ],
                peerDependenciesMeta: { eslint: i }
              }
            ],
            [
              'rc-animate@*',
              {
                peerDependencies: { react: '^15.0.0 || ^16.0.0', 'react-dom': '^15.0.0 || ^16.0.0' }
              }
            [
              'react-draggable@<=4.4.3',
              { peerDependencies: { react: '>= 16.3.0', 'react-dom': '>= 16.3.0' } }
            ]
          ];
        let A, s, a;
                );
              }
                );
              }
                );
              }
            ]
                for (const [e, r] of o) t(n.parseDescriptor(e, !0), r);
                var r;
                if (!t.startsWith('compat/')) return;
                  o = null === (r = c.get(i.identHash)) || void 0 === r ? void 0 : r();
                return void 0 !== o ? o : null;
                        params: null
                    )
            }
          };
        'use strict';
        r.r(t), r.d(t, { default: () => p });
          A = r(40822);
            super(...arguments), (this.quiet = !1), (this.args = []);
            const e = [];
            this.pkg && e.push('--package', this.pkg), this.quiet && e.push('--quiet');
              r = o.makeIdent(t.scope, 'create-' + t.name);
            return this.cli.run(['dlx', ...e, o.stringifyIdent(r), ...this.args]);
        (0, n.gn)(
          [
            A.Command.String('-p,--package', {
              description: 'The package to run the provided command from'
            })
          ],
                description: 'Only report critical errors instead of printing the full install logs'
              })
          (0, n.gn)([A.Command.Path('create')], s.prototype, 'execute', null);
          u = r(46009);
            super(...arguments), (this.quiet = !1), (this.args = []);
              await l.xfs.mktempPromise(async e => {
                const t = u.y1.join(e, 'dlx-' + process.pid);
                  await l.xfs.writeFilePromise(u.y1.join(t, 'yarn.lock'), '');
                  A = null !== n ? u.y1.join(n, '.yarnrc.yml') : null;
                    await a.VK.updateConfiguration(t, e => {
                      const t = { ...e, enableGlobalCache: !0, enableTelemetry: !1 };
                          (t.plugins = e.plugins.map(e => {
                              r = u.cS.isAbsolute(t)
                                ? t
                                : u.cS.resolve(u.cS.fromPortablePath(n), t);
                            return 'string' == typeof e ? r : { path: r, spec: e.spec };
                      );
                  : await l.xfs.writeFilePromise(
                      r,
                      'enableGlobalCache: true\nenableTelemetry: false\n'
                    );
                  p = await this.cli.run(['add', '--', ...s], { cwd: t, quiet: this.quiet });
                if (0 !== p) return p;
                this.quiet || this.context.stdout.write('\n');
                  { project: d, workspace: C } = await c.I.find(f, t);
                if (null === C) throw new i.WorkspaceRequiredError(d.cwd, t);
                    stderr: this.context.stderr
                );
            );
        (h.usage = A.Command.Usage({
          examples: [
            ['Use create-react-app to create a new React app', 'yarn dlx create-react-app ./my-app']
          ]
                description: 'The package to run the provided command from'
              })
                description: 'Only report critical errors instead of printing the full install logs'
              })
          (0, n.gn)([A.Command.Path('dlx')], h.prototype, 'execute', null);
        const p = { commands: [s, h] };
        'use strict';
        r.r(t), r.d(t, { dedupeUtils: () => n, default: () => ze, suggestUtils: () => n });
        var n = {};
            getSuggestedDescriptors: () => F
          });
          Q = r.n(w);
            : t.configuration.get('defaultSemverRangePrefix');
          (e.REGULAR = 'dependencies'),
            (e.DEVELOPMENT = 'devDependencies'),
            (e.PEER = 'peerDependencies');
            (e.CARET = '^'), (e.TILDE = '~'), (e.EXACT = '');
            (e.KEEP = 'keep'),
              (e.REUSE = 'reuse'),
              (e.PROJECT = 'project'),
              (e.LATEST = 'latest'),
              (e.CACHE = 'cache');
          })(A || (A = {}));
        const b = /^([\^~]?)[0-9]+(?:\.[0-9]+){0,2}(?:-\S+)?$/;
          const r = e.match(b);
          return r ? r[1] : t.configuration.get('defaultSemverRangePrefix');
          let { protocol: r, source: n, params: i, selector: o } = f.parseRange(e.range);
          );
            o = e => {
              let t = n.get(e.descriptorHash);
              return t || n.set(e.descriptorHash, (t = { descriptor: e, locators: [] })), t;
            };
              const t = n.manifest.peerDependencies.get(e.identHash);
              void 0 !== t && o(t).locators.push(n.locator);
                A = n.manifest.devDependencies.get(e.identHash);
                : void 0 !== A && o(A).locators.push(n.locator);
          return n;
            return await B.xfs.mktempPromise(async t => {
              const r = s.VK.create(t);
              );
            });
          })(async n => {
            y.y1.isAbsolute(e) ||
              (e = y.y1.relative(r.cwd, y.y1.resolve(t, e))).match(/^\.{0,2}\//) ||
              (e = './' + e);
              o = await N(f.makeIdent(null, 'archive'), e, {
                project: r.project,
                cache: n,
                workspace: r
              });
            if (!o) throw new Error('Assertion failed: The descriptor should have been found');
                resolver: s
              h = await E.G.find(u.prefixPath, { baseFs: u.packageFs });
            if (!h.name) throw new Error("Target path doesn't have a name");
            return f.makeDescriptor(h.name, e);
          });
          {
            project: t,
            workspace: r,
            cache: n,
            target: o,
            modifier: s,
            strategies: a,
            maxResults: c = 1 / 0
          }
          if (!(c >= 0)) throw new Error(`Invalid maxResults (${c})`);
                  reason: '(unambiguous explicit request)'
                }
              rejections: []
            };
            h = async e => {
                await e();
                u.push(e);
            };
            if (l.length >= c) break;
                      reason: '(no changes)'
                    });
                });
                break;
                  for (const { descriptor: n, locators: i } of (
                    await k(e, { project: t, target: o })
                  ).values()) {
                    if (
                      1 === i.length &&
                      i[0].locatorHash === r.anchoredLocator.locatorHash &&
                      a.includes(A.KEEP)
                    )
                      continue;
                    let e = '(originally used by ' + f.prettyLocator(t.configuration, i[0]);
                    (e +=
                      i.length > 1 ? ` and ${i.length - 1} other${i.length > 2 ? 's' : ''})` : ')'),
                        reason: e
                      });
                });
                break;
                        reason: '(already used somewhere in the lockfile)'
                      });
                });
                break;
                  if (null !== r.manifest.name && e.identHash === r.manifest.name.identHash) return;
                  const n = t.tryWorkspaceByIdent(e);
                      reason: `(local workspace at ${n.cwd})`
                    });
                });
                break;
                      reason: '(explicit range requested)'
                    });
                      reason: '(catch-all peer dependency pattern)'
                    });
                      preserveModifier: !1
                    });
                        reason: '(resolved from latest)'
                      }));
                      reason: m.pretty(
                        t.configuration,
                        '(unavailable because enableNetwork is toggled off)',
                        'grey'
                      )
                    });
                });
          return { suggestions: l.slice(0, c), rejections: u.slice(0, c) };
              skipIntegrityCheck: !0
            h = await c.getCandidates(u, new Map(), l);
          if (0 === h.length) return null;
          const p = h[0];
          let { protocol: d, source: C, params: E, selector: m } = f.parseRange(
            f.convertToManifestRange(p.reference)
          );
          if (
            (d === r.configuration.get('defaultProtocol') && (d = null), Q().valid(m) && !1 !== o)
          ) {
            m = D('string' == typeof o ? o : A.range, { project: r }) + m;
          return f.makeDescriptor(
            p,
            f.makeRange({ protocol: d, source: C, params: E, selector: m })
          );
              (this.cached = !1);
            var e;
              o = await g.C.find(t);
            if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd);
            const a =
                null !== (e = this.interactive) && void 0 !== e ? e : t.get('preferInteractive'),
                this.packages.map(async e => {
                        c = e.manifest[i.PEER].has(t.identHash);
                        );
                        );
                        );
                        );
                        );
                      return n
                        ? i.PEER
                        : r || o
                        ? i.DEVELOPMENT
                        : s
                        ? i.REGULAR
                        : a
                        ? i.DEVELOPMENT
                        : i.REGULAR;
                      optional: this.optional
                    });
                      maxResults: m
                    A
                  ];
              y = await l.h.start(
                { configuration: t, stdout: this.context.stdout, suggestInstall: !1 },
                async e => {
                  for (const [n, { suggestions: i, rejections: o }] of B) {
                    if (0 === i.filter(e => null !== e.descriptor).length) {
                      const [i] = o;
                      if (void 0 === i)
                        throw new Error('Assertion failed: Expected an error to have been set');
                      const A = this.cli.error(i);
                      r.configuration.get('enableNetwork')
                        ? e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${f.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range:\n\n${A}`
                          )
                        : e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${f.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range (note: network resolution has been disabled):\n\n${A}`
                          );
                    }
              );
            if (y.hasErrors()) return y.exitCode();
            let w = !1;
              b = [];
              let r;
              const i = e.filter(e => null !== e.descriptor),
                A = i.every(e => f.areDescriptorsEqual(e.descriptor, o));
                      return this.find(e, 'descriptor');
                    stdout: this.context.stdout
                  })));
              const s = n.manifest[t].get(r.identHash);
              (void 0 !== s && s.descriptorHash === r.descriptorHash) ||
                        range: 'unknown'
                void 0 === s ? Q.push([n, t, r, E]) : b.push([n, t, s, r]));
            await t.triggerMultipleHooks(e => e.afterWorkspaceDependencyAddition, Q),
              await t.triggerMultipleHooks(e => e.afterWorkspaceDependencyReplacement, b),
              w && this.context.stdout.write('\n');
                  includeLogs: !this.context.quiet
                async e => {
                  await r.install({ cache: o, report: e });
            ).exitCode();
        (R.usage = d.Command.Usage({
            [
              'Add a specific version for a package to the current workspace',
              '$0 add lodash@1.2.3'
            ],
              '$0 add lodash@https://github.com/lodash/lodash'
              '$0 add lodash@github:lodash/lodash'
              '$0 add lodash@lodash/lodash'
              '$0 add lodash-es@lodash/lodash#es'
            ]
          ]
                description: "Don't use any semver modifier on the resolved range"
              })
                description: 'Use the `~` semver modifier on the resolved range'
              })
                description: 'Use the `^` semver modifier on the resolved range'
              })
                description: 'Add / upgrade a package to an optional regular / peer dependency'
              })
                description: 'Add / upgrade a package to a dev dependency'
              })
                description: 'Reuse the specified package from other workspaces in the project'
              })
                description: 'Reuse the highest version already used somewhere within the project'
              })
          (0, a.gn)([d.Command.Path('add')], R.prototype, 'execute', null);
        var K = r(63088);
            super(...arguments), (this.verbose = !1), (this.json = !1);
              { project: t, locator: r } = await h.I.find(e, this.context.cwd);
              const n = (await K.getPackageAccessibleBinaries(r, { project: t })).get(this.name);
                  `Couldn't find a binary named "${this.name}" for package "${f.prettyLocator(
                    e,
                    r
                  )}"`
                );
              const [, i] = n;
              return this.context.stdout.write(i + '\n'), 0;
              await p.Pk.start(
                { configuration: e, json: this.json, stdout: this.context.stdout },
                async n => {
                  const i = await K.getPackageAccessibleBinaries(r, { project: t }),
                    o = Array.from(i.keys()).reduce((e, t) => Math.max(e, t.length), 0);
                  for (const [e, [t, r]] of i)
                    n.reportJson({ name: e, source: f.stringifyIdent(t), path: r });
                  if (this.verbose)
                    for (const [t, [r]] of i)
                      n.reportInfo(null, `${t.padEnd(o, ' ')}   ${f.prettyLocator(e, r)}`);
                  else for (const e of i.keys()) n.reportInfo(null, e);
                }
              )
            ).exitCode();
        (L.usage = d.Command.Usage({
            ['Print the path to a specific binary', '$0 bin eslint']
          ]
                description:
                  'Print both the binary name and the locator of the package that provides the binary'
              })
          (0, a.gn)([d.Command.Path('bin')], L.prototype, 'execute', null);
            super(...arguments), (this.mirror = !1), (this.all = !1);
              t = await g.C.find(e);
                  r = !this.mirror;
                e && (await B.xfs.removePromise(t.mirrorCwd)),
                  r && (await B.xfs.removePromise(t.cwd));
            ).exitCode();
        (x.usage = d.Command.Usage({
            ['Remove all the archives stored in the ~/.yarn directory', '$0 cache clean --mirror']
          ]
                description: 'Remove the global cache files instead of the local cache files'
              })
                description:
                  'Remove both the global cache files and the local cache files of the current project'
              })
          (0, a.gn)([d.Command.Path('cache', 'clean')], x.prototype, 'execute', null);
          O = r(31669);
            super(...arguments), (this.json = !1), (this.unsafe = !1);
              r = this.name.replace(/^[^.[]*/, '');
              throw new d.UsageError(`Couldn't find a configuration settings named "${t}"`);
                {
                  configuration: e,
                  includeFooter: !1,
                  json: this.json,
                  stdout: this.context.stdout
                },
                async e => {
                  e.reportJson(i);
              );
              if ('string' == typeof i) return this.context.stdout.write(i + '\n'), o.exitCode();
              (O.inspect.styles.name = 'cyan'),
                  (0, O.inspect)(i, { depth: 1 / 0, colors: e.get('enableColors'), compact: !1 }) +
                    '\n'
                );
            return o.exitCode();
              const r = e[t];
              'object' == typeof r && null !== r && (e[t] = j(r));
          return e;
        (U.usage = d.Command.Usage({
              'yarn config get \'npmScopes["my-company"].npmRegistryServer\''
            ['Print a configuration setting as JSON', 'yarn config get packageExtensions --json']
          ]
                description: "Don't redact secrets (such as tokens) from the output"
              })
          (0, a.gn)([d.Command.Path('config', 'get')], U.prototype, 'execute', null);
          J = r.n(H);
            super(...arguments), (this.json = !1), (this.home = !1);
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
            if (!e.projectCwd)
              throw new d.UsageError('This command must be run from within a project folder');
              r = this.name.replace(/^[^.[]*\.?/, '');
              throw new d.UsageError(`Couldn't find a configuration settings named "${t}"`);
              i = this.home
                ? e => s.VK.updateHomeConfiguration(e)
                : t => s.VK.updateConfiguration(e.projectCwd, t);
            await i(e => {
                const t = G()(e);
                return J()(t, this.name, n), t;
              return { ...e, [t]: n };
            });
                  getNativePaths: !0
              A = r ? T()(o, r) : o;
              await p.Pk.start(
                { configuration: e, includeFooter: !1, stdout: this.context.stdout },
                async t => {
                  (O.inspect.styles.name = 'cyan'),
                    t.reportInfo(
                      u.b.UNNAMED,
                      `Successfully set ${this.name} to ${(0, O.inspect)(A, {
                        depth: 1 / 0,
                        colors: e.get('enableColors'),
                        compact: !1
                      })}`
                    );
                }
              )
            ).exitCode();
        (_.usage = d.Command.Usage({
              'yarn config set initScope myScope'
              'yarn config set initScope --json \\"myScope\\"'
              'yarn config set unsafeHttpWhitelist --json \'["*.example.com", "example.com"]\''
              'yarn config set packageExtensions --json \'{ "@babel/parser@*": { "dependencies": { "@babel/types": "*" } } }\''
              'yarn config set npmScopes.company.npmRegistryServer "https://npm.example.com"'
              'yarn config set \'npmRegistries["//npm.example.com"].npmAuthToken\' "ffffffff-ffff-ffff-ffff-ffffffffffff"'
            ]
          ]
                description: 'Set complex configuration settings to JSON values'
              })
                description: 'Update the home configuration instead of the project configuration'
              })
          (0, a.gn)([d.Command.Path('config', 'set')], _.prototype, 'execute', null);
        var q = r(73632);
            super(...arguments), (this.verbose = !1), (this.why = !1), (this.json = !1);
            const e = await s.VK.find(this.context.cwd, this.context.plugins, { strict: !1 });
              await p.Pk.start(
                { configuration: e, json: this.json, stdout: this.context.stdout },
                async t => {
                  if (e.invalid.size > 0 && !this.json) {
                    for (const [r, n] of e.invalid)
                      t.reportError(
                        u.b.INVALID_CONFIGURATION_KEY,
                        `Invalid configuration key "${r}" in ${n}`
                      );
                    t.reportSeparator();
                  }
                  if (this.json) {
                    const r = q.sortMap(e.settings.keys(), e => e);
                    for (const n of r) {
                      const r = e.settings.get(n),
                        i = e.getSpecial(n, { hideSecrets: !0, getNativePaths: !0 }),
                        o = e.sources.get(n);
                      this.verbose
                        ? t.reportJson({ key: n, effective: i, source: o })
                        : t.reportJson({ key: n, effective: i, source: o, ...r });
                    }
                  } else {
                    const r = q.sortMap(e.settings.keys(), e => e),
                      n = r.reduce((e, t) => Math.max(e, t.length), 0),
                      i = { breakLength: 1 / 0, colors: e.get('enableColors'), maxArrayLength: 2 };
                    if (this.why || this.verbose) {
                      const o = r.map(t => {
                          const r = e.settings.get(t);
                          if (!r)
                            throw new Error(
                              `Assertion failed: This settings ("${t}") should have been registered`
                            );
                          return [t, this.why ? e.sources.get(t) || '<default>' : r.description];
                        }),
                        A = o.reduce((e, [, t]) => Math.max(e, t.length), 0);
                      for (const [r, s] of o)
                        t.reportInfo(
                          null,
                          `${r.padEnd(n, ' ')}   ${s.padEnd(A, ' ')}   ${(0, O.inspect)(
                            e.getSpecial(r, { hideSecrets: !0, getNativePaths: !0 }),
                            i
                          )}`
                        );
                    } else
                      for (const o of r)
                        t.reportInfo(
                          null,
                          `${o.padEnd(n, ' ')}   ${(0, O.inspect)(
                            e.getSpecial(o, { hideSecrets: !0, getNativePaths: !0 }),
                            i
                          )}`
                        );
              )
            ).exitCode();
        (z.usage = d.Command.Usage({
          examples: [['Print the active configuration settings', '$0 config']]
                description:
                  'Print the setting description on top of the regular key/value information'
              })
                description: 'Print the reason why a setting is set a particular way'
              })
          (0, a.gn)([d.Command.Path('config')], z.prototype, 'execute', null);
          $ = r.n(Z);
          e.HIGHEST = 'highest';
        })(W || (W = {}));
            highest: async (
              e,
              t,
              { resolver: r, fetcher: n, resolveOptions: i, fetchOptions: o }
            ) => {
              const A = new Map();
                const n = e.storedDescriptors.get(t);
                if (void 0 === n)
                  throw new Error(
                    `Assertion failed: The descriptor (${t}) should have been registered`
                  );
                q.getSetWithDefault(A, n.identHash).add(r);
              return Array.from(e.storedDescriptors.values(), async n => {
                if (t.length && !$().isMatch(f.stringifyIdent(n), t)) return null;
                const o = e.storedResolutions.get(n.descriptorHash);
                  throw new Error(
                    `Assertion failed: The resolution (${n.descriptorHash}) should have been registered`
                  );
                const s = e.originalPackages.get(o);
                if (void 0 === s) return null;
                if (!r.shouldPersistResolution(s, i)) return null;
                const a = A.get(n.identHash);
                  throw new Error(
                    `Assertion failed: The resolutions (${n.identHash}) should have been registered`
                  );
                if (1 === a.size) return null;
                const c = [...a].map(t => {
                    const r = e.originalPackages.get(t);
                      throw new Error(
                        `Assertion failed: The package (${t}) should have been registered`
                      );
                    return r.reference;
                  l = null == g ? void 0 : g[0];
                if (void 0 === l) return null;
                  h = e.originalPackages.get(u);
                if (void 0 === h)
                  throw new Error(
                    `Assertion failed: The package (${u}) should have been registered`
                  );
                return u === o ? null : { descriptor: n, currentPackage: s, updatedPackage: h };
              });
            }
          };
            super(...arguments),
              (this.patterns = []),
              (this.strategy = W.HIGHEST),
              (this.check = !1),
              (this.json = !1);
              r = await g.C.find(e);
            let n = 0;
              async e => {
                      skipIntegrityCheck: !0
                    g = { project: e, resolver: s, report: A, fetchOptions: c };
                        fetchOptions: c
                      l = X.yG.progressViaCounter(A.length);
                    i.reportProgress(l);
                      p = 0;
                        A.map(t =>
                            .then(t => {
                              if (null === t) return;
                              p++;
                              const { descriptor: r, currentPackage: n, updatedPackage: A } = t;
                                  updatedResolution: f.stringifyLocator(A)
                                e.storedResolutions.set(r.descriptorHash, A.locatorHash);
                        h = 'No packages';
                        break;
                        h = 'One package';
                        break;
                        h = p + ' packages';
                    const d = m.pretty(o, t, m.Type.CODE);
                    return (
                      i.reportInfo(u.b.UNNAMED, `${h} can be deduped using the ${d} strategy`), p
                    );
                  });
                })(t, { strategy: this.strategy, patterns: this.patterns, cache: r, report: e });
              }
            );
            if (i.hasErrors()) return i.exitCode();
            if (this.check) return n ? 1 : 0;
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout, json: this.json },
                async e => {
                  await t.install({ cache: r, report: e });
                }
              )
            ).exitCode();
        (re.schema = V.object().shape({
            test: e => ee.has(e)
          })
              ['Check for duplicates (can be used as a CI step)', '$0 dedupe --check']
            ]
                description: 'The strategy to use when deduping dependencies'
              })
                description:
                  'Exit with exit code 1 when duplicates are found, without persisting the dependency tree'
              })
          (0, a.gn)([d.Command.Path('dedupe')], re.prototype, 'execute', null);
              t = [];
              const { commands: e } = r[1];
                const n = d.Cli.from(e).definitions();
                t.push([r[0], n]);
              i = r(60306)['@yarnpkg/builder'].bundles.standard;
              const t = e[1];
                n.find(e => {
                  return (
                    (t = e.path),
                    (n = r.path),
                    t.split(' ').slice(1).join() === n.split(' ').slice(1).join()
                  );
                  var t, n;
                }).plugin = { name: e[0], isDefault: i.includes(e[0]) };
            this.context.stdout.write(JSON.stringify({ commands: n }, null, 2) + '\n');
        (0, a.gn)([d.Command.Path('--clipanion=definitions')], ne.prototype, 'execute', null);
            this.context.stdout.write(this.cli.usage(null));
        (0, a.gn)(
        );
            super(...arguments), (this.args = []);
              const e = y.y1.resolve(this.context.cwd, y.cS.toPortablePath(this.leadingArgument));
              return await this.cli.run(this.args, { cwd: e });
            return await this.cli.run(['run', this.leadingArgument, ...this.args]);
        (0, a.gn)([d.Command.String()], oe.prototype, 'leadingArgument', void 0),
          (0, a.gn)([d.Command.Proxy()], oe.prototype, 'args', void 0);
        var Ae = r(59355);
            this.context.stdout.write((Ae.o || '<unknown>') + '\n');
        (0, a.gn)(
          [d.Command.Path('-v'), d.Command.Path('--version')],
          se.prototype,
          'execute',
          null
        );
        var ae = r(6220);
            super(...arguments), (this.args = []);
              { project: t } = await h.I.find(e, this.context.cwd);
            return await B.xfs.mktempPromise(async e => {
                env: await K.makeScriptEnv({ project: t, binFolder: e })
              });
              return r;
            });
        (ce.usage = d.Command.Usage({
          examples: [['Execute a shell command', '$0 exec echo Hello World']]
          (0, a.gn)([d.Command.Path('exec')], ce.prototype, 'execute', null);
        var ge = r(85875);
              (this.patterns = []);
              n = await g.C.find(e);
            if (!r && !this.all) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
            const i = new Set(this.extra);
            this.cache && i.add('cache'),
              this.dependents && i.add('dependents'),
              this.manifest && i.add('manifest');
                  o = [n];
                  const e = o.shift();
                  if (i.has(e)) continue;
                  const A = t.storedPackages.get(e);
                  if (void 0 === A)
                    throw new Error('Assertion failed: Expected the package to be registered');
                    (i.set(e, A),
                    f.isVirtualLocator(A) && o.push(f.devirtualizeLocator(A).locatorHash),
                    r || e === n)
                      const r = t.storedResolutions.get(e.descriptorHash);
                      if (void 0 === r)
                        throw new Error(
                          'Assertion failed: Expected the resolution to be registered'
                        );
                      o.push(r);
                return i.values();
                      const r = new Map();
                      for (const n of t.workspaces)
                        for (const t of o(n, { recursive: e })) r.set(t.locatorHash, t);
                      return r.values();
                  n = this.patterns.map(e => {
                      i = n ? f.devirtualizeLocator(t) : t;
                    return e => {
                      const o = f.stringifyIdent(e);
                      if (!r.test(o)) return !1;
                      if ('unknown' === t.reference) return !0;
                        s = A ? f.devirtualizeLocator(e) : e;
                      return (
                        (!n || !A || t.reference === e.reference) && i.reference === s.reference
                      );
                    };
                  i = q.sortMap([...r], e => f.stringifyLocator(e));
                  selection: i.filter(e => 0 === n.length || n.some(t => t(e))),
                  sortedLookup: i
                };
              })({ all: this.all, recursive: this.recursive });
            if (0 === a.length) throw new d.UsageError('No package matched your request');
            const u = new Map();
                  const n = t.storedResolutions.get(r.descriptorHash);
                  if (void 0 === n)
                    throw new Error('Assertion failed: Expected the resolution to be registered');
                  q.getArrayWithDefault(u, n).push(e);
            const p = new Map();
              if (!f.isVirtualLocator(e)) continue;
              const t = f.devirtualizeLocator(e);
              q.getArrayWithDefault(p, t.locatorHash).push(e);
                skipIntegrityCheck: !0
                  var n, i;
                  if (!t.has('manifest')) return;
                  const o = await w.fetch(e, Q);
                  let A;
                    A = await E.G.find(o.prefixPath, { baseFs: o.packageFs });
                    null === (n = o.releaseFs) || void 0 === n || n.call(o);
                    Homepage: m.tuple(
                      m.Type.URL,
                      null !== (i = A.raw.homepage) && void 0 !== i ? i : null
                    )
                  });
                  var o;
                  if (!r.has('cache')) return;
                  const A =
                      null !== (o = t.storedChecksums.get(e.locatorHash)) && void 0 !== o
                        ? o
                        : null,
                    s = n.getLocatorPath(e, A);
                  let a;
                      a = B.xfs.statSync(s);
                  const c = void 0 !== a ? [a.size, m.Type.SIZE] : void 0;
                    Size: c
                  });
                }
              ];
              const n = f.isVirtualLocator(r);
              if (!this.virtuals && n) continue;
                A = { value: [r, m.Type.LOCATOR], children: o };
                delete A.children;
                continue;
              const s = p.get(r.locatorHash);
              void 0 !== s &&
                (o.Instances = { label: 'Instances', value: m.tuple(m.Type.NUMBER, s.length) }),
                (o.Version = { label: 'Version', value: m.tuple(m.Type.NO_HINT, r.version) });
                const r = {};
                if (((o[e] = r), Array.isArray(t))) r.children = t.map(e => ({ value: e }));
                  const e = {};
                  r.children = e;
                  for (const [r, n] of Object.entries(t))
                    void 0 !== n && (e[r] = { label: r, value: n });
              };
                for (const e of v) await e(r, i, a);
                await e.triggerHook(e => e.fetchPackageInfo, r, i, a);
                  [...r.bin.keys()].map(e => m.tuple(m.Type.PATH, e))
                );
              const c = u.get(r.locatorHash);
                  c.map(e => m.tuple(m.Type.LOCATOR, e))
                    [...r.dependencies.values()].map(e => {
                      var r;
                        i =
                          void 0 !== n && null !== (r = t.storedPackages.get(n)) && void 0 !== r
                            ? r
                            : null;
                      return m.tuple(m.Type.RESOLUTION, { descriptor: e, locator: i });
                    [...r.peerDependencies.values()].map(e => {
                      var n, i;
                          void 0 !== o &&
                          null !== (n = t.storedResolutions.get(o.descriptorHash)) &&
                          void 0 !== n
                        s =
                          null !== A && null !== (i = t.storedPackages.get(A)) && void 0 !== i
                            ? i
                            : null;
                      return m.tuple(m.Type.RESOLUTION, { descriptor: e, locator: s });
                  );
              separators: this.nameOnly ? 0 : 2
            });
        (le.usage = d.Command.Usage({
          examples: [['Show information about Lodash', '$0 info lodash']]
                description: 'Print versions of a package from the whole project'
              })
                description: 'Print information for all packages, including transitive dependencies'
              })
                description: 'An array of requests of extra data provided by plugins'
              })
                description:
                  'Print information about the cache entry of a package (path, size, checksum)'
              })
                description: 'Print all dependents for each matching package'
              })
                description:
                  'Print data obtained by looking at the package archive (license, homepage, ...)'
              })
                description: 'Only print the name for the matching packages'
              })
                description: 'Print each instance of the virtual packages'
              })
          (0, a.gn)([d.Command.Path('info')], le.prototype, 'execute', null);
          he = r(5864);
            super(...arguments),
              (this.json = !1),
              (this.checkCache = !1),
              (this.skipBuilds = !1),
              (this.silent = !1);
            var e, t, r;
            const n = await s.VK.find(this.context.cwd, this.context.plugins);
                overwrite: !0
              });
                  async r => {
                    t
                      ? r.reportError(u.b.DEPRECATED_CLI_SETTINGS, e)
                      : r.reportWarning(u.b.DEPRECATED_CLI_SETTINGS, e);
                );
                return r.hasErrors() ? r.exitCode() : null;
              };
              );
              if (null !== e) return e;
              );
              if (null !== e) return e;
              );
              if (null !== e) return e;
              );
              if (null !== e) return e;
              const e = await a('The --non-interactive option is deprecated', { error: !A });
              if (null !== e) return e;
              );
              if (null !== e) return e;
              const e = await a(
                'The cache-folder option has been deprecated; use rc settings instead',
                {
                  error: !o
                }
              );
              if (null !== e) return e;
                : null !==
                    (r = null !== (t = this.immutable) && void 0 !== t ? t : this.frozenLockfile) &&
                  r;
                {
                  configuration: n,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeFooter: !1
                },
                async e => {
                  (await (async function (e, t) {
                    if (!e.projectCwd) return !1;
                    const r = y.y1.join(e.projectCwd, e.get('lockfileFilename'));
                    if (!(await B.xfs.existsPromise(r))) return !1;
                    const n = await B.xfs.readFilePromise(r, 'utf8');
                    if (!n.includes('<<<<<<<')) return !1;
                      );
                        r = e.split(/\r?\n/g);
                      let n = !1;
                        const e = r.shift();
                        if (void 0 === e)
                          throw new Error('Assertion failed: Some lines should remain');
                            const e = r.shift();
                            if (void 0 === e)
                              throw new Error('Assertion failed: Some lines should remain');
                              n = !1;
                              break;
                            n || e.startsWith('|||||||') ? (n = !0) : t[0].push(e);
                            const e = r.shift();
                            if (void 0 === e)
                              throw new Error('Assertion failed: Some lines should remain');
                            if (e.startsWith('>>>>>>>')) break;
                            t[1].push(e);
                        } else t[0].push(e), t[1].push(e);
                      return [t[0].join('\n'), t[1].join('\n')];
                    })(n);
                    let A, s;
                      (A = (0, ue.parseSyml)(i)), (s = (0, ue.parseSyml)(o));
                      );
                    const a = { ...A, ...s };
                    for (const [e, t] of Object.entries(a)) 'string' == typeof t && delete a[e];
                        automaticNewlines: !0
                    );
                    (e.reportInfo(u.b.AUTOMERGE_SUCCESS, 'Automatically fixed merge conflicts 👍'),
                    e.reportSeparator());
              );
              if (e.hasErrors()) return e.exitCode();
                {
                  configuration: n,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeFooter: !1
                },
                async e => {
                  var t;
                  (null === (t = s.VK.telemetry) || void 0 === t ? void 0 : t.isNew) &&
                      `Run ${m.pretty(
                        n,
                        'yarn config set --home enableTelemetry 0',
                        m.Type.CODE
                      )} to disable`
                    e.reportSeparator());
              );
              if (e.hasErrors()) return e.exitCode();
              C = await g.C.find(n, { immutable: this.immutableCache, check: this.checkCache });
            if (!d) throw new c.WorkspaceRequiredError(f.cwd, this.context.cwd);
                async e => {
                  await f.install({
                    cache: C,
                    report: e,
                    immutable: l,
                    skipBuild: this.skipBuilds
                  });
            ).exitCode();
        (pe.usage = d.Command.Usage({
              'Validate a project when using Zero-Installs',
              '$0 install --immutable --immutable-cache'
            [
              'Validate a project when using Zero-Installs (slightly safer if you accept external PRs)',
              '$0 install --immutable --immutable-cache --check-cache'
            ]
          ]
                description: 'Abort with an error exit code if the lockfile was to be modified'
              })
                description: 'Abort with an error exit code if the cache folder was to be modified'
              })
                description:
                  'Always refetch the packages and ensure that their checksums are consistent'
              })
          (0, a.gn)(
            [d.Command.Boolean('--production', { hidden: !0 })],
            pe.prototype,
            'production',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--non-interactive', { hidden: !0 })],
            pe.prototype,
            'nonInteractive',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--frozen-lockfile', { hidden: !0 })],
            pe.prototype,
            'frozenLockfile',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--prefer-offline', { hidden: !0 })],
            pe.prototype,
            'preferOffline',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--ignore-engines', { hidden: !0 })],
            pe.prototype,
            'ignoreEngines',
            void 0
          ),
          (0, a.gn)(
            [d.Command.String('--registry', { hidden: !0 })],
            pe.prototype,
            'registry',
            void 0
          ),
                description: 'Verbosely print the output of the build steps of dependencies'
              })
          (0, a.gn)(
            [d.Command.String('--cache-folder', { hidden: !0 })],
            pe.prototype,
            'cacheFolder',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--silent', { hidden: !0 })],
            pe.prototype,
            'silent',
            void 0
          ),
          (0, a.gn)([d.Command.Path(), d.Command.Path('install')], pe.prototype, 'execute', null);
            super(...arguments), (this.all = !1), (this.private = !1), (this.relative = !1);
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
              { project: A, workspace: a } = await h.I.find(o, i);
            if (!a) throw new c.WorkspaceRequiredError(A.cwd, i);
              u = [];
              for (const e of A.workspaces)
                !e.manifest.name || (e.manifest.private && !this.private) || u.push(e);
              if (0 === u.length)
                throw new d.UsageError('No workspace found to be linked in the target project');
                throw new d.UsageError(
                  "The target workspace doesn't have a name and thus cannot be linked"
                );
                );
              u.push(a);
                n = this.relative ? y.y1.relative(t.cwd, e.cwd) : e.cwd;
                reference: 'portal:' + n
              });
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async e => {
                await t.install({ cache: n, report: e });
            ).exitCode();
        (fe.usage = d.Command.Usage({
            [
              'Register all workspaces from a remote project for use in the current project',
              '$0 link ~/jest --all'
            ]
          ]
                description:
                  'Link all workspaces belonging to the target project to the current one'
              })
                description:
                  'Also link private workspaces belonging to the target project to the current one'
              })
                description: 'Link workspaces using relative paths instead of absolute paths'
              })
          (0, a.gn)([d.Command.Path('link')], fe.prototype, 'execute', null);
            super(...arguments), (this.args = []);
            return this.cli.run(['exec', 'node', ...this.args]);
        (de.usage = d.Command.Usage({
          examples: [['Run a Node script', '$0 node ./my-script.js']]
          (0, a.gn)([d.Command.Path('node')], de.prototype, 'execute', null);
          ye = r(79669);
            super(...arguments), (this.onlyIfNeeded = !1);
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
            if (e.get('yarnPath') && this.onlyIfNeeded) return 0;
            let t;
              t = 'https://github.com/yarnpkg/berry/raw/master/packages/yarnpkg-cli/bin/yarn.js';
            else if ('classic' === this.version) t = 'https://nightly.yarnpkg.com/latest.js';
              t = `https://github.com/yarnpkg/berry/raw/%40yarnpkg/cli/${this.version}/packages/yarnpkg-cli/bin/yarn.js`;
                  : new d.UsageError(`Invalid version descriptor "${this.version}"`);
              t = `https://github.com/yarnpkg/yarn/releases/download/v${this.version}/yarn-${this.version}.js`;
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
                r.reportInfo(u.b.UNNAMED, 'Downloading ' + m.pretty(e, t, 'green'));
                const n = await ye.get(t, { configuration: e });
                await Qe(e, null, n, { report: r });
            ).exitCode();
          const i = e.projectCwd ? e.projectCwd : e.startingCwd;
            (await B.xfs.mktempPromise(async e => {
              const n = y.y1.join(e, 'yarn.cjs');
              await B.xfs.writeFilePromise(n, r);
              const { stdout: o } = await ae.execvp(
                process.execPath,
                [y.cS.fromPortablePath(n), '--version'],
                {
                  cwd: i,
                  env: { ...process.env, YARN_IGNORE_PATH: '1' }
                }
              );
              if (((t = o.trim()), !Q().valid(t))) throw new Error('Invalid semver version');
            }));
            l = null === g || g.startsWith(o + '/');
            l && (await s.VK.updateConfiguration(i, { yarnPath: c }));
        (we.usage = d.Command.Usage({
            [
              'Download the latest classic release from the Yarn repository',
              '$0 set version classic'
            ],
            ['Switch back to a specific Yarn 1 release', '$0 set version 1.22.1']
          ]
                description: "Only lock the Yarn version if it isn't already locked"
              })
          );
        const ve = /^[0-9]+$/;
          return ve.test(e) ? `pull/${e}/head` : e;
              (this.force = !1);
                    );
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
                        ...new Array().concat(...e.map(e => ['--plugin', me().resolve(r, e)])),
                        '|'
                      ]
                  r.reportSeparator();
                  i = await B.xfs.readFilePromise(n);
                await Qe(e, 'sources', i, { report: r });
            ).exitCode();
            const e = '|' === o[o.length - 1];
                strict: !0
              });
              r.stdout.write(m.pretty(t, '  $ ' + [i, ...o].join(' '), 'grey') + '\n');
                await ae.execvp(i, o, { cwd: n, strict: !0 });
                throw (r.stdout.write(e.stdout || e.stack), e);
          let i = !1;
            r.reportInfo(u.b.UNNAMED, 'Fetching the latest commits'), r.reportSeparator();
                  ['git', 'clean', '-dfx']
                (i = !0);
              r.reportSeparator(),
                r.reportWarning(
                  u.b.UNNAMED,
                  "Repository update failed; we'll try to regenerate it"
                );
                ['git', 'reset', '--hard', 'FETCH_HEAD']
            ));
        (De.usage = d.Command.Usage({
          examples: [['Build Yarn from master', '$0 set version from sources']]
                description: 'The path where the repository should be cloned to'
              })
            [
              d.Command.String('--repository', {
                description: 'The repository that should be cloned'
              })
            ],
                description: 'The branch of the repository that should be cloned'
              })
                description: 'An array of additional plugins that should be included in the bundle'
              })
                description:
                  'Build a bundle for development (debugging) - non-minified and non-mangled'
              })
                description:
                  'Always clone the repository instead of trying to fetch the latest commits'
              })
          (0, a.gn)(
            [d.Command.Path('set', 'version', 'from', 'sources')],
            De.prototype,
            'execute',
            null
          );
        var Me = r(78835);
        const Fe = require('vm');
          const t = await ye.get(
            'https://raw.githubusercontent.com/yarnpkg/berry/master/plugins.yml',
            {
              configuration: e
            }
          );
          return (0, ue.parseSyml)(t.toString());
            super(...arguments), (this.json = !1);
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
              await p.Pk.start(
                { configuration: e, json: this.json, stdout: this.context.stdout },
                async t => {
                  const r = await Ne(e);
                  for (const [e, { experimental: n, ...i }] of Object.entries(r)) {
                    let r = e;
                    n && (r += ' [experimental]'),
                      t.reportJson({ name: e, experimental: n, ...i }),
                      t.reportInfo(null, r);
                  }
              )
            ).exitCode();
        (Re.usage = d.Command.Usage({
          examples: [['List the official plugins', '$0 plugin list']]
          (0, a.gn)([d.Command.Path('plugin', 'list')], Re.prototype, 'execute', null);
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async t => {
                const { project: r } = await h.I.find(e, this.context.cwd);
                let n, i;
                  const o = y.y1.resolve(this.context.cwd, y.cS.toPortablePath(this.name));
                    (i = await B.xfs.readFilePromise(o));
                  let r;
                      new Me.URL(this.name);
                      );
                    (n = this.name), (r = this.name);
                    const t = f.parseIdent(
                        this.name.replace(/^((@yarnpkg\/)?plugin-)?/, '@yarnpkg/plugin-')
                      ),
                      o = await Ne(e);
                      );
                    (n = i), (r = o[i].url);
                    (i = await ye.get(r, { configuration: e }));
                await Le(n, i, { project: r, report: t });
            ).exitCode();
            A = { exports: o };
          (0, Fe.runInNewContext)(t.toString(), { module: A, exports: o });
            g = y.y1.resolve(r.cwd, c);
            await B.xfs.writeFilePromise(g, t);
          const l = { path: c, spec: e };
          await s.VK.updateConfiguration(r.cwd, e => {
            const t = [];
            let n = !1;
                { name: A } = q.dynamicRequire(y.cS.fromPortablePath(o));
              A !== a ? t.push(i) : (t.push(l), (n = !0));
            return n || t.push(l), { ...e, plugins: t };
          });
        (Ke.usage = d.Command.Usage({
            [
              'Download and activate the "@yarnpkg/plugin-exec" plugin',
              '$0 plugin import @yarnpkg/plugin-exec'
            ],
            [
              'Download and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
              '$0 plugin import exec'
            ],
            [
              'Download and activate a community plugin',
              '$0 plugin import https://example.org/path/to/plugin.js'
            ],
            ['Activate a local plugin', '$0 plugin import ./path/to/plugin.js']
          ]
          (0, a.gn)([d.Command.Path('plugin', 'import')], Ke.prototype, 'execute', null);
              (this.force = !1);
                    );
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
                  i = f.parseIdent(
                    this.name.replace(/^((@yarnpkg\/)?plugin-)?/, '@yarnpkg/plugin-')
                  ),
                  A = await Ne(e);
                  );
                  a = s.replace(/@yarnpkg\//, '');
                      ['yarn', 'build:' + e, ...(t ? ['--no-minify'] : []), '|']
                  r.reportSeparator();
                  g = await B.xfs.readFilePromise(c);
                await Le(s, g, { project: n, report: r });
            ).exitCode();
        (xe.usage = d.Command.Usage({
              '$0 plugin import from sources @yarnpkg/plugin-exec'
            [
              'Build and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
              '$0 plugin import from sources exec'
            ]
          ]
                description: 'The path where the repository should be cloned to'
              })
            [
              d.Command.String('--repository', {
                description: 'The repository that should be cloned'
              })
            ],
                description: 'The branch of the repository that should be cloned'
              })
                description:
                  'Build a plugin for development (debugging) - non-minified and non-mangled'
              })
                description:
                  'Always clone the repository instead of trying to fetch the latest commits'
              })
          (0, a.gn)(
            [d.Command.Path('plugin', 'import', 'from', 'sources')],
            xe.prototype,
            'execute',
            null
          );
              { project: t } = await h.I.find(e, this.context.cwd);
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
                  i = f.parseIdent(n);
                  throw new d.UsageError(
                    f.prettyIdent(e, i) + " isn't referenced by the current configuration"
                  );
                  A = y.y1.resolve(t.cwd, o);
                  await s.VK.updateConfiguration(t.cwd, e => {
                    if (!Array.isArray(e.plugins)) return e;
                    const t = e.plugins.filter(e => e.path !== o);
                    return e.plugins.length === t.length ? e : { ...e, plugins: t };
                  });
            ).exitCode();
        (Pe.usage = d.Command.Usage({
            [
              'Remove a plugin imported from the Yarn repository',
              '$0 plugin remove @yarnpkg/plugin-typescript'
            ],
            ['Remove a plugin imported from a local file', '$0 plugin remove my-local-plugin']
          ]
          (0, a.gn)([d.Command.Path('plugin', 'remove')], Pe.prototype, 'execute', null);
            super(...arguments), (this.json = !1);
            const e = await s.VK.find(this.context.cwd, this.context.plugins);
              await p.Pk.start(
                { configuration: e, json: this.json, stdout: this.context.stdout },
                async t => {
                  for (const r of e.plugins.keys()) {
                    const e = this.context.plugins.plugins.has(r);
                    let n = r;
                    e && (n += ' [builtin]'),
                      t.reportJson({ name: r, builtin: e }),
                      t.reportInfo(null, '' + n);
                  }
              )
            ).exitCode();
        (Te.usage = d.Command.Usage({
          examples: [['List the currently active plugins', '$0 plugin runtime']]
          (0, a.gn)([d.Command.Path('plugin', 'runtime')], Te.prototype, 'execute', null);
            super(...arguments), (this.idents = []);
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            const i = new Set();
            for (const e of this.idents) i.add(f.parseIdent(e).identHash);
            await t.resolveEverything({ cache: n, report: new I.$() });
              A = B.xfs.existsSync(o)
                ? (0, ue.parseSyml)(await B.xfs.readFilePromise(o, 'utf8'))
                : {},
              a = new Map();
              if (!Object.prototype.hasOwnProperty.call(A, e.locatorHash)) continue;
              if (0 === i.size || i.has(e.identHash)) continue;
              const t = A[e.locatorHash];
              a.set(e.locatorHash, t);
                n = h.I.generateBuildStateFile(a, t.storedPackages);
                await B.xfs.changeFilePromise(r, n, { automaticNewlines: !0 });
            } else await B.xfs.removePromise(o);
                async e => {
                  await t.install({ cache: n, report: e });
            ).exitCode();
        (Oe.usage = d.Command.Usage({
            ['Rebuild fsevents only', '$0 rebuild fsevents']
          ]
          (0, a.gn)([d.Command.Path('rebuild')], Oe.prototype, 'execute', null);
            super(...arguments), (this.all = !1), (this.patterns = []);
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
              a = [];
            let l = !1;
            const u = [];
              let t = !1;
              const r = f.parseIdent(e);
                const i = [...n.manifest.peerDependenciesMeta.keys()];
                for (const r of $()(i, e))
                  n.manifest.peerDependenciesMeta.delete(r), (l = !0), (t = !0);
                    o = [...i.values()].map(e => f.stringifyIdent(e));
                      o = i.get(r);
                    if (void 0 === o)
                      throw new Error('Assertion failed: Expected the descriptor to be registered');
                    n.manifest[e].delete(r), u.push([n, e, o]), (l = !0), (t = !0);
              t || a.push(e);
              E = this.all ? 'any' : 'this';
                `${C} ${m.prettyList(
                  e,
                  a,
                  s.a5.CODE
                )} ${I} match any packages referenced by ${E} workspace`
              );
              await e.triggerMultipleHooks(e => e.afterWorkspaceDependencyRemoval, u);
                await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async e => {
                  await t.install({ cache: n, report: e });
              ).exitCode();
            return 0;
        (Ue.usage = d.Command.Usage({
            [
              'Remove all dependencies matching `react-dom` or `react-helmet`',
              "$0 remove 'react-{dom,helmet}'"
            ]
          ]
                description: 'Apply the operation to all workspaces from the current project'
              })
          (0, a.gn)([d.Command.Path('remove')], Ue.prototype, 'execute', null);
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async t => {
                  i = q.sortMap(n.keys(), e => e),
                  A = i.reduce((e, t) => Math.max(e, t.length), 0);
                for (const [e, r] of n.entries())
                  t.reportInfo(null, `${e.padEnd(A, ' ')}   ${(0, O.inspect)(r, o)}`);
            ).exitCode();
        (0, a.gn)([d.Command.Path('run')], je.prototype, 'execute', null);
              (this.args = []);
              { project: t, workspace: r, locator: n } = await h.I.find(e, this.context.cwd);
            await t.restoreInstallState();
            const i = this.topLevel ? t.topLevelWorkspace.anchoredLocator : n;
            if (
              !this.binariesOnly &&
              (await K.hasPackageScript(i, this.scriptName, { project: t }))
            )
                stderr: this.context.stderr
              });
              const e = [];
                  ('string' == typeof this.inspect
                    ? e.push('--inspect=' + this.inspect)
                    : e.push('--inspect')),
                  nodeArgs: e
              );
                await Promise.all(
                  t.workspaces.map(async e => (e.manifest.scripts.has(this.scriptName) ? e : null))
                )
              ).filter(e => null !== e);
                  stderr: this.context.stderr
                });
                    `Couldn't find a script name "${
                      this.scriptName
                    }" in the top-level (used by ${f.prettyLocator(
                    `Couldn't find a script name "${
                      this.scriptName
                    }" in the top-level (used by ${f.prettyLocator(e, n)}).`
                  );
                );
              const e = [this.scriptName].concat(this.args);
                  if (
                    e.length >= n.length &&
                    JSON.stringify(e.slice(0, n.length)) === JSON.stringify(n)
                  )
                    );
              throw new d.UsageError(`Couldn't find a script named "${this.scriptName}".`);
        (Ye.usage = d.Command.Usage({
            ['Inspect Webpack while running', '$0 run --inspect-brk webpack']
          ]
                description: 'Forwarded to the underlying Node process when executing a binary'
              })
                description: 'Forwarded to the underlying Node process when executing a binary'
              })
          (0, a.gn)(
            [d.Command.Boolean('-T,--top-level', { hidden: !0 })],
            Ye.prototype,
            'topLevel',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('-B,--binaries-only', { hidden: !0 })],
            Ye.prototype,
            'binariesOnly',
            void 0
          ),
          (0, a.gn)(
            [d.Command.Boolean('--silent', { hidden: !0 })],
            Ye.prototype,
            'silent',
            void 0
          ),
          (0, a.gn)([d.Command.Path('run')], Ye.prototype, 'execute', null);
            super(...arguments), (this.save = !1);
              n = await g.C.find(e);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
              o = f.makeDescriptor(i, this.resolution);
              t.resolutionAliases.set(i.descriptorHash, o.descriptorHash);
              await p.Pk.start({ configuration: e, stdout: this.context.stdout }, async e => {
                await t.install({ cache: n, report: e });
            ).exitCode();
        (Ge.usage = d.Command.Usage({
            [
              'Force all instances of lodash@^1.2.3 to resolve to 1.5.0',
              '$0 set resolution lodash@^1.2.3 1.5.0'
            ]
          ]
                description: 'Persist the resolution inside the top-level manifest'
              })
          (0, a.gn)([d.Command.Path('set', 'resolution')], Ge.prototype, 'execute', null);
              (this.caret = !1);
            var e;
              o = await g.C.find(t);
            if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd);
            const a =
                null !== (e = this.interactive) && void 0 !== e ? e : t.get('preferInteractive'),
              y = [];
              let t = !1;
              const n = f.parseDescriptor(e);
                  const i = [...e.manifest.getForScope(A).values()].map(e => f.stringifyIdent(e));
                      a = e.manifest[A].get(i.identHash);
                    if (void 0 === a)
                      throw new Error('Assertion failed: Expected the descriptor to be registered');
                    const c = f.makeDescriptor(i, n.range);
                          strategies: E
                        })
                      (t = !0);
              t || y.push(e);
                `Patterns ${m.prettyList(
                  t,
                  y,
                  s.a5.CODE
                )} don't match any packages referenced by any workspace`
              );
                `Pattern ${m.prettyList(
                  t,
                  y,
                  s.a5.CODE
                )} doesn't match any packages referenced by any workspace`
              );
              Q = await l.h.start(
                { configuration: t, stdout: this.context.stdout, suggestInstall: !1 },
                async e => {
                  for (const [, , n, { suggestions: i, rejections: o }] of w) {
                    const A = i.filter(e => null !== e.descriptor);
                    if (0 === A.length) {
                      const [i] = o;
                      if (void 0 === i)
                        throw new Error('Assertion failed: Expected an error to have been set');
                      const A = this.cli.error(i);
                      r.configuration.get('enableNetwork')
                        ? e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${f.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range\n\n${A}`
                          )
                        : e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${f.prettyDescriptor(
                              t,
                              n
                            )} can't be resolved to a satisfying range (note: network resolution has been disabled)\n\n${A}`
                          );
                    } else
                      A.length > 1 &&
                        !a &&
                        e.reportError(
                          f.prettyDescriptor(t, n) +
                            ' has multiple possible upgrade strategies; use -i to disambiguate manually'
                        );
                  }
              );
            if (Q.hasErrors()) return Q.exitCode();
            let b = !1;
            const D = [];
              let o;
              const A = i.filter(e => null !== e.descriptor),
                a = A.every(e => f.areDescriptorsEqual(e.descriptor, s));
                      return this.find(e, 'descriptor');
                    stdout: this.context.stdout
                  })));
              const c = e.manifest[n].get(o.identHash);
              if (void 0 === c)
                throw new Error('Assertion failed: This descriptor should have a matching entry');
              if (c.descriptorHash !== o.descriptorHash)
                e.manifest[n].set(o.identHash, o), D.push([e, n, c, o]);
                  o = n.bindDescriptor(c, e.anchoredLocator, i);
                r.forgetResolution(o);
            await t.triggerMultipleHooks(e => e.afterWorkspaceDependencyReplacement, D),
              b && this.context.stdout.write('\n');
              await p.Pk.start({ configuration: t, stdout: this.context.stdout }, async e => {
                await r.install({ cache: o, report: e });
            ).exitCode();
        (He.usage = d.Command.Usage({
            [
              'Upgrade all instances of lodash to the latest release, but ask confirmation for each',
              '$0 up lodash -i'
            ],
            [
              'Upgrade all instances of packages with the `@babel` scope to the latest release',
              "$0 up '@babel/*'"
            ],
            [
              'Upgrade all instances of packages containing the word `jest` to the latest release',
              "$0 up '*jest*'"
            ],
            [
              'Upgrade all instances of packages with the `@babel` scope to 7.0.0',
              "$0 up '@babel/*@7.0.0'"
            ]
          ]
                description: 'Offer various choices, depending on the detected upgrade paths'
              })
                description: "Don't use any semver modifier on the resolved range"
              })
                description: 'Use the `~` semver modifier on the resolved range'
              })
                description: 'Use the `^` semver modifier on the resolved range'
              })
          (0, a.gn)([d.Command.Path('up')], He.prototype, 'execute', null);
            super(...arguments), (this.recursive = !1), (this.json = !1), (this.peers = !1);
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
                    const i = q.sortMap(e.workspaces, e => f.stringifyLocator(e.anchoredLocator)),
                      s = r => {
                        if (o.has(r.locatorHash)) return A.has(r.locatorHash);
                        if ((o.add(r.locatorHash), r.identHash === t))
                          return A.add(r.locatorHash), !0;
                        let i = !1;
                        r.identHash === t && (i = !0);
                          if (!n && r.peerDependencies.has(t.identHash)) continue;
                          const o = e.storedResolutions.get(t.descriptorHash);
                          if (!o)
                            throw new Error(
                              'Assertion failed: The resolution should have been registered'
                            );
                          const A = e.storedPackages.get(o);
                          if (!A)
                            throw new Error(
                              'Assertion failed: The package should have been registered'
                            );
                          s(A) && (i = !0);
                        return i && A.add(r.locatorHash), i;
                      };
                      const r = e.storedPackages.get(t.anchoredLocator.locatorHash);
                      if (!r)
                        throw new Error(
                          'Assertion failed: The package should have been registered'
                        );
                      s(r);
                        if (!A.has(t.locatorHash)) return;
                            children: o
                          };
                          !a.has(t.locatorHash) &&
                            (a.add(t.locatorHash), null === i || !e.tryWorkspaceByLocator(t)))
                            if (!n && t.peerDependencies.has(r.identHash)) continue;
                            const i = e.storedResolutions.get(r.descriptorHash);
                            if (!i)
                              throw new Error(
                                'Assertion failed: The resolution should have been registered'
                              );
                            const A = e.storedPackages.get(i);
                            if (!A)
                              throw new Error(
                                'Assertion failed: The package should have been registered'
                              );
                            l(A, o, r);
                      };
                      const r = e.storedPackages.get(t.anchoredLocator.locatorHash);
                      if (!r)
                        throw new Error(
                          'Assertion failed: The package should have been registered'
                        );
                      l(r, c, null);
                    return g;
                    const i = q.sortMap(e.storedPackages.values(), e => f.stringifyLocator(e)),
                      A = { children: o };
                        A = null;
                        if (!n && r.peerDependencies.has(s.identHash)) continue;
                        const a = e.storedResolutions.get(s.descriptorHash);
                        if (!a)
                          throw new Error(
                            'Assertion failed: The resolution should have been registered'
                          );
                        const c = e.storedPackages.get(a);
                        if (!c)
                          throw new Error(
                            'Assertion failed: The package should have been registered'
                          );
                        if (c.identHash !== t) continue;
                          const e = f.stringifyLocator(r);
                          o[e] = { value: [r, m.Type.LOCATOR], children: i };
                        const g = f.stringifyLocator(c);
                        i[g] = { value: [{ descriptor: s, locator: c }, m.Type.DEPENDENT] };
                    return A;
                  })(t, n, { configuration: e, peers: this.peers });
              separators: 1
            });
        (Je.usage = d.Command.Usage({
          examples: [['Explain why lodash is used in your project', '$0 why lodash']]
                description:
                  'List, for each workspace, what are all the paths that lead to the dependency'
              })
                description: 'Also print the peer dependencies that match the specified name'
              })
          (0, a.gn)([d.Command.Path('why')], Je.prototype, 'execute', null);
            super(...arguments), (this.verbose = !1), (this.json = !1);
              { project: t } = await h.I.find(e, this.context.cwd);
              await p.Pk.start(
                { configuration: e, json: this.json, stdout: this.context.stdout },
                async e => {
                  for (const r of t.workspaces) {
                    const { manifest: n } = r;
                    let i;
                    if (this.verbose) {
                      const e = new Set(),
                        r = new Set();
                      for (const i of E.G.hardDependencies)
                        for (const [o, A] of n.getForScope(i)) {
                          const n = t.tryWorkspaceByDescriptor(A);
                          null === n ? t.workspacesByIdent.has(o) && r.add(A) : e.add(n);
                        }
                      i = {
                        workspaceDependencies: Array.from(e).map(e => e.relativeCwd),
                        mismatchedWorkspaceDependencies: Array.from(r).map(e =>
                          f.stringifyDescriptor(e)
                        )
                      };
                    e.reportInfo(null, '' + r.relativeCwd),
                      e.reportJson({
                        location: r.relativeCwd,
                        name: n.name ? f.stringifyIdent(n.name) : null,
                        ...i
                      });
              )
            ).exitCode();
        (_e.usage = d.Command.Usage({
            '\n      This command will print the list of all workspaces in the project. If both the `-v,--verbose` and `--json` options are set, Yarn will also return the cross-dependencies between each workspaces (useful when you wish to automatically generate Buck / Bazel rules).\n    '
                description: 'Also return the cross-dependencies between workspaces'
              })
          (0, a.gn)([d.Command.Path('workspaces', 'list')], _e.prototype, 'execute', null);
            super(...arguments), (this.args = []);
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd);
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
                n.map(e => {
                  const t = f.convertToIdent(e.locator);
                  return [f.stringifyIdent(t), e];
              o = i.get(this.workspaceName);
              const e = Array.from(i.keys()).sort();
                `Workspace '${
                  this.workspaceName
                }' not found. Did you mean any of the following:\n  - ${e.join('\n  - ')}?`
              );
            return this.cli.run([this.commandName, ...this.args], { cwd: o.cwd });
        (qe.usage = d.Command.Usage({
            ['Run build script on a single workspace', 'yarn workspace components run build']
          ]
          (0, a.gn)([d.Command.Path('workspace')], qe.prototype, 'execute', null);
              default: !1
              default: o.CARET
            }
            qe
          ]
        };
        'use strict';
        r.r(t), r.d(t, { default: () => E, fileUtils: () => n });
        var n = {};
            parseSpec: () => l
          });
          o = r(46009);
          s = /^[^?]*\.(?:tar\.gz|tgz)(?:::.*)?$/;
          g = r(75448);
            n = o.cS.toPortablePath(r);
            path: n
          };
            A = void 0 !== r ? { hash: r } : {};
          return i.makeRange({ protocol: n, source: t, selector: t, params: { ...A, ...o } });
          return i.makeLocator(e, u({ parentLocator: t, path: r, folderHash: n, protocol: o }));
            u = l.localPath
              ? { packageFs: new g.M(o.LZ.root), prefixPath: o.y1.relative(o.LZ.root, l.localPath) }
              : l;
          l !== u && l.releaseFs && l.releaseFs();
            p = o.y1.join(u.prefixPath, s);
                inMemory: n
          );
          return (await p(e, { protocol: t, fetchOptions: r, inMemory: !0 })).getBufferAndClose();
          I = r(46611);
                return !!s.test(e.reference) && !!e.reference.startsWith('file:');
                return null;
                    skipIntegrityCheck: t.skipIntegrityCheck
                  });
                return {
                  packageFs: n,
                  releaseFs: o,
                  prefixPath: i.getIdentVendorPath(e),
                  checksum: A
                };
                    protocol: 'file:'
                        prefixPath: o.y1.relative(o.LZ.root, A.localPath)
                    : A;
                A !== s && A.releaseFs && A.releaseFs();
                  h = await l.readFilePromise(u);
                      stripComponents: 1
                );
                return !!e.reference.startsWith('file:');
                  protocol: 'file:'
                });
                if (o.y1.isAbsolute(n)) return n;
                const A = t.fetcher.getLocalPath(r, t);
                return null === A ? null : o.y1.resolve(A, n);
                    skipIntegrityCheck: t.skipIntegrityCheck
                  });
                  checksum: A
                };
                return p(e, { protocol: 'file:', fetchOptions: t });
            }
                return !!s.test(e.range) && (!!e.range.startsWith('file:') || !!A.test(e.range));
                return !!s.test(e.reference) && !!e.reference.startsWith('file:');
                return !0;
                );
                return [];
                let n = e.range;
                );
                return null;
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  );
                  );
                  bin: n.bin
                };
                return !!e.range.match(A) || !!e.range.startsWith('file:');
                return !!e.reference.startsWith('file:');
                return !1;
                );
                return [];
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  );
                const { path: n, parentLocator: o } = l(e.range);
                if (null === o)
                  throw new Error('Assertion failed: The descriptor should have been bound');
                      params: { locator: i.stringifyLocator(o) }
                );
                    protocol: 'file:'
                  })
                ];
                return null;
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  );
                  );
                  bin: n.bin
                };
            }
          ]
        };
        'use strict';
        r.r(t), r.d(t, { default: () => F, gitUtils: () => n });
        var n = {};
            splitRepoUrl: () => w
          });
          I = r.n(C);
          return { ...process.env, GIT_SSH_COMMAND: 'ssh -o BatchMode=yes' };
          /^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/
        ];
        var B;
          return !!e && m.some(t => !!e.match(t));
          const t = (e = Q(e)).indexOf('#');
          if (-1 === t)
            return { repo: e, treeish: { protocol: B.Head, request: 'master' }, extra: {} };
            n = e.slice(t + 1);
            const e = p().parse(n);
              if ('string' != typeof r)
                throw new Error(`Assertion failed: The ${t} parameter must be a literal string`);
            const t = Object.values(B).find(t => Object.prototype.hasOwnProperty.call(e, t));
            let i, o;
            void 0 !== t ? ((i = t), (o = e[t])) : ((i = B.Head), (o = 'master'));
            for (const t of Object.values(B)) delete e[t];
            return { repo: r, treeish: { protocol: i, request: o }, extra: e };
            const e = n.indexOf(':');
            let t, i;
            );
          var r;
            let t;
            e = e.replace(/^git\+([^:]+):/, '$1:');
              t = I().parse(e);
              t = null;
              (e = e.replace(/^ssh:\/\//, ''));
          return e;
          return o.makeLocator(e, Q(e.reference));
          const r = Q(e, { git: !0 });
            throw new Error(
              `Request to '${r}' has been blocked because of your configuration settings`
            );
          let n;
              strict: !0
            });
            throw ((t.message = `Listing the refs for ${e} failed`), t);
            o = /^([a-f0-9]{40})\t(refs\/[^\n]+)/gm;
          let A;
          for (; null !== (A = o.exec(n.stdout)); ) i.set(A[2], A[1]);
          return i;
              extra: o
                  if (!t.match(/^[a-f0-9]{40}$/)) throw new Error('Invalid commit hash');
                  return p().stringify({ ...o, commit: t });
                  const e = A.get('refs/heads/' + t);
                  if (void 0 === e) throw new Error(`Unknown head ("${t}")`);
                  return p().stringify({ ...o, commit: e });
                  const e = A.get('refs/tags/' + t);
                  if (void 0 === e) throw new Error(`Unknown tag ("${t}")`);
                  return p().stringify({ ...o, commit: e });
                  if (!d().validRange(t)) throw new Error(`Invalid range ("${t}")`);
                        .filter(e => null !== e[0])
                    r = d().maxSatisfying([...e.keys()], t);
                  if (null === r) throw new Error(`No matching range ("${t}")`);
                  return p().stringify({ ...o, commit: e.get(r) });
                  let e;
                  if (null !== (e = a(B.Commit, t))) return e;
                  if (null !== (e = a(B.Tag, t))) return e;
                  if (null !== (e = a(B.Head, t))) return e;
                    : new Error(`Couldn't resolve "${t}" as either a commit, a tag, or a head`);
                  throw new Error(`Invalid Git resolution protocol ("${e}")`);
                return s(e, t);
                return null;
            };
          return `${r}#${s(n, i)}`;
              treeish: { protocol: n, request: i }
            } = w(e);
            if ('commit' !== n) throw new Error('Invalid treeish protocol when cloning');
            const o = Q(r, { git: !0 });
              throw new Error(
                `Request to '${o}' has been blocked because of your configuration settings`
              );
              s = { cwd: A, env: E(), strict: !0 };
              await u.execvp(
                'git',
                ['clone', '-c core.autocrlf=false', o, g.cS.fromPortablePath(A)],
                s
              ),
                await u.execvp('git', ['checkout', '' + i], s);
              throw ((e.message = 'Repository clone failed: ' + e.message), e);
            return A;
          });
          (e.Commit = 'commit'), (e.Head = 'head'), (e.Tag = 'tag'), (e.Semver = 'semver');
        })(B || (B = {}));
          M = r(46611);
              default: 2
            }
                return y(e.reference);
                return null;
                  i = new Map(t.checksums);
                i.set(n.locatorHash, r);
                  s = await this.downloadHosted(n, A);
                if (null !== s) return s;
                  skipIntegrityCheck: t.skipIntegrityCheck
                });
                return {
                  packageFs: a,
                  releaseFs: c,
                  prefixPath: o.getIdentVendorPath(e),
                  checksum: g
                };
                return t.project.configuration.reduceHook(e => e.fetchHostedRepository, null, e, t);
                  i = g.y1.join(r, 'package.tgz');
                  workspace: n.extra.workspace
                });
                const l = await c.xfs.readFilePromise(i);
                      stripComponents: 1
                );
            }
                return y(e.range);
                return y(e.reference);
                return !0;
                return e;
                return [];
                const n = await D(e.range, r.project.configuration);
                return [o.makeLocator(e, n)];
                return null;
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  );
                  );
                  bin: n.bin
                };
            }
          ]
        };
        'use strict';
        r.r(t), r.d(t, { default: () => f });
          u = r.n(l);
          /^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+?)(?:\.git)?(?:#(.*))?$/
        ];
            return !(!(r = e.reference) || !h.some(e => !!r.match(e)));
            var r;
            return null;
                skipIntegrityCheck: t.skipIntegrityCheck
              });
            return { packageFs: i, releaseFs: o, prefixPath: n.getIdentVendorPath(e), checksum: A };
            const r = await i.get(this.getLocatorUrl(e, t), {
              configuration: t.project.configuration
            });
            return await s.xfs.mktempPromise(async i => {
              const l = new a.M(i);
              await o.extractArchiveTo(r, l, { stripComponents: 1 });
                h = c.y1.join(i, 'package.tgz');
                workspace: u.extra.workspace
              });
              const p = await s.xfs.readFilePromise(h);
                stripComponents: 1
              });
            });
              let t;
              for (const r of h) if (((t = e.match(r)), t)) break;
              if (!t) throw new Error(`Input cannot be parsed as a valid GitHub URL ('${e}').`);
              let [, r, n, i, o = 'master'] = t;
              const { commit: A } = u().parse(o);
              return (
                (o = A || o.replace(/[^:]*:/, '')),
                { auth: r, username: n, reponame: i, treeish: o }
              );
            })(e.reference);
            return `https://${r ? r + '@' : ''}github.com/${n}/${i}/archive/${o}.tar.gz`;
              if (null !== e) return e;
              const n = new p();
              if (!n.supports(t, r)) return null;
                return await n.fetch(t, r);
                return null;
            }
          }
        };
        'use strict';
        r.r(t), r.d(t, { default: () => l });
          o = r(72785);
          s = /^https?:/;
          g = r(73632);
                return !!A.test(e.reference) && !!s.test(e.reference);
                return null;
                    skipIntegrityCheck: t.skipIntegrityCheck
                  });
                return {
                  packageFs: i,
                  releaseFs: o,
                  prefixPath: n.getIdentVendorPath(e),
                  checksum: A
                };
                const r = await i.get(e.reference, { configuration: t.project.configuration });
                  stripComponents: 1
                });
            }
                return !!A.test(e.range) && !!s.test(e.range);
                return !!A.test(e.reference) && !!s.test(e.reference);
                return !0;
                return e;
                return [];
                return [n.convertDescriptorToLocator(e)];
                return null;
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  );
                  );
                  bin: n.bin
                };
            }
          ]
        };
        'use strict';
        r.r(t), r.d(t, { default: () => I });
          d = r(31669);
              (this.install = !1);
              throw new h.UsageError('A package.json already exists in the specified directory');
              t = this.install ? (!0 === this.install ? 'latest' : this.install) : null;
            return null !== t ? await this.executeProxy(e, t) : await this.executeRegular(e);
              );
              );
            l.xfs.existsSync(this.context.cwd) ||
              (await l.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }));
            const r = u.y1.join(this.context.cwd, e.get('lockfileFilename'));
            l.xfs.existsSync(r) || (await l.xfs.writeFilePromise(r, ''));
            const n = await this.cli.run(['set', 'version', t]);
            if (0 !== n) return n;
            this.context.stdout.write('\n');
            const i = ['--assume-fresh-project'];
              await l.xfs.mktempPromise(async e => {
                  env: await c.makeScriptEnv({ binFolder: e })
                });
                return t;
            );
            let t = null;
                t = await s.I.find(e, this.context.cwd);
                t = null;
            l.xfs.existsSync(this.context.cwd) ||
              (await l.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }));
              n = Object.fromEntries(e.get('initFields').entries());
                (await l.xfs.mkdirPromise(u.y1.join(this.context.cwd, 'packages'), {
                  recursive: !0
                }),
                (r.workspaceDefinitions = [{ pattern: 'packages/*' }]));
            const i = {};
              this.context.stdout.write(
                (0, d.inspect)(i, { depth: 1 / 0, colors: !0, compact: !1 }) + '\n'
              );
            const o = u.y1.join(this.context.cwd, A.G.fileName);
            await l.xfs.changeFilePromise(o, JSON.stringify(i, null, 2) + '\n');
            const c = u.y1.join(this.context.cwd, 'README.md');
            if (
              (l.xfs.existsSync(c) ||
                (await l.xfs.writeFilePromise(c, `# ${g.stringifyIdent(r.name)}\n`)),
              !t)
            ) {
              const t = u.y1.join(this.context.cwd, u.QS.lockfile);
              await l.xfs.writeFilePromise(t, '');
              const r = ['/.yarn/** linguist-vendored'].map(e => e + '\n').join(''),
                n = u.y1.join(this.context.cwd, '.gitattributes');
              l.xfs.existsSync(n) || (await l.xfs.writeFilePromise(n, r));
                  '#/.pnp.*'
                  .map(e => e + '\n')
                o = u.y1.join(this.context.cwd, '.gitignore');
              l.xfs.existsSync(o) || (await l.xfs.writeFilePromise(o, i));
                '*.{js,json,.yml}': { charset: 'utf-8', indentStyle: 'space', indentSize: 2 }
              };
              f()(A, e.get('initEditorConfig'));
              let s = 'root = true\n';
                s += `\n[${e}]\n`;
                  s += `${e.replace(/[A-Z]/g, e => '_' + e.toLowerCase())} = ${r}\n`;
              const c = u.y1.join(this.context.cwd, '.editorconfig');
                await a.execvp('git', ['init'], { cwd: this.context.cwd });
        (C.usage = h.Command.Usage({
            ['Create a new private package and defines it as a workspace root', 'yarn init -w']
          ]
                description: 'Initialize a private workspace root with a `packages/` directory'
              })
                description:
                  'Initialize a package with a specific bundle that will be locked in the project'
              })
          (0, i.gn)([h.Command.Path('init')], C.prototype, 'execute', null);
              default: null
              default: null
              default: null
              valueDefinition: { description: '', type: n.a2.ANY }
              valueDefinition: { description: '', type: n.a2.ANY }
            }
          commands: [C]
        };
        'use strict';
        r.r(t), r.d(t, { default: () => g });
          A = r(10489);
          c = r(73632);
                return !!e.reference.startsWith('link:');
                  protocol: 'link:'
                });
                if (i.y1.isAbsolute(o)) return o;
                const A = t.fetcher.getLocalPath(r, t);
                return null === A ? null : i.y1.resolve(A, o);
                    protocol: 'link:'
                        prefixPath: i.y1.relative(i.LZ.root, a.localPath)
                    : a;
                a !== c && a.releaseFs && a.releaseFs();
                  l = i.y1.join(c.prefixPath, s);
                      localPath: l
                      discardFromLookup: !0
                    };
                return !!e.reference.startsWith('portal:');
                  protocol: 'portal:'
                });
                if (i.y1.isAbsolute(o)) return o;
                const A = t.fetcher.getLocalPath(r, t);
                return null === A ? null : i.y1.resolve(A, o);
                    protocol: 'portal:'
                        prefixPath: i.y1.relative(i.LZ.root, a.localPath)
                    : a;
                a !== c && a.releaseFs && a.releaseFs();
                  l = i.y1.join(c.prefixPath, s);
                      localPath: l
                      prefixPath: i.LZ.dot
                    };
            }
                return !!e.range.startsWith('link:');
                return !!e.reference.startsWith('link:');
                return !1;
                return n.bindDescriptor(e, { locator: n.stringifyLocator(t) });
                return [];
                const o = e.range.slice('link:'.length);
                return [n.makeLocator(e, 'link:' + i.cS.toPortablePath(o))];
                return null;
                  bin: new Map()
                };
                return !!e.range.startsWith('portal:');
                return !!e.reference.startsWith('portal:');
                return !1;
                return n.bindDescriptor(e, { locator: n.stringifyLocator(t) });
                return [];
                const o = e.range.slice('portal:'.length);
                return [n.makeLocator(e, 'portal:' + i.cS.toPortablePath(o))];
                return null;
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  );
                  );
                  bin: n.bin
                };
            }
          ]
        };
        'use strict';
        r.r(t), r.d(t, { default: () => oe, getPnpPath: () => ie });
          A = r(54143);
          (e[(e.YES = 0)] = 'YES'), (e[(e.NO = 1)] = 'NO'), (e[(e.DEPENDS = 2)] = 'DEPENDS');
        })(n || (n = {}));
              n = r >= 0 ? t.substring(r + 1) : t;
            return s(e, n);
          };
        var c;
          (e[(e.NONE = -1)] = 'NONE'),
            (e[(e.INTENSIVE_CHECK = 9)] = 'INTENSIVE_CHECK');
        })(c || (c = {}));
            if (t.decoupled) return t;
                isHoistBorder: l
                isHoistBorder: l
              h = u.dependencies.get(r);
            return (
              h && h.ident == u.ident && u.dependencies.set(r, u), e.dependencies.set(u.name, u), u
            );
          l = e => {
                  i.add(n);
                      const n = e.dependencies.get(o);
                      n && !t.has(n) && r(n, i);
                  t.add(n);
              };
            for (const t of e.dependencies.values()) e.peerNames.has(t.name) || r(t);
            return t;
            const o = t[t.length - 1];
            if (i.has(o)) return;
            i.add(o);
                const r = new Map([[e.name, [e.ident]]]);
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || r.set(t.name, [t.ident]);
                const n = Array.from(t.keys());
                    i = t.get(r);
                    : i.dependents.size - n.dependents.size;
                });
                    i = t.substring(n.length + 1);
                    let e = r.get(n);
                    e || ((e = []), r.set(n, e)), e.indexOf(i) < 0 && e.push(i);
                return r;
                  : (e => {
                        n = i => {
                            r.add(i);
                              e.dependencies.has(r.name) || t.set(r.name, r);
                            for (const e of i.dependencies.values())
                              i.peerNames.has(e.name) || n(e);
                        };
                      return n(e), t;
                    })(o);
            let c;
              p(e, t, r, a, s, A, n), (c = !1);
                t.length > 1 &&
                  !o.dependencies.has(e) &&
                  (s.delete(e), t.shift(), s.set(e, t[0]), (c = !0));
            } while (c);
                (r.add(i.locator), u(e, [...t, i], r, n), r.delete(i.locator));
              g = new Set();
                  .map(e => m(e))
                  .join('→'));
              h = o.get(r.name);
            let p = h === r.ident && !u;
              let e = !1;
              const n = i.get(r.name);
              if (
                ((e = !n || n.ident === r.ident),
                s && !e && (c = `- filled by: ${m(n.locator)} at ${a}`),
                e)
              )
                    o = i.dependencies.get(r.name);
                    (e = !1), s && (c = `- filled by: ${m(o.locator)} at ${m(i.locator)}`);
                    break;
              p = e;
              let e = !0;
              const n = new Set(r.peerNames);
                const i = t[r];
                  if (i.peerNames.has(o) && i.originalDependencies.has(o)) continue;
                  const A = i.dependencies.get(o);
                    n.delete(o);
                if (!e) break;
              p = e;
              : { isHoistable: p ? n.YES : n.NO, reason: c };
                if (u.has(I)) return;
                  Q = new Map();
                  let g = null;
                        outputReason: s.debugLevel >= c.REASONS
                      const r = w.get(t.name) || new Set();
                      r.add(e.name), w.set(t.name, r);
                      v.add(e), e.ident !== I.ident && Q.set(e, { isHoistable: n.NO, reason: r });
                      for (const n of w.get(e.name) || []) b(I.dependencies.get(n), t, r);
                  };
                let D;
                      .map(e => m(e))
                      .join('→'));
                    b(
                      e,
                      t,
                      `- peer dependency ${m(e.locator)} from parent ${m(
                        I.locator
                      )} was not hoisted to ${D}`
                    );
                    I.dependencies.delete(e.name),
                      I.hoistedDependencies.set(e.name, e),
                      I.reasons.delete(e.name);
                    const t = a.dependencies.get(e.name);
                    if (t) for (const r of e.references) t.references.add(r);
                    else a.ident !== e.ident && (a.dependencies.set(e.name, e), E.add(e));
                  const r = f(e);
                      `${r}, after hoisting dependencies of ${[a, ...t, I]
                        .map(e => m(e.locator))
                        .join('→')}:\n${B(e)}`
                    );
                const S = l(I);
                    const r = Q.get(e);
                    if (
                      (r.isHoistable !== n.YES && I.reasons.set(e.name, r.reason), !e.isHoistBorder)
                    ) {
                      u.add(I);
                      const r = g(I, e);
                      p([...t, I], [...d, I.locator], r, C), u.delete(I);
              };
              C = new Set(l(a));
              (d = C), (C = new Set());
                if (e.locator === a.locator || e.isHoistBorder) continue;
                const t = g(a, e);
                p([], Array.from(r), t, C);
            } while (C.size > 0);
          f = e => {
                if (r.has(e)) return;
                if ((r.add(e), n.has(e))) return;
                const A = new Map(o);
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || A.set(t.name, t);
                        .map(e => m(e.locator))
                        .join('→');
                    const e = o.get(r.name);
                    (e === i && e && e.ident === r.ident) ||
                      t.push(
                        `${s()} - broken peer promise: expected ${r.ident} but found ${
                          e ? e.ident : e
                        }`
                      );
                          `${s()} - broken require promise for ${r.name}: expected ${
                            r.ident
                          }, but found: ${i.ident}`
                      : t.push(
                          `${s()} - broken require promise: no required dependency ${
                            r.locator
                          } found`
                        );
                }
                n.add(e);
                for (const t of e.dependencies.values()) e.peerNames.has(t.name) || i(t, A);
                n.delete(e);
              };
            return i(e, e.dependencies), t.join('\n');
                isHoistBorder: !0
                let n = c.get(e);
                const i = !!n;
                    l = t.hoistingLimits.get(r.locator);
                  (n = {
                    isHoistBorder: !!l && l.has(i)
                    c.set(e, n);
                    t = r => {
                        e.add(r), (r.decoupled = !1);
                        for (const e of r.dependencies.values()) r.peerNames.has(e.name) || t(e);
                    };
                  t(n);
                } else for (const t of e.dependencies) g(t, n);
              };
            for (const t of e.dependencies) g(t, A);
            return A;
          C = e => e.substring(0, e.indexOf('@', 1)),
          I = e => {
                dependencies: new Set()
                const o = r.has(e);
                let A;
                if (t === e) A = i;
                  const { name: t, references: r, locator: n } = e;
                  A = { name: t, identName: C(n), references: r, dependencies: new Set() };
                  r.add(e);
                  for (const t of e.dependencies.values()) e.peerNames.has(t.name) || n(t, e, A);
                  r.delete(e);
              };
            for (const r of e.dependencies.values()) n(r, e, t);
            return t;
          E = e => {
              n = e => {
                const r = (e => `${e.name}@${e.ident}`)(e);
                let n = t.get(r);
                return (
                  n || ((n = { dependents: new Set(), peerDependents: new Set() }), t.set(r, n)), n
                );
                const o = !!r.has(t);
                  r.add(t);
                      n(e).peerDependents.add(t.ident);
                    } else i(t, e);
              };
            for (const t of e.dependencies.values()) e.peerNames.has(t.name) || i(e, t);
            return t;
          m = e => {
              n = e.substring(t + 1);
            if ('workspace:.' === n) return '.';
              const e = (n.indexOf('#') > 0 ? n.split('#')[1] : n).replace('npm:', '');
              return n.startsWith('virtual') ? `v:${r}@${e}` : `${r}@${e}`;
            return '' + r;
          B = e => {
            let t = 0;
              if (t > 5e4 || n.has(e)) return '';
              t++;
              const o = Array.from(e.dependencies.values());
              let A = '';
              n.add(e);
                const s = o[t];
                    c = C(s.locator);
                  (A += `${i}${t < o.length - 1 ? '├─' : '└─'}${
                    (n.has(s) ? '>' : '') +
                    (c !== s.name ? `a:${s.name}:` : '') +
                    m(s.locator) +
                    (a ? ' ' + a : '')
                    (A += r(s, n, `${i}${t < o.length - 1 ? '│ ' : '  '}`));
              return n.delete(e), A;
            };
            return (
              r(e, new Set()) +
              (t > 5e4 ? '\nTree is too large, part of the tree has been dunped\n' : '')
            );
          };
        var y, w;
          (e.HARD = 'HARD'), (e.SOFT = 'SOFT');
            (e.WORKSPACES = 'workspaces'), (e.DEPENDENCIES = 'dependencies'), (e.NONE = 'none');
          })(w || (w = {}));
                    hoistingLimits: t.hoistingLimits || new Map()
                  };
                n.debugLevel >= c.PERF && console.time('hoist');
                const i = d(e, n);
                  const e = f(i);
                  if (e) throw new Error(`${e}, after hoisting finished:\n${B(i)}`);
                return n.debugLevel >= c.REASONS && console.log(B(i)), I(i);
              })(r, { hoistingLimits: n });
            return D(e, i, t);
          v = e => `${e.name}@${e.reference}`;
            s = e.getPackageInformation(e.topLevel);
          if (null === s)
            throw new Error(
              'Assertion failed: Expected the top-level package to have been registered'
            );
          const a = e.findPackageLocator(s.packageLocation);
          if (null === a)
            throw new Error(
              'Assertion failed: Expected the top-level package to have a physical locator'
            );
            g = v(a);
              r = t.project.cwd.split(o.y1.sep);
              const t = n.split(o.y1.sep).slice(r.length);
              let s = e;
                let t = s.children.get(e);
                t || ((t = { children: new Map() }), s.children.set(e, t)), (s = t);
                reference: i.anchoredLocator.reference
              };
                const r = v(t);
                let n = i.get(r);
                n || ((n = new Set()), i.set(r, n)), n.add(e.workspaceLocator);
              for (const r of e.children.values()) n(r, e.workspaceLocator || t);
            };
            for (const t of e.children.values()) n(t, e.workspaceLocator);
                let t = i.get(g);
                t || ((t = new Set()), i.set(g, t)), t.add(e);
              dependencies: new Set()
              var I, E;
              const m = ((e, t) => `${v(t)}:${e}`)(r, g);
              let B = u.get(m);
              const y = !!B;
                    peerNames: s.packagePeers
                  t = n.get(e) || new Set();
                n.set(e, t), t.add(B.name);
              const Q = new Map(s.packageDependencies);
                const e = t.project.workspacesByCwd.get(
                  o.cS.toPortablePath(s.packageLocation.slice(0, -1))
                );
                    ...Array.from(e.manifest.peerDependencies.values(), e => A.stringifyIdent(e)),
                    ...Array.from(e.manifest.peerDependenciesMeta.keys())
                  ]);
                  for (const e of t) Q.has(e) || (Q.set(e, f.get(e) || null), B.peerNames.add(e));
                D = i.get(b);
              if (D) for (const e of D) Q.set(e.name + '$wsroot$', e.reference);
              p.dependencies.add(B);
                  let t = A.parseDescriptor(e);
                  return (
                    A.isVirtualDescriptor(t) && (t = A.devirtualizeDescriptor(t)),
                    t.range.startsWith('portal:')
                  );
                })(m);
                      s = e.getPackageInformation(A);
                    if (null === s)
                      throw new Error(
                        'Assertion failed: Expected the package to have been registered'
                      );
                    const a =
                        null === (I = t.hoistingLimitsByCwd) || void 0 === I ? void 0 : I.get(d),
                      u = a === w.DEPENDENCIES || l === w.DEPENDENCIES || l === w.WORKSPACES;
                    h(r, s, i, B, Q, g, u);
            };
          return (
            h(a.name, s, a, l, s.packageDependencies, o.LZ.dot, !1),
            { packageTree: l, hoistingLimits: n }
          );
        };
                  i = t.getPackageInformation(n);
                if (null === i)
                  throw new Error('Assertion failed: Expected the package to be registered');
                let A, s;
                if (r.pnpifyFs) (s = o.cS.toPortablePath(i.packageLocation)), (A = y.SOFT);
                      : i.packageLocation;
                  (s = o.cS.toPortablePath(r || i.packageLocation)), (A = i.linkType);
                return { linkType: A, target: s };
              })(t, e, r);
              return { locator: v(t), target: A, linkType: i, aliases: n };
            s = e => {
              const [t, r] = e.split('/');
              return r
                ? { scope: (0, o.Zu)(t), name: (0, o.Zu)(r) }
                : { scope: null, name: (0, o.Zu)(t) };
                a.add(e);
                    (e.identName.endsWith('$wsroot$') &&
                      r.identName === e.identName.replace('$wsroot$', ''))
                    continue;
                    d = i(g, a.slice(1));
                    const e = n.get(f);
                      if (e.dirList)
                        throw new Error(
                          `Assertion failed: ${f} cannot merge dir node with leaf node`
                        );
                          r = A.parseLocator(d.locator);
                          throw new Error(
                            `Assertion failed: ${f} cannot merge nodes with different link types`
                          );
                          );
                        d.aliases = [
                          ...d.aliases,
                          ...e.aliases,
                          A.parseLocator(e.locator).reference
                        ];
                    n.set(f, d);
                      r = t.indexOf('node_modules');
                    let i = t.length - 1;
                        A = n.get(e);
                          if (A.dirList.has(r)) break;
                          A.dirList.add(r);
                      } else n.set(e, { dirList: new Set([r]) });
                      i--;
                  c(r, d.linkType === y.SOFT ? d.target : f);
            l = g.target;
          return n.set(l, g), c(t, l), n;
        };
          J = r.n(H);
        const _ = 'node_modules';
            super(...arguments), (this.manifestCache = new Map());
            return [];
            return r.packageFs;
            if ('node-modules' !== this.opts.project.configuration.get('nodeLinker')) return;
                readOnlyArchives: !0
              })
            });
            let r = await z(this.opts.project);
              const e = this.opts.project.configuration.get('bstatePath');
              (await K.xfs.existsPromise(e)) && (await K.xfs.unlinkPromise(e)),
                (r = { locatorMap: new Map(), binSymlinks: new Map(), locationTree: new Map() });
                this.opts.project.workspaces.map(e => {
                  var t, r;
                  const { relativeCwd: i, manifest: o } = e;
                  let s = n;
                      null !==
                        (r =
                          null === (t = o.installConfig) || void 0 === t
                            ? void 0
                            : t.hoistingLimits) && void 0 !== r
                    );
                    const r = A.prettyWorkspace(this.opts.project.configuration, e);
                      `${r}: Invalid 'installConfig.hoistingLimits' value. Expected one of ${Object.values(
                        w
                      ).join(', ')}, using default: "${s}"`
                    );
                  return [i, s];
              a = (e => {
                const t = new Map();
                    let e = t.get(n.locator);
                        aliases: n.aliases
                      e.locations.push(r);
                      n = t.split(o.y1.delimiter).length;
                    return r !== n ? n - r : t.localeCompare(e);
                  });
                return t;
              })(Q(i, { pnpifyFs: !1, hoistingLimitsByCwd: s, project: this.opts.project }));
                    n = new Map([...t]);
                    const e = o.y1.join(t, _);
                      r.children.delete(_);
                      for (const t of n.keys()) null !== o.y1.contains(e, t) && n.delete(t);
                  return { locationTree: r, binSymlinks: n };
                        ? (await K.xfs.mkdirPromise(o.y1.dirname(t), { recursive: !0 }),
                          await Z(o.y1.resolve(e), t))
                        : await $(t, e, { baseFs: r });
                      throw ((r.message = `While persisting ${e} -> ${t} ${r.message}`), r);
                      I.tick();
                  })().then(() => u.splice(u.indexOf(i), 1));
                  u.push(i), u.length > 4 && (await Promise.race(u));
                        (r && r.innerLoop) || (await K.xfs.mkdirPromise(t, { recursive: !0 }));
                        const i = await K.xfs.readdirPromise(e, { withFileTypes: !0 });
                          if (!((r && r.innerLoop) || '.bin' !== A.name)) continue;
                            s = o.y1.join(t, A.name);
                              (await K.xfs.mkdirPromise(s, { recursive: !0 }),
                              await n(i, s, { innerLoop: !0 }))
                            : await K.xfs.copyFilePromise(i, s, J().constants.COPYFILE_FICLONE);
                        throw (
                          ((r && r.innerLoop) ||
                            (n.message = `While cloning ${e} -> ${t} ${n.message}`),
                          n)
                        );
                        (r && r.innerLoop) || I.tick();
                    };
                    await n(e, t, r);
                  })().then(() => u.splice(u.indexOf(n), 1));
                  u.push(n), u.length > 4 && (await Promise.race(u));
                      const t = r.children.get(n);
                      await f(o.y1.join(e, n), i, t);
                      await W(e, { contentsOnly: e === a });
                };
                const r = l.get(e);
                  if ('.' === n) continue;
                  const t = r ? r.children.get(n) : r;
                  await f(o.y1.join(e, n), i, t);
                  te(t.locator, r.locator) ||
                    (await W(e, { contentsOnly: t.linkType === k.U.HARD }));
                    const t = r.children.get(n);
                    await d(o.y1.join(e, n), i, t);
                    await W(e, { contentsOnly: t.linkType === k.U.HARD });
              };
                const r = c.get(e);
                  if ('.' === n) continue;
                  const t = r ? r.children.get(n) : r;
                  await d(o.y1.join(e, n), i, t);
              const C = [];
                  const { locationRoot: i, segments: A } = V(e, { skipPrefix: n.cwd });
                    a = i;
                    for (const e of A)
                      if (((a = o.y1.join(a, e)), (s = s.children.get(e)), !s)) break;
                        i = e.linkType;
                      r !== n && C.push({ srcDir: r, dstDir: n, linkType: i });
                  const { locationRoot: r, segments: A } = V(i, { skipPrefix: n.cwd });
                    g = r;
                    p = i;
                  if (h === p) continue;
                  const f = u.linkType;
                  for (const e of A) a = a.children.get(e);
                        C.push({ srcDir: h, dstDir: p, linkType: f });
                        break;
                  } else C.push({ srcDir: h, dstDir: p, linkType: f });
                E = i.reportProgress(I);
                const e = new Map();
                  (t.linkType !== k.U.SOFT && e.has(t.srcDir)) ||
                    (e.set(t.srcDir, t.dstDir), await h({ ...t }));
                await Promise.all(u), (u.length = 0);
                  const r = e.get(t.srcDir);
                  t.linkType !== k.U.SOFT && t.dstDir !== r && (await p(r, t.dstDir));
                await Promise.all(u), await K.xfs.mkdirPromise(a, { recursive: !0 });
                  const i = new Map();
                      A = new Map();
                        const e = o.y1.join(r[0], n);
                        '' !== n && K.xfs.existsSync(e) && A.set(t, n);
                    i.set(t, A);
                        c = o.y1.contains(r, e);
                        const t = i.get(n.locator);
                          const t = o.y1.join(e, o.cS.toPortablePath(n));
                          a.set((0, o.Zu)(r), t);
                            i = s(n, n, r);
                          i.size > 0 && A.set(e, new Map([...(A.get(e) || new Map()), ...i]));
                          const n = s(o.y1.join(e, r), t, i);
                          for (const [e, t] of n) a.set(e, t);
                      return a;
                    };
                    const t = s(e, e, r);
                    t.size > 0 && A.set(e, new Map([...(A.get(e) || new Map()), ...t]));
                  return A;
                })(t, l, n.cwd, { loadManifest: s });
                      const e = o.y1.join(r, _, '.bin');
                      await K.xfs.removePromise(e);
                      i = e.get(r) || new Map();
                    await K.xfs.mkdirPromise(t, { recursive: !0 });
                          (await K.xfs.removePromise(o.y1.join(t, (0, o.Zu)(e + '.cmd')))));
                        A = o.y1.join(t, e);
                              createPwshFile: !1
                          : (await K.xfs.removePromise(A),
                            await Z(r, A),
                            await K.xfs.chmodPromise(r, 493)));
                    let n = '';
                    (n +=
                      '# Warning: This file is automatically generated. Removing it is fine, but will\n'),
                      (n += '  version: 1\n');
                      s = A.stringifyLocator(e.topLevelWorkspace.anchoredLocator);
                      const i = t.get(A);
                      (n += '\n'), (n += JSON.stringify(A) + ':\n'), (n += '  locations:\n');
                        const r = o.y1.contains(e.cwd, t);
                          throw new Error(
                            `Assertion failed: Expected the path to be within the project (${t})`
                          );
                        n += `    - ${JSON.stringify(r)}\n`;
                        n += '  aliases:\n';
                        for (const e of i.aliases) n += `    - ${JSON.stringify(e)}\n`;
                        n += '  bin:\n';
                          const r = o.y1.contains(e.cwd, t);
                            throw new Error(
                              `Assertion failed: Expected the path to be within the project (${t})`
                            );
                          n += `    ${JSON.stringify(r)}:\n`;
                            const i = o.y1.relative(o.y1.join(t, _), r);
                            n += `      ${JSON.stringify(e)}: ${JSON.stringify(i)}\n`;
                      c = o.y1.join(a, _, '.yarn-state.yml');
                    await K.xfs.changeFilePromise(c, n, { automaticNewlines: !0 });
                  })(n, t, r);
                E.stop();
              loadManifest: this.cachedManifestLoad.bind(this, i, t)
            });
            const c = [];
              if (ee(e)) continue;
                s = { name: A.stringifyIdent(n), reference: n.reference };
                );
                l = await this.getSourceBuildScripts(a, g);
                  (l.length = 0));
              const u = this.opts.project.getDependencyMeta(n, g.version);
                    buildDirective: l
                  });
            return c;
            let i = this.manifestCache.get(r);
            if (i) return i;
              i = await N.G.find(n);
              const s = o.cS.toPortablePath(
                e.getPackageInformation(A.parseLocator(r)).packageLocation
              );
                i = await N.G.find(s, { baseFs: t });
                throw ((e.message = `While loading ${s}: ${e.message}`), e);
            return this.manifestCache.set(r, i), i;
              { scripts: n } = t;
            for (const e of ['preinstall', 'install', 'postinstall'])
              n.has(e) && r.push([M.k.SCRIPT, e]);
            const i = o.y1.resolve(e, 'binding.gyp');
            return (
              !n.has('install') &&
                K.xfs.existsSync(i) &&
                r.push([M.k.SHELLCODE, 'node-gyp rebuild']),
              r
            );
            n = o.y1.join(r, _, '.yarn-state.yml');
          if (!K.xfs.existsSync(n)) return null;
          const i = (0, T.parseSyml)(await K.xfs.readFilePromise(n, 'utf8'));
          if (i.__metadata.version > 1) return null;
            a = new Map();
          delete i.__metadata;
            const i = n.locations.map(e => o.y1.join(r, e)),
              c = n.bin;
                  i = F.getMapWithDefault(a, n);
                  i.set((0, o.Zu)(e), o.cS.toPortablePath([n, _, r].join(o.y1.delimiter)));
              (s.set(e, {
                target: o.LZ.dot,
                linkType: k.U.HARD,
                locations: i,
                aliases: n.aliases || []
              }),
                  c = A.stringifyLocator(a);
                s.set(c, { target: o.LZ.dot, linkType: k.U.HARD, locations: i, aliases: [] });
          return { locatorMap: s, binSymlinks: a, locationTree: X(s, { skipPrefix: e.cwd }) };
              throw new Error(
                "Assertion failed: trying to remove dir that doesn't contain node_modules: " + e
              );
                if ((await K.xfs.lstatPromise(e)).isSymbolicLink())
                  return void (await K.xfs.unlinkPromise(e));
              const r = await K.xfs.readdirPromise(e, { withFileTypes: !0 });
                const r = o.y1.join(e, (0, o.Zu)(n.name));
                  ? (n.name !== _ || (t && t.innerLoop)) &&
                    (await W(r, { innerLoop: !0, contentsOnly: !1 }))
                  : await K.xfs.unlinkPromise(r);
              t.contentsOnly || (await K.xfs.rmdirPromise(e));
              if ('ENOENT' !== e.code && 'ENOTEMPTY' !== e.code) throw e;
            const r = o.y1.contains(t, e);
              );
            const n = r.split(o.y1.sep).filter(e => '' !== e),
              A = n.slice(0, i).join(o.y1.sep);
            return { locationRoot: o.y1.join(t, A), segments: n.slice(i) };
            const r = new Map();
            if (null === e) return r;
            const n = () => ({ children: new Map(), linkType: k.U.HARD });
                  const e = F.getFactoryWithDefault(r, A.target, n);
                  (e.locator = i), (e.linkType = A.linkType);
                const { locationRoot: o, segments: s } = V(e, { skipPrefix: t });
                let a = F.getFactoryWithDefault(r, o, n);
                  const t = s[e];
                    const e = F.getFactoryWithDefault(a.children, t, n);
                    a.children.set(t, e), (a = e);
                  e === s.length - 1 && ((a.locator = i), (a.linkType = A.linkType));
            return r;
            let r;
              'win32' === process.platform && (r = K.xfs.lstatSync(e));
              : K.xfs.symlinkPromise(e, t, 'junction');
            await K.xfs.mkdirPromise(e, { recursive: !0 });
                  const n = await r.lstatPromise(t);
                  await r.copyFilePromise(t, e);
                  const i = 511 & n.mode;
                  420 !== i && (await K.xfs.chmodPromise(e, i));
                    );
                    const n = await r.readlinkPromise(t);
                    await Z(o.y1.resolve(o.y1.dirname(e), n), e);
              };
                a = o.y1.join(e, (0, o.Zu)(s.name));
              s.isDirectory()
                ? (s.name !== _ || n) && (await $(a, i, { baseFs: r, innerLoop: !0 }))
                : await A(a, i, s);
          };
          let t = A.parseDescriptor(e);
          return (
            A.isVirtualDescriptor(t) && (t = A.devirtualizeDescriptor(t)),
            t.range.startsWith('link:')
          );
          if (!e || !t) return e === t;
          let r = A.parseLocator(e);
          A.isVirtualLocator(r) && (r = A.devirtualizeLocator(r));
          let n = A.parseLocator(t);
          return A.isVirtualLocator(n) && (n = A.devirtualizeLocator(n)), A.areLocatorsEqual(r, n);
        };
            super(...arguments), (this.mode = 'loose');
            return new ne(e);
            super(...arguments), (this.mode = 'loose');
            if (this.opts.project.configuration.get('pnpMode') !== this.mode) return;
                  readOnlyArchives: !0
                })
              i = new Map();
            e.fallbackPool = i;
                  n = A.stringifyIdent(r);
                n === e ? i.set(e, r.reference) : i.set(e, [n, r.reference]);
              c = n.get(a);
            if (void 0 === c) throw new Error('Assertion failed: Expected a root junction point');
            if ('target' in c)
              throw new Error(
                'Assertion failed: Expected the root junction point to be a directory'
              );
                r = n.get(t);
              if (void 0 === r)
                throw new Error('Assertion failed: Expected the child to have been registered');
              if ('target' in r) s(e, r);
                    A = n.get(r);
                  if (void 0 === A)
                    throw new Error(
                      'Assertion failed: Expected the subchild to have been registered'
                    );
                  if (!('target' in A))
                    throw new Error('Assertion failed: Expected the leaf junction to be a package');
                  s(`${e}/${i}`, A);
            return super.finalizeInstallWithPnp(e);
        const ie = e => o.y1.join(e.cwd, '.pnp.js'),
                default: 'none'
              }
                  return 'node-modules' === t.project.configuration.get('nodeLinker');
                  const r = t.project.tryWorkspaceByLocator(e);
                  if (r) return r.cwd;
                  const n = await z(t.project, { unrollAliases: !0 });
                    );
                  const i = n.locatorMap.get(A.stringifyLocator(e));
                    );
                    throw ((r.code = 'LOCATOR_NOT_INSTALLED'), r);
                  return i.locations[0];
                  const r = await z(t.project, { unrollAliases: !0 });
                  if (null === r) return null;
                    skipPrefix: t.project.cwd
                  });
                  let s = r.locationTree.get(n);
                  if (!s) return null;
                  let a = s.locator;
                    if (((s = s.children.get(e)), !s)) break;
                    a = s.locator || a;
                  return A.parseLocator(a);
                  return new q({ ...e, skipIncompatiblePackageLinking: !0 });
              re
            ]
          };
        'use strict';
        r.r(t), r.d(t, { default: () => V });
          f = r(40822);
          (e.All = 'all'), (e.Production = 'production'), (e.Development = 'development');
            (e.Info = 'info'),
              (e.Low = 'low'),
              (e.Moderate = 'moderate'),
              (e.High = 'high'),
              (e.Critical = 'critical');
          })(i || (i = {}));
          I = r(71643);
        const E = [i.Info, i.Low, i.Moderate, i.High, i.Critical];
            i = e => {
              n.has(e) || (n.add(e), r.push(e));
            };
          for (const e of t) i(e);
          const o = new Set();
              n = e.storedResolutions.get(t);
            if (void 0 === n)
              throw new Error('Assertion failed: Expected the resolution to have been registered');
            const A = e.storedPackages.get(n);
              o.add(t);
              for (const e of A.dependencies.values()) i(e.descriptorHash);
          return o;
            i = n.map(e => e.manifest),
            o = new Set(i.map(e => [...e.dependencies].map(([e, t]) => e)).flat()),
            A = new Set(i.map(e => [...e.devDependencies].map(([e, t]) => e)).flat()),
            s = n.map(e => [...e.dependencies.values()]).flat(),
            a = s.filter(e => o.has(e.identHash)).map(e => e.descriptorHash),
            c = s.filter(e => A.has(e.identHash)).map(e => e.descriptorHash),
            l = m(e, c);
          return (u = l), (h = g), new Set([...u].filter(e => !h.has(e)));
          var u, h;
          const t = {};
          for (const r of e) t[d.stringifyIdent(r)] = d.parseRange(r.range).selector;
          return t;
          if (void 0 === e) return new Set();
            r = E.slice(t);
          return new Set(r);
          var r;
              n = {};
            for (const t of r) n[t] = e[t];
            return n;
          })(e, t);
          for (const e of Object.keys(n)) if (null !== (r = n[e]) && void 0 !== r && r) return !0;
          return !1;
              (this.severity = i.Info);
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd);
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
                  A = [];
                  for (const e of o) for (const t of e.manifest.dependencies.values()) A.push(t);
                const s = [];
                  for (const e of o) for (const t of e.manifest.devDependencies.values()) s.push(t);
                return y([...A, ...s].filter(e => null === d.parseRange(e.range).protocol));
                var n;
                  o = {};
                    dev: i.has(d.convertLocatorToDescriptor(t).descriptorHash)
                  };
                return o;
              })(t, r, { all: this.all });
                Object.prototype.hasOwnProperty.call(i, e) ? (A[e].requires = {}) : delete A[e];
              E = p.npmConfigUtils.getPublishRegistry(r.manifest, { configuration: e });
            let m;
            const v = await c.h.start(
              { configuration: e, stdout: this.context.stdout },
              async () => {
                try {
                  m = await p.npmHttpUtils.post('/-/npm/v1/security/audits/quick', f, {
                    authType: p.npmHttpUtils.AuthType.NO_AUTH,
                    configuration: e,
                    jsonResponse: !0,
                    registry: E
                  });
                } catch (e) {
                  throw 'HTTPError' !== e.name ? e : new g.lk(l.b.EXCEPTION, e.toString());
                }
            );
            if (v.hasErrors()) return v.exitCode();
            const b = Q(m.metadata.vulnerabilities, this.severity);
                      n = { children: r };
                    let i = Object.values(e.advisories);
                      const e = w(t);
                      i = i.filter(t => e.has(t.severity));
                    for (const e of C.sortMap(i, e => e.module_name))
                        value: I.tuple(I.Type.RANGE, e.findings.map(e => e.version).join(', ')),
                            value: I.tuple(I.Type.NO_HINT, e.severity)
                            value: I.tuple(I.Type.RANGE, e.vulnerable_versions)
                            value: I.tuple(I.Type.RANGE, e.patched_versions)
                                    .map(e => e.paths)
                                    .map(e => e.split('>')[0])
                            )
                            value: I.tuple(I.Type.NO_HINT, e.recommendation.replace(/\n/g, ' '))
                          }
                        }
                      };
                    return n;
              );
                {
                  configuration: e,
                  includeFooter: !1,
                  json: this.json,
                  stdout: this.context.stdout
                },
                async e => {
                  e.reportJson(m), b || e.reportInfo(l.b.EXCEPTION, 'No audit suggestions');
            ).exitCode();
        (v.usage = f.Command.Usage({
            e => `\`${e}\``
              'yarn npm audit'
              'yarn npm audit --environment production'
            [
              'Output moderate (or more severe) vulnerabilities',
              'yarn npm audit --severity moderate'
            ]
          ]
          (0, A.gn)([f.Command.Path('npm', 'audit')], v.prototype, 'execute', null);
          M = r(31669);
            super(...arguments), (this.json = !1);
              r =
                void 0 !== this.fields ? new Set(['name', ...this.fields.split(/\s*,\s*/)]) : null,
              n = [];
            let i = !1;
              async o => {
                  let s;
                    const e = t.topLevelWorkspace;
                      throw new f.UsageError(
                        "Missing 'name' field in " + D().join(e.cwd, 'package.json')
                      );
                    s = d.makeDescriptor(e.manifest.name, 'unknown');
                  } else s = d.parseDescriptor(A);
                  const a = p.npmHttpUtils.getIdentUrl(s);
                  let c;
                        jsonResponse: !0
                    );
                      : new g.lk(l.b.EXCEPTION, e.toString());
                  const u = Object.keys(c.versions).sort(k().compareLoose);
                  let h = c['dist-tags'].latest || u[u.length - 1];
                    const t = k().maxSatisfying(u, s.range);
                          `Unmet range ${d.prettyRange(
                            e,
                            s.range
                          )}; falling back to the latest version`
                        (i = !0));
                        `Invalid range ${d.prettyRange(
                          e,
                          s.range
                        )}; falling back to the latest version`
                      (i = !0));
                    I = { ...c, ...C, version: h, versions: u };
                  let E;
                    E = {};
                      const r = I[t];
                            `The '${t}' field doesn't exist inside ${d.prettyIdent(
                              e,
                              s
                            )}'s informations`
                          (i = !0));
                  } else this.json || (delete I.dist, delete I.readme, delete I.users), (E = I);
                  o.reportJson(E), this.json || n.push(E);
            );
            M.inspect.styles.name = 'cyan';
                this.context.stdout.write(
                  (0, M.inspect)(e, { depth: 1 / 0, colors: !0, compact: !1 }) + '\n'
                );
            return A.exitCode();
            const t = [];
            for (let r of e) (r = N(r)), r && t.push(r);
            return t;
            const t = {};
              if (r.startsWith('_')) continue;
              const n = N(e[r]);
              n && (t[r] = n);
            return t;
          return e || null;
        (F.usage = f.Command.Usage({
              'yarn npm info react'
              'yarn npm info react --json'
            ['Show a few fields of react', 'yarn npm info react --fields homepage,repository']
          ]
                description: 'A comma-separated list of manifest fields that should be displayed'
              })
          (0, A.gn)([f.Command.Path('npm', 'info')], F.prototype, 'execute', null);
        var R = r(61899);
            super(...arguments), (this.publish = !1);
                scope: this.scope
              });
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
                        password: process.env.TEST_NPM_PASSWORD || ''
                      };
                    t.reportInfo(l.b.UNNAMED, 'Logging in to ' + e);
                    let i = !1;
                      (i = !0));
                    t.reportSeparator();
                        stdout: n
                        stdout: n
                      }
                    ]);
                    return t.reportSeparator(), { name: o, password: A };
                    stdout: this.context.stdout
                    authType: p.npmHttpUtils.AuthType.NO_AUTH
                  });
                    const i = e => r => {
                          o = C.isIndexableObject(i) ? i : {};
                        return { ...n, [e]: { ...o, npmAuthToken: t } };
                      A = n ? { npmScopes: i(n) } : { npmRegistries: i(e) };
                    return await o.VK.updateHomeConfiguration(A);
                );
            ).exitCode();
                type: p.npmConfigUtils.RegistryType.PUBLISH_REGISTRY
                configuration: r
            : p.npmConfigUtils.getDefaultRegistry({ configuration: r });
        (K.usage = f.Command.Usage({
            [
              'Login to the registry linked to the @my-scope registry',
              'yarn npm login --scope my-scope'
            ],
            ['Login to the publish registry for the current package', 'yarn npm login --publish']
          ]
                description: 'Login to the registry configured for a given scope'
              })
          (0, A.gn)([f.Command.Path('npm', 'login')], K.prototype, 'execute', null);
        const x = new Set(['npmAuthIdent', 'npmAuthToken']);
            super(...arguments), (this.publish = !1), (this.all = !1);
                var t;
                    scope: this.scope
                  i = d.makeIdent(null !== (t = this.scope) && void 0 !== t ? t : null, 'pkg');
                return !p.npmConfigUtils
                  .getAuthConfiguration(r, { configuration: n, ident: i })
                  .get('npmAuthToken');
              };
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
                      const e = e => {
                        let t = !1;
                        const r = C.isIndexableObject(e) ? { ...e } : {};
                        r.npmAuthToken && (delete r.npmAuthToken, (t = !0));
                        for (const e of Object.keys(r)) T(r, e) && (t = !0);
                        if (0 !== Object.keys(r).length) return t ? r : e;
                      };
                        npmScopes: e
                      });
                  );
                const n = await L({
                  configuration: e,
                  cwd: this.context.cwd,
                  publish: this.publish
                });
                      );
            ).exitCode();
          const r = e[t];
          if (!C.isIndexableObject(r)) return !1;
          const n = new Set(Object.keys(r));
          if ([...x].every(e => !n.has(e))) return !1;
          for (const e of x) n.delete(e);
          if (0 === n.size) return (e[t] = void 0), !0;
          const i = { ...r };
          for (const e of x) delete i[e];
          return (e[t] = i), !0;
            [e]: e => {
              const r = C.isIndexableObject(e) ? e : {};
              if (!Object.prototype.hasOwnProperty.call(r, t)) return e;
                o = new Set(Object.keys(i));
              if ([...x].every(e => !o.has(e))) return e;
              for (const e of x) o.delete(e);
                if (1 === Object.keys(r).length) return;
                return { ...r, [t]: void 0 };
              const A = {};
              for (const e of x) A[e] = void 0;
              return { ...r, [t]: { ...i, ...A } };
            }
          });
        (P.usage = f.Command.Usage({
            ['Logout of all registries', 'yarn npm logout --all']
          ]
                description: 'Logout of the registry configured for a given scope'
              })
          (0, A.gn)([f.Command.Path('npm', 'logout')], P.prototype, 'execute', null);
          j = r(49881);
            super(...arguments), (this.tag = 'latest'), (this.tolerateRepublish = !1);
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd);
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd);
            if (r.manifest.private)
              throw new f.UsageError('Private workspaces cannot be published');
              );
            await t.restoreInstallState();
              A = p.npmConfigUtils.getPublishRegistry(r.manifest, { configuration: e });
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async t => {
                      jsonResponse: !0
                    });
                      );
                      return void t.reportWarning(
                        l.b.UNNAMED,
                        `Registry already knows about version ${i}; skipping.`
                      );
                    if ('HTTPError' !== e.name) throw e;
                      );
                    const i = await j.packUtils.genPackList(r);
                    for (const e of i) t.reportInfo(null, e);
                        registry: A
                      });
                        jsonResponse: !0
                      });
                      if ('HTTPError' !== e.name) throw e;
                            : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`;
                        t.reportError(l.b.NETWORK_ERROR, r);
                  t.hasErrors() || t.reportInfo(l.b.UNNAMED, 'Package archive published');
            ).exitCode();
        (Y.usage = f.Command.Usage({
          examples: [['Publish the active workspace', 'yarn npm publish']]
                description: 'The access for the published package (public or restricted)'
              })
                description: 'The tag on the registry that the package should be attached to'
              })
                description:
                  'Warn and exit when republishing an already existing version of a package'
              })
          (0, A.gn)([f.Command.Path('npm', 'publish')], Y.prototype, 'execute', null);
        var G = r(46009);
            super(...arguments), (this.json = !1);
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd);
            let n;
            if (void 0 !== this.package) n = d.parseIdent(this.package);
              if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd);
              if (!r.manifest.name)
                throw new f.UsageError(
                  "Missing 'name' field in " + G.y1.join(r.cwd, G.QS.manifest)
                );
              n = r.manifest.name;
                    locator: d.makeLocator(n, t)
                  })
                }))
              };
            return u.emitTree(A, {
              configuration: e,
              json: this.json,
              stdout: this.context.stdout
            });
          const r = `/-/package${p.npmHttpUtils.getIdentUrl(e)}/dist-tags`;
          return p.npmHttpUtils
            .get(r, { configuration: t, ident: e, jsonResponse: !0 })
            .catch(e => {
              throw 'HTTPError' !== e.name
                ? e
                : 404 === e.response.statusCode
                ? new g.lk(l.b.EXCEPTION, 'Package not found')
                : new g.lk(l.b.EXCEPTION, e.toString());
            });
        (H.usage = f.Command.Usage({
          examples: [['List all tags of package `my-pkg`', 'yarn npm tag list my-pkg']]
          (0, A.gn)([f.Command.Path('npm', 'tag', 'list')], H.prototype, 'execute', null);
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd);
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd);
              i = n.range;
              throw new f.UsageError(
                `The range ${I.pretty(e, n.range, I.Type.RANGE)} must be a valid semver version`
              );
              u = I.pretty(e, this.tag, I.Type.CODE);
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async t => {
                const r = await J(n, e);
                  t.reportWarning(l.b.UNNAMED, `Tag ${u} is already set to version ${g}`);
                  const t = `/-/package${p.npmHttpUtils.getIdentUrl(
                    n
                  )}/dist-tags/${encodeURIComponent(this.tag)}`;
                    jsonResponse: !0
                  });
                  if ('HTTPError' !== e.name) throw e;
                        : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`;
                    t.reportError(l.b.NETWORK_ERROR, r);
                t.hasErrors() ||
                  t.reportInfo(l.b.UNNAMED, `Tag ${u} added to version ${g} of package ${c}`);
            ).exitCode();
        (_.usage = f.Command.Usage({
              'yarn npm tag add my-pkg@2.3.4-beta.4 beta'
            ]
          ]
          (0, A.gn)([f.Command.Path('npm', 'tag', 'add')], _.prototype, 'execute', null);
        var q = r(15966);
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd);
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd);
              g = await J(n, e);
              throw new f.UsageError(`${A} is not a tag of package ${c}`);
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async t => {
                  const t = `/-/package${p.npmHttpUtils.getIdentUrl(
                    n
                  )}/dist-tags/${encodeURIComponent(this.tag)}`;
                    jsonResponse: !0
                  });
                  if ('HTTPError' !== e.name) throw e;
                        : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`;
                    t.reportError(l.b.NETWORK_ERROR, r);
                t.hasErrors() || t.reportInfo(l.b.UNNAMED, `Tag ${A} removed from package ${c}`);
            ).exitCode();
        (z.schema = q.object().shape({ tag: q.string().notOneOf(['latest']) })),
            details:
              '\n      This command will remove a tag from a package from the npm registry.\n    ',
            examples: [
              ['Remove the `beta` tag from package `my-pkg`', 'yarn npm tag remove my-pkg beta']
            ]
          (0, A.gn)([f.Command.Path('npm', 'tag', 'remove')], z.prototype, 'execute', null);
            super(...arguments), (this.publish = !1);
            const e = await o.VK.find(this.context.cwd, this.context.plugins);
            let t;
                    type: p.npmConfigUtils.RegistryType.PUBLISH_REGISTRY
                ? p.npmConfigUtils.getPublishRegistry(
                    (await (0, s.openWorkspace)(e, this.context.cwd)).manifest,
                    {
                      configuration: e
                    }
                  )
                : p.npmConfigUtils.getDefaultRegistry({ configuration: e });
              await h.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
                    ident: this.scope ? d.makeIdent(this.scope, '') : void 0
                  });
                  r.reportInfo(l.b.UNNAMED, n.username);
                  if ('HTTPError' !== e.name) throw e;
                    : r.reportError(l.b.AUTHENTICATION_INVALID, e.toString());
            ).exitCode();
        (W.usage = f.Command.Usage({
            ['Print username for the registry on a given scope', 'yarn npm whoami --scope company']
          ]
                description: 'Print username for the registry configured for a given scope'
              })
            [
              f.Command.Boolean('--publish', {
                description: 'Print username for the publish registry'
              })
            ],
          (0, A.gn)([f.Command.Path('npm', 'whoami')], W.prototype, 'execute', null);
              default: null
            }
          commands: [v, F, K, P, Y, _, H, z, W]
        };
        'use strict';
            npmPublishUtils: () => o
          });
        var n = {};
            normalizeRegistry: () => I
          });
        var i = {};
            put: () => k
          });
        var o = {};
        r.r(o), r.d(o, { makePublishBody: () => J });
          g = r.n(c);
          C = r(78835);
          return e.replace(/\/$/, '');
            : B({ configuration: t, type: l.PUBLISH_REGISTRY });
          const n = w(e, { configuration: t });
          if (null === n) return B({ configuration: t, type: r });
          const i = n.get(r);
          return null === i ? B({ configuration: t, type: r }) : I(i);
          const r = e.get(t);
          return I(null !== r ? r : e.get(l.FETCH_REGISTRY));
            n = r.get(e);
          if (void 0 !== n) return n;
          const i = r.get(e.replace(/^[a-z]+:/, ''));
          return void 0 !== i ? i : null;
          if (null === e) return null;
          const r = t.get('npmScopes').get(e);
          return r || null;
          const n = r && w(r.scope, { configuration: t });
          if (
            (null == n ? void 0 : n.get('npmAuthIdent')) ||
            (null == n ? void 0 : n.get('npmAuthToken'))
          )
            return n;
          return y(e, { configuration: t }) || t;
                      var n;
                      if (void 0 === t || void 0 === t.authorization) return 'an anonymous user';
                          jsonResponse: !0
                        });
                        return null !== (n = i.username) && void 0 !== n ? n : 'an unknown user';
                        return 'an unknown user';
            );
          return e.scope ? `/@${e.scope}%2f${e.name}` : '/' + e.name;
        async function D(
          e,
          { configuration: t, headers: r, ident: n, authType: i, registry: o, ...A }
        ) {
            throw new Error('Assertion failed: The registry should be a string');
          const s = F(o, { authType: i, configuration: t, ident: n });
          let a;
          s && (r = { ...r, authorization: s });
            a = new C.URL(e);
            a = new C.URL(o + e);
            return await h.get(a.href, { configuration: t, headers: r, ...A });
            throw (await v(e, { registry: o, configuration: t, headers: r }), e);
          {
            attemptedAs: r,
            configuration: n,
            headers: i,
            ident: o,
            authType: A = u.ALWAYS_AUTH,
            registry: s,
            ...a
          }
            throw new Error('Assertion failed: The registry should be a string');
          const c = F(s, { authType: A, configuration: n, ident: o });
          c && (i = { ...i, authorization: c });
            return await h.post(s + e, t, { configuration: n, headers: i, ...a });
            if (!R(o))
              throw (await v(o, { attemptedAs: r, registry: s, configuration: n, headers: i }), o);
              c = { ...i, ...K(A) };
              return await h.post(`${s}${e}`, t, { configuration: n, headers: c, ...a });
              throw (await v(e, { attemptedAs: r, registry: s, configuration: n, headers: i }), e);
          {
            attemptedAs: r,
            configuration: n,
            headers: i,
            ident: o,
            authType: A = u.ALWAYS_AUTH,
            registry: s,
            ...a
          }
            throw new Error('Assertion failed: The registry should be a string');
          const c = F(s, { authType: A, configuration: n, ident: o });
          c && (i = { ...i, authorization: c });
            return await h.put(s + e, t, { configuration: n, headers: i, ...a });
            if (!R(o))
              throw (await v(o, { attemptedAs: r, registry: s, configuration: n, headers: i }), o);
              c = { ...i, ...K(A) };
              return await h.put(`${s}${e}`, t, { configuration: n, headers: c, ...a });
              throw (await v(e, { attemptedAs: r, registry: s, configuration: n, headers: i }), e);
          {
            attemptedAs: t,
            configuration: r,
            headers: n,
            ident: i,
            authType: o = u.ALWAYS_AUTH,
            registry: A,
            ...s
          }
            throw new Error('Assertion failed: The registry should be a string');
          const a = F(A, { authType: o, configuration: r, ident: i });
          a && (n = { ...n, authorization: a });
            return await h.del(A + e, { configuration: r, headers: n, ...s });
            if (!R(i))
              throw (await v(i, { attemptedAs: t, registry: A, configuration: r, headers: n }), i);
              a = { ...n, ...K(o) };
              return await h.del(`${A}${e}`, { configuration: r, headers: a, ...s });
              throw (await v(e, { attemptedAs: t, registry: A, configuration: r, headers: n }), e);
                  return e.get('npmAlwaysAuth');
                  return !0;
                  return !1;
                  throw new Error('Unreachable');
            })(i, t);
          if (!o) return null;
          if (i.get('npmAuthToken')) return 'Bearer ' + i.get('npmAuthToken');
          if (i.get('npmAuthIdent')) return 'Basic ' + i.get('npmAuthIdent');
            throw new p.lk(
              f.b.AUTHENTICATION_NOT_FOUND,
              'No authentication configured for request'
            );
          return null;
          if (process.env.TEST_ENV) return process.env.TEST_NPM_2FA_TOKEN || '';
            onCancel: () => process.exit(130)
          });
          return e;
          if ('HTTPError' !== e.name) return !1;
              .map(e => e.toLowerCase())
              .includes('otp');
            return !1;
          return { 'npm-otp': e };
          (e.FETCH_REGISTRY = 'npmRegistryServer'), (e.PUBLISH_REGISTRY = 'npmPublishRegistry');
            (e[(e.NO_AUTH = 0)] = 'NO_AUTH'),
              (e[(e.ALWAYS_AUTH = 3)] = 'ALWAYS_AUTH');
          })(u || (u = {}));
            if (!e.reference.startsWith('npm:')) return !1;
            const r = new C.URL(e.reference);
            return !!g().valid(r.pathname) && !r.searchParams.has('__archiveUrl');
            return null;
                skipIntegrityCheck: t.skipIntegrityCheck
              });
            return { packageFs: n, releaseFs: i, prefixPath: s.getIdentVendorPath(e), checksum: o };
            let r;
              r = await D(L.getLocatorUrl(e), { configuration: t.project.configuration, ident: e });
                ident: e
              });
              stripComponents: 1
            });
            let n = m(e.scope, { configuration: r });
            const i = L.getLocatorUrl(e);
              (n = n.replace(
                /^https:\/\/registry\.npmjs\.org($|\/)/,
                'https://registry.yarnpkg.com$1'
              )),
              (t = t.replace(
                /^https:\/\/registry\.npmjs\.org($|\/)/,
                'https://registry.yarnpkg.com$1'
              )) ===
                n + i || t === n + i.replace(/%2f/g, '/')
            );
            const t = g().clean(e.reference.slice('npm:'.length));
              );
            return `${b(e)}/-/${e.name}-${t}.tgz`;
          T = r(32485);
          U = /\b(node-gyp|prebuild-install)\b/;
        var j = r(52779);
          H = r(10129);
            l = H.Sd(t).toString();
                : 'public');
            p = new C.URL(`${c}/-/${h}`, i);
                length: t.length
              }
                dist: { shasum: g, integrity: l, tarball: p.toString() }
              }
            }
          };
              description:
                "URL of the selected npm registry (note: npm enterprise isn't supported)",
              default: !1
              description:
                'Authentication identity for the npm registry (_auth in npm and yarn v1)',
              default: null
              description:
                'Authentication token for the npm registry (_authToken in npm and yarn v1)',
              default: null
            }
              default: null
              description:
                "URL of the selected npm registry (note: npm enterprise isn't supported)",
              default: 'https://registry.yarnpkg.com'
            }
                valueDefinition: { description: '', type: A.a2.SHAPE, properties: { ..._, ...q } }
                valueDefinition: { description: '', type: A.a2.SHAPE, properties: { ..._ } }
              }
                  if (!e.reference.startsWith('npm:')) return !1;
                  const { selector: r, params: n } = s.parseRange(e.reference);
                  return !!g().valid(r) && null !== n && 'string' == typeof n.__archiveUrl;
                  return null;
                      skipIntegrityCheck: t.skipIntegrityCheck
                    });
                    checksum: o
                  };
                  const { params: r } = s.parseRange(e.reference);
                    throw new Error(
                      'Assertion failed: The archiveUrl querystring parameter should have been available'
                    );
                    ident: e
                  });
                    stripComponents: 1
                  });
              L
                  return (
                    !!e.range.startsWith('npm:') &&
                    !!s.tryParseDescriptor(e.range.slice('npm:'.length), !0)
                  );
                  return !1;
                  throw new Error('Unreachable');
                  return e;
                  const r = s.parseDescriptor(e.range.slice('npm:'.length), !0);
                  return t.resolver.getResolutionDependencies(r, t);
                  const n = s.parseDescriptor(e.range.slice('npm:'.length), !0);
                  return await r.resolver.getCandidates(n, t, r);
                  const n = s.parseDescriptor(e.range.slice('npm:'.length), !0);
                  return r.resolver.getSatisfying(n, t, r);
                  throw new Error('Unreachable');
                  return (
                    !!e.range.startsWith('npm:') && !!P.validRange(e.range.slice('npm:'.length))
                  );
                  if (!e.reference.startsWith('npm:')) return !1;
                  const { selector: r } = s.parseRange(e.reference);
                  return !!g().valid(r);
                  return !0;
                  return e;
                  return [];
                  const n = P.validRange(e.range.slice('npm:'.length));
                  if (null === n)
                    throw new Error('Expected a valid range, got ' + e.range.slice('npm:'.length));
                      jsonResponse: !0
                      .map(e => new (g().SemVer)(e))
                      .filter(e => n.test(e)),
                    A = o.filter(e => !i.versions[e.raw].deprecated),
                    a = A.length > 0 ? A : o;
                    a.map(t => {
                        o = i.versions[t.raw].dist.tarball;
                        configuration: r.project.configuration
                        : s.bindLocator(n, { __archiveUrl: o });
                  );
                  const n = P.validRange(e.range.slice('npm:'.length));
                  if (null === n)
                    throw new Error('Expected a valid range, got ' + e.range.slice('npm:'.length));
                    .map(e => {
                        return new (g().SemVer)(e.slice('npm:'.length));
                        return null;
                    .filter(e => null !== e)
                    .filter(e => n.test(e))
                    .map(t => s.makeLocator(e, 'npm:' + t.raw));
                    n = g().clean(r);
                    );
                    jsonResponse: !0
                  });
                    throw new p.lk(
                      f.b.REMOTE_INVALID,
                      'Registry returned invalid data for - missing "versions" field'
                    );
                    throw new p.lk(
                      f.b.REMOTE_NOT_FOUND,
                      `Registry failed to return reference "${n}"`
                    );
                  const o = new x.G();
                  if (
                    (o.load(i.versions[n]),
                    !o.dependencies.has(O.identHash) && !o.peerDependencies.has(O.identHash))
                  )
                          );
                        break;
                        `${s.prettyLocator(t.project.configuration, e)} is deprecated: ${
                          o.raw.deprecated
                        }`
                      bin: o.bin
                  );
                  return !!e.range.startsWith('npm:') && !!j.c.test(e.range.slice('npm:'.length));
                  return !1;
                  throw new Error('Unreachable');
                  return e;
                  return [];
                      jsonResponse: !0
                    });
                    throw new p.lk(
                      f.b.REMOTE_INVALID,
                      'Registry returned invalid data - missing "dist-tags" field'
                    );
                  const o = i['dist-tags'];
                    throw new p.lk(f.b.REMOTE_NOT_FOUND, `Registry failed to return tag "${n}"`);
                    c = i.versions[A].dist.tarball;
                  return L.isConventionalTarballUrl(a, c, {
                    configuration: r.project.configuration
                  })
                    : [s.bindLocator(a, { __archiveUrl: c })];
                  return null;
                  throw new Error('Unreachable');
              }
            ]
          };
        'use strict';
        r.r(t), r.d(t, { default: () => U, packUtils: () => n });
        var n = {};
            prepareForPack: () => k
          });
          a = r(40822);
        (0, s.gn)([a.Command.String('--cwd', { hidden: !0 })], c.prototype, 'cwd', void 0);
          l = r(46009);
            );
        r(63129), r(5864), r(35747);
              ['workspaces', 'foreach']
            ]
          ]
        ]);
          p = r(39922);
        (0, s.gn)(
              const e = await p.VK.find(this.context.cwd, this.context.plugins);
                (e =>
              );
        );
          v = r(78761);
            '/changelog.*'
          D = [
            '/package.tgz',
            '.github',
            '.git',
            '.hg',
            'node_modules',
            '.npmignore',
            '.gitignore',
            '.#*',
            '.DS_Store'
          ];
          return !!m.hasWorkspaceScript(e, 'prepack') || !!m.hasWorkspaceScript(e, 'postpack');
          await m.maybeExecuteWorkspaceLifecycleScript(e, 'prepack', { report: t });
            await r();
            await m.maybeExecuteWorkspaceLifecycleScript(e, 'postpack', { report: t });
          var r, n;
          void 0 === t && (t = await N(e));
          const i = new Set();
            (n =
              null === (r = e.manifest.publishConfig) || void 0 === r
                ? void 0
                : r.executableFiles) && void 0 !== n
            i.add(l.y1.normalize(t));
          for (const t of e.manifest.bin.values()) i.add(l.y1.normalize(t));
          const o = Q.pack();
                c = i.has(t) ? 493 : 420;
              let g, u;
                  (g = e), (u = t);
                p = e => {
                  e ? u(e) : g();
                };
                let r;
                (r =
                  o.entry({ ...a, mode: c, type: 'file' }, r, p);
                  o.entry(
                    { ...a, mode: c, type: 'symlink', linkname: await E.xfs.readlinkPromise(n) },
                    p
                  );
              await h;
            o.finalize();
          });
          const A = (0, v.createGzip)();
          return o.pipe(A), A;
          const t = JSON.parse(JSON.stringify(e.manifest.raw));
          return await e.project.configuration.triggerHook(e => e.beforeWorkspacePacking, e, t), t;
          var t, r, n, i, o, A, s, a;
            u = { accept: [], reject: [] };
          for (const e of D) u.reject.push(e);
          for (const e of b) u.accept.push(e);
          u.reject.push(g.get('rcFilename'));
          const h = t => {
            if (null === t || !t.startsWith(e.cwd + '/')) return;
              n = l.y1.resolve(l.LZ.root, r);
            u.reject.push(n);
          };
              e => e.populateYarnPaths,
              e => {
                h(e);
            );
            const r = l.y1.relative(e.cwd, t.cwd);
            '' === r || r.match(/^(\.\.)?\//) || u.reject.push('/' + r);
              null !==
                (r = null === (t = e.manifest.publishConfig) || void 0 === t ? void 0 : t.main) &&
              void 0 !== r
              null !==
                (i = null === (n = e.manifest.publishConfig) || void 0 === n ? void 0 : n.module) &&
              void 0 !== i
              null !==
                (A =
                  null === (o = e.manifest.publishConfig) || void 0 === o ? void 0 : o.browser) &&
              null !==
                (a = null === (s = e.manifest.publishConfig) || void 0 === s ? void 0 : s.bin) &&
              void 0 !== a
                : e.manifest.bin;
            'string' == typeof C && p.accept.push(l.y1.resolve(l.LZ.root, C));
          for (const e of I.values()) p.accept.push(l.y1.resolve(l.LZ.root, e));
                'string' == typeof t && p.accept.push(l.y1.resolve(l.LZ.root, t));
          const E = null !== e.manifest.files;
            p.reject.push('/*');
            for (const t of e.manifest.files) K(p.accept, t, { cwd: l.LZ.root });
          return await (async function (
            e,
            { hasExplicitFileList: t, globalList: r, ignoreList: n }
          ) {
              A = [[l.LZ.root, [n]]];
                s = await o.lstatPromise(e);
                  const i = await o.readdirPromise(e);
                    a = !1;
                    for (const e of i) (s = s || '.gitignore' === e), (a = a || '.npmignore' === e);
                  const c = a
                    ? await R(o, e, '.npmignore')
                    : s
                    ? await R(o, e, '.gitignore')
                    : null;
                  let g = null !== c ? [c].concat(n) : n;
                  L(e, { globalList: r, ignoreLists: n }) &&
                    (g = [...n, { accept: [], reject: ['**/*'] }]);
                  for (const t of i) A.push([l.y1.resolve(e, t), g]);
                } else i.push(l.y1.relative(l.LZ.root, e));
            return i.sort();
          })(e.cwd, { hasExplicitFileList: E, globalList: u, ignoreList: p });
            i = await e.readFilePromise(l.y1.join(t, r), 'utf8');
          for (const e of i.split(/\n/g)) K(n.reject, e, { cwd: t });
          return n;
          const n = t.trim();
                const r = '!' === e[0];
                return (
                  r && (e = e.slice(1)),
                  e.match(/\.{0,1}\//) && (e = l.y1.resolve(t, e)),
                  r && (e = '!' + e),
                  e
                );
            );
          if (x(e, t.accept)) return !1;
          if (x(e, t.reject)) return !0;
              if (x(e, t.accept)) return !1;
              if (x(e, t.reject)) return !0;
          return !1;
          let r = t;
          const n = [];
            '!' !== t[e][0]
              ? r !== t && r.push(t[e])
              : (r === t && (r = t.slice(0, e)), n.push(t[e].slice(1)));
          return !P(e, n) && !!P(e, r);
          let r = t;
          const n = [];
            t[e].includes('/')
              ? r !== t && r.push(t[e])
              : (r === t && (r = t.slice(0, e)), n.push(t[e]));
            !!w().isMatch(e, r, { dot: !0, nocase: !0 }) ||
            !!w().isMatch(e, n, { dot: !0, basename: !0, nocase: !0 })
          );
            super(...arguments), (this.installIfNeeded = !1), (this.dryRun = !1), (this.json = !1);
              { project: t, workspace: r } = await f.I.find(e, this.context.cwd);
            if (!r) throw new u(t.cwd, this.context.cwd);
            (await S(r)) &&
                : await t.restoreInstallState());
                            return null !== e.manifest.name
                              ? i.slugifyIdent(e.manifest.name)
                              : 'package';
                            return null !== e.manifest.version ? e.manifest.version : 'unknown';
                        );
                      return l.cS.toPortablePath(r);
                : l.y1.resolve(r.cwd, 'package.tgz');
              await I.Pk.start(
                { configuration: e, stdout: this.context.stdout, json: this.json },
                async t => {
                  await k(r, { report: t }, async () => {
                    t.reportJson({ base: r.cwd });
                    const e = await N(r);
                    for (const r of e) t.reportInfo(null, r), t.reportJson({ location: r });
                    if (!this.dryRun) {
                      const t = await M(r, e),
                        i = E.xfs.createWriteStream(n);
                      t.pipe(i),
                        await new Promise(e => {
                          i.on('finish', e);
                        });
                    }
                  }),
                    this.dryRun ||
                      (t.reportInfo(
                        A.b.UNNAMED,
                        'Package archive generated in ' + h.pretty(e, n, h.Type.PATH)
                      ),
                      t.reportJson({ output: n }));
                }
              )
            ).exitCode();
        (T.usage = a.Command.Usage({
            [
              "List the files that would be made part of the workspace's archive",
              'yarn pack --dry-run'
            ],
            [
              'Name and output the archive in a dedicated folder',
              'yarn pack --out /artifacts/%s-%v.tgz'
            ]
          ]
                description:
                  'Run a preliminary `yarn install` if the package contains build scripts'
              })
                description: 'Print the file paths without actually generating the package archive'
              })
                description: 'Create the archive at the specified path'
              a.Command.String('-o,--out', {
                description: 'Create the archive at the specified path'
              })
          (0, s.gn)([a.Command.Path('pack')], T.prototype, 'execute', null);
                  t.publishConfig.bin && (t.bin = t.publishConfig.bin));
                const r = e.project;
                      a = i.parseRange(s.range);
                            i.prettyDescriptor(r.configuration, s) +
                              ': No local workspace found for this range'
                          );
                        let r;
                        (r =
                          (t[n][i.stringifyIdent(s)] = r);
              }
            commands: [T]
          };
        'use strict';
        r.r(t), r.d(t, { default: () => re, patchUtils: () => n });
        var n = {};
            parsePatchFile: () => v
          });
          C = r(78420);
            super('Cannot apply hunk #' + (e + 1)), (this.hunk = t);
        const E = /^@@ -(\d+)(,(\d+))? \+(\d+)(,(\d+))? @@.*/;
          return g.y1.relative(g.LZ.root, g.y1.resolve(g.LZ.root, g.cS.toPortablePath(e)));
          const t = e.trim().match(E);
          if (!t) throw new Error(`Bad header line: '${e}'`);
            patched: { start: Math.max(Number(t[4]), 1), length: Number(t[6] || 1) }
          };
        var y;
          (e.Context = 'context'), (e.Insertion = 'insertion'), (e.Deletion = 'deletion');
        })(y || (y = {}));
          undefined: y.Context
        };
          const t = 511 & parseInt(e, 8);
          if (420 !== t && 493 !== t) throw new Error('Unexpected file mode string: ' + e);
          return t;
          const t = e.split(/\n/g);
              const t = [];
                    hunks: d
                    : 'mode change';
                let I = null;
                    if (!g || !l) throw new Error('Bad parser state: rename from & to not given');
                    t.push({ type: 'rename', semverExclusivity: e, fromPath: m(g), toPath: m(l) }),
                      (I = l);
                    break;
                      const r = n || p;
                      if (!r) throw new Error('Bad parse state: no path given for file deletion');
                        hash: u
                      });
                    break;
                      const r = i || f;
                      if (!r) throw new Error('Bad parse state: no path given for file creation');
                        hash: h
                      });
                    break;
                    I = f || i;
                    break;
                    a.assertNever(C);
                    newMode: Q(A)
                      afterHash: h
                    });
              return t;
                const t = [];
                    hunks: null
                  o = null;
                  i && (o && (i.parts.push(o), (o = null)), r.hunks.push(i), (i = null));
                      hunks: null
                    });
                  const c = e[t];
                    if (c.startsWith('@@')) (n = 'parsing hunks'), (r.hunks = []), (t -= 1);
                      r && r.diffLineFromPath && s();
                      const e = c.match(/^diff --git a\/(.*?) b\/(.*?)\s*$/);
                      if (!e) throw new Error('Bad diff line: ' + c);
                      (r.diffLineFromPath = e[1]), (r.diffLineToPath = e[2]);
                    } else if (c.startsWith('old mode '))
                      r.oldMode = c.slice('old mode '.length).trim();
                    else if (c.startsWith('new mode '))
                      r.newMode = c.slice('new mode '.length).trim();
                      r.deletedFileMode = c.slice('deleted file mode '.length).trim();
                    else if (c.startsWith('new file mode '))
                      r.newFileMode = c.slice('new file mode '.length).trim();
                    else if (c.startsWith('rename from '))
                      r.renameFrom = c.slice('rename from '.length).trim();
                    else if (c.startsWith('rename to '))
                      r.renameTo = c.slice('rename to '.length).trim();
                      const e = c.match(/(\w+)\.\.(\w+)/);
                      if (!e) continue;
                      (r.beforeHash = e[1]), (r.afterHash = e[2]);
                        : c.startsWith('+++ ') && (r.toPath = c.slice('+++ b/'.length).trim());
                    const e = w[c[0]] || null;
                        A(), (i = { header: B(c), parts: [] });
                        break;
                        (n = 'parsing header'), s(), (t -= 1);
                        break;
                          throw new Error('Unrecognized pragma in patch file: ' + c);
                          throw new Error(
                            'Bad parser state: No newline at EOF pragma encountered without context'
                          );
                        o.noNewlineAtEndOfFile = !0;
                        break;
                        if (!i)
                          throw new Error(
                            'Bad parser state: Hunk lines encountered before hunk header'
                          );
                          o.lines.push(c.slice(1));
                        break;
                        a.assertNever(e);
                s();
                for (const { hunks: e } of t) if (e) for (const t of e) b(t);
                return t;
          );
            r = 0;
                (r += i.length), (t += i.length);
                break;
                t += i.length;
                break;
                r += i.length;
                break;
                a.assertNever(n);
            const n = e => (e < 0 ? e : '+' + e);
            );
            i = await r();
          if ((void 0 !== i && (t = i), e.lutimesPromise))
            await e.lutimesPromise(t, n.atime, n.mtime);
            if (n.isSymbolicLink()) throw new Error('Cannot preserve the time values of a symlink');
            await e.utimesPromise(t, n.atime, n.mtime);
            if (
              null === i.semverExclusivity ||
              null === n ||
              d.satisfiesWithPrereleases(n, i.semverExclusivity)
            )
                    if (!t.existsSync(i.path))
                      throw new Error("Trying to delete a file that doesn't exist: " + i.path);
                      await t.unlinkPromise(i.path);
                    });
                  break;
                      throw new Error("Trying to move a file that doesn't exist: " + i.fromPath);
                        await D(
                          t,
                          i.fromPath,
                          async () => (await t.movePromise(i.fromPath, i.toPath), i.toPath)
                        );
                      });
                    });
                  break;
                    if (t.existsSync(i.path))
                      throw new Error('Trying to create a file that already exists: ' + i.path);
                      ? i.hunk.parts[0].lines.join('\n') +
                        (i.hunk.parts[0].noNewlineAtEndOfFile ? '' : '\n')
                      : '';
                      utimes: [315532800, 315532800]
                      await t.utimesPromise(i.path, 315532800, 315532800);
                  break;
                    await F(i, { baseFs: t, dryRun: r });
                  });
                  break;
                    const e = (await t.statPromise(i.path)).mode;
                    if (k(i.newMode) !== k(e)) continue;
                      await t.chmodPromise(i.path, i.newMode);
                    });
                  break;
                  a.assertNever(i);
          return (64 & e) > 0;
          return e.replace(/\s+$/, '');
            A = [];
            c = 0;
              a = Math.max(n, i);
              u = null;
                g = -g;
                break;
              if (g <= i && ((l = r + g), (u = N(t, o, l)), null !== u)) break;
              g += 1;
            if (null === u) throw new I(e.indexOf(t), t);
            A.push(u), (s += g), (c = l + t.header.original.length);
          if (n) return;
          let g = 0;
                    const e = t.index + g;
                    o.splice(e, t.numToDelete, ...t.linesToInsert),
                      (g += t.linesToInsert.length - t.numToDelete);
                  break;
                  o.pop();
                  break;
                  o.push(t.line);
                  break;
                  a.assertNever(t);
          await r.writeFilePromise(t, o.join('\n'), { mode: i });
          const n = [];
                  const n = t[r];
                  if (null == n || ((i = e), M(n) !== M(i))) return null;
                  r += 1;
                    linesToInsert: []
                  o.noNewlineAtEndOfFile && n.push({ type: 'push', line: '' }));
                break;
                  o.noNewlineAtEndOfFile && n.push({ type: 'pop' });
                break;
                a.assertNever(o.type);
          var i;
          return n;
        const R = /^builtin<([^>]+)>$/;
          const { source: r, selector: n, params: i } = s.parseRange(e);
          if (null === r) throw new Error('Patch locators must explicitly define their source');
          const o = n ? n.split(/&/).map(e => g.cS.toPortablePath(e)) : [],
            a = i && 'string' == typeof i.version ? i.version : null;
          return { parentLocator: A, sourceItem: t(r), patchPaths: o, sourceVersion: a };
          const { sourceItem: t, ...r } = K(e.range, s.parseDescriptor);
          return { ...r, sourceDescriptor: t };
          const { sourceItem: t, ...r } = K(e.reference, s.parseLocator);
          return { ...r, sourceLocator: t };
        function P(
          { parentLocator: e, sourceItem: t, patchPaths: r, sourceVersion: n, patchHash: i },
          o
        ) {
            c = void 0 !== i ? { hash: i } : {};
            params: { ...a, ...c, ...A }
          });
          return s.makeLocator(
            e,
            P({ parentLocator: t, sourceItem: r, patchPaths: n }, s.stringifyDescriptor)
          );
              {
                parentLocator: t,
                sourceItem: r,
                sourceVersion: r.version,
                patchPaths: n,
                patchHash: i
              },
          );
          const i = n.match(R);
          return null !== i ? r(i[1]) : g.y1.isAbsolute(n) ? e(n) : t(n);
          return U({ onAbsolute: () => !1, onRelative: () => !0, onBuiltin: () => !1 }, e);
                ? {
                    packageFs: new u.M(g.LZ.root),
                    prefixPath: g.y1.relative(g.LZ.root, n.localPath)
                  }
                : n;
          n && n !== i && n.releaseFs && n.releaseFs();
                  t.map(async e =>
                            throw new Error(
                              'Assertion failed: The parent locator should have been fetched'
                            );
                          return await n.packageFs.readFilePromise(e, 'utf8');
                        onBuiltin: async e =>
                          await r.project.configuration.firstHook(
                            e => e.getBuiltinPatch,
                            r.project,
                            e
                          )
          ).map(e => ('string' == typeof e ? e.replace(/\r\n?/g, '\n') : e));
            a = await c.xfs.mktempPromise();
              locator: s.stringifyLocator(e)
          );
              [
                'diff',
                '--src-prefix=a/',
                '--dst-prefix=b/',
                '--ignore-cr-at-eol',
                '--full-index',
                '--no-index',
                r,
                n
              ],
            o = r.startsWith('/') ? e => e.slice(1) : e => e;
            .replace(new RegExp(a.escapeRegExp(n + '/'), 'g'), '');
        var J = r(71643);
                  r.reportInfo(null, '  ' + J.pretty(t, e, 'grey'));
                  break;
                  r.reportError(
                    A.b.FROZEN_LOCKFILE_EXCEPTION,
                    '- ' + J.pretty(t, e, J.Type.REMOVED)
                  );
                  break;
                  r.reportError(A.b.FROZEN_LOCKFILE_EXCEPTION, '+ ' + J.pretty(t, e, J.Type.ADDED));
                  break;
                  a.assertNever(n.type);
        var q = r(20624);
          Z = r(40822);
              n = await X.C.find(e);
            if (!r) throw new W.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
              A = g.y1.join(o, '.yarn-patch.json');
            if (!c.xfs.existsSync(A))
              throw new Z.UsageError("The argument folder didn't get created by 'yarn patch'");
              l = s.parseLocator(a.locator, !0);
              throw new Z.UsageError('No package found in the project for the given locator');
            const u = await G(l, { cache: n, project: t });
            this.context.stdout.write(await H(u, o));
        ($.usage = Z.Command.Usage({
            '\n      This will turn the folder passed in parameter into a patchfile suitable for consumption with the `patch:` protocol.\n\n      Only folders generated through `yarn patch` are accepted as valid input for `yarn patch-commit`.\n    '
          (0, z.gn)([Z.Command.Path('patch-commit')], $.prototype, 'execute', null);
        var ee = r(15815);
              n = await X.C.find(e);
            if (!r) throw new W.WorkspaceRequiredError(t.cwd, this.context.cwd);
            await t.restoreInstallState();
            let o = s.parseLocator(this.package);
              const r = a.mapAndFilter([...t.storedPackages.values()], e =>
              );
              if (0 === r.length)
                throw new Z.UsageError('No package found in the project for the given locator');
                    r.map(t => '\n- ' + s.prettyLocator(e, t)).join('')
                );
              o = r[0];
              throw new Z.UsageError('No package found in the project for the given locator');
            await ee.Pk.start({ configuration: e, stdout: this.context.stdout }, async r => {
              const i = await G(o, { cache: n, project: t });
              r.reportInfo(
                A.b.UNNAMED,
                `Package ${s.prettyLocator(e, o)} got extracted with success!`
              ),
                  'You can now edit the following folder: ' +
                    J.pretty(e, g.cS.fromPortablePath(i), 'magenta')
                );
            });
        (te.usage = Z.Command.Usage({
            '\n      This command will cause a package to be extracted in a temporary directory (under a folder named "patch-workdir"). This folder will be editable at will; running `yarn patch` inside it will then cause Yarn to generate a patchfile and register it into your top-level manifest (cf the `patch:` protocol).\n    '
          (0, z.gn)([Z.Command.Path('patch')], te.prototype, 'execute', null);
              default: !1
            }
                return !!e.reference.startsWith('patch:');
                return null;
                    skipIntegrityCheck: t.skipIntegrityCheck
                  });
                  checksum: o
                };
                const { parentLocator: r, sourceLocator: n, sourceVersion: i, patchPaths: p } = x(
                    e
                  ),
                    level: t.project.configuration.get('compressionLevel')
                  });
                    await y.copyPromise(m, E.prefixPath, { baseFs: E.packageFs, stableSort: !0 });
                  }, E.releaseFs);
                const w = new u.M(g.y1.resolve(g.LZ.root, m), { baseFs: y });
                      await S(v(e), { baseFs: w, version: i });
                      if (!(e instanceof I)) throw e;
                        n = r ? '' : ' (set enableInlineHunks for details)';
                      throw new o.lk(A.b.PATCH_HUNK_FAILED, e.message + n, n => {
                        r && _(e.hunk, { configuration: t.project.configuration, report: n });
                      });
                return y;
            }
                return !!e.range.startsWith('patch:');
                return !!e.reference.startsWith('patch:');
                return !1;
                const { patchPaths: n } = L(e);
                return n.every(e => !j(e))
                  ? e
                  : s.bindDescriptor(e, { locator: s.stringifyLocator(t) });
                const { sourceDescriptor: r } = L(e);
                return [r];
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  );
                  s = t.get(i.descriptorHash);
                if (void 0 === s)
                  throw new Error('Assertion failed: The dependency should have been resolved');
                    patchHash: q.makeHash('2', ...A).slice(0, 6)
                  })
                ];
                return null;
                const { sourceLocator: r } = x(e);
                return { ...(await t.resolver.resolve(r, t)), ...e };
            }
          ]
        };
        'use strict';
            quotePathIfNeeded: () => L
          });
        var n = {};
        r.r(n), r.d(n, { getUnpluggedPath: () => m });
          I = r(32485);
            (this.opts = e),
              (this.packageRegistry = new Map()),
              (this.blacklistedPaths = new Set()),
              (this.opts = e);
                  !1);
              i =
                e.peerDependencies.size > 0 &&
                !l.isVirtualLocator(e) &&
                !this.opts.project.tryWorkspaceByLocator(e),
              s = this.checkAndReportManifestIncompatibility(o, e);
            if (this.opts.skipIncompatiblePackageLinking && !s)
              return { packageLocation: null, buildDirective: null };
              g = this.opts.project.getDependencyMeta(e, e.version);
                (a.length = 0));
                : await this.transformPackage(e, o, t, g, { hasBuildScripts: a.length > 0 });
              );
              E = new Set();
              for (const t of e.peerDependencies.values())
                d.set(l.requirableIdent(t), null), E.add(l.stringifyIdent(t));
                discardFromLookup: t.discardFromLookup || !1
            );
            const r = this.getPackageInformation(e);
              const t = l.areIdentsEqual(e, n) ? n.reference : [l.requirableIdent(n), n.reference];
              r.packageDependencies.set(l.requirableIdent(e), t);
              this.getDiskInformation(r).packageDependencies.set(l.requirableIdent(e), e.reference);
                new Map([
                  [
                    null,
                    this.getPackageInformation(this.opts.project.topLevelWorkspace.anchoredLocator)
                  ]
                ])
              );
                reference: e.reference
              A = h.buildIgnorePattern([
                '.yarn/sdks/**',
                ...this.opts.project.configuration.get('pnpIgnorePatterns')
              ]),
              a = this.opts.project.configuration.get('pnpShebang');
                  i.push({ name: l.requirableIdent(e), reference: e.reference });
              shebang: a
            });
              n = this.packageRegistry.get(t);
              );
            const i = n.get(r);
              );
            return i;
              r = this.normalizeDirectoryPath(e);
              discardFromLookup: !1
            }));
              for (const [t, r] of e)
                r.packageLocation && this.blacklistedPaths.has(r.packageLocation) && e.delete(t);
            let t = A.y1.relative(this.opts.project.cwd, e);
            return t.match(/^\.{0,2}\//) || (t = './' + t), t.replace(/\/?$/, '/');
          return A.y1.resolve(t.get('pnpUnpluggedFolder'), l.slugifyLocator(e));
            l.makeIdent(null, 'fsevents').identHash
          y = new Set(['.exe', '.h', '.hh', '.hpp', '.c', '.cc', '.cpp', '.java', '.jar', '.node']);
            this.mode = 'strict';
            );
            const r = K(t.project).main;
              );
              s = n.getPackageInformation(i);
              );
            return A.cS.toPortablePath(s.packageLocation);
            const n = K(t.project).main;
            if (!o.xfs.existsSync(n)) return null;
              s = h.dynamicRequire(i);
            delete r.c[i];
            const a = s.findPackageLocator(A.cS.fromPortablePath(e));
            return a ? l.makeLocator(l.parseIdent(a.name), a.reference) : null;
            return new Q(e);
            super(...arguments), (this.mode = 'strict'), (this.unpluggedPaths = new Set());
            if (null === t) return [];
            const n = [];
            for (const e of ['preinstall', 'install', 'postinstall'])
              t.scripts.has(e) && n.push([g.k.SCRIPT, e]);
            const i = A.y1.join(r.prefixPath, 'binding.gyp');
              !t.scripts.has('install') &&
                r.packageFs.existsSync(i) &&
                n.push([g.k.SHELLCODE, 'node-gyp rebuild']),
              n
            );
              : r.packageFs;
            if (this.opts.project.configuration.get('pnpMode') !== this.mode) return;
              r = this.opts.project.configuration.get('pnpDataPath');
            if (
              (await o.xfs.removePromise(t.other),
              'pnp' !== this.opts.project.configuration.get('nodeLinker'))
            )
              return await o.xfs.removePromise(t.main), void (await o.xfs.removePromise(r));
            const n = await this.locateNodeModules(e.ignorePattern);
              );
              for (const e of n) await o.xfs.removePromise(e);
              const n = (0, f.gY)(e);
                await o.xfs.removePromise(r);
                { dataFile: i, loaderFile: s } = (0, f.Q$)({ ...e, dataLocation: n });
                await o.xfs.chmodPromise(r, 420);
            const i = this.opts.project.configuration.get('pnpUnpluggedFolder');
            if (0 === this.unpluggedPaths.size) await o.xfs.removePromise(i);
                const t = A.y1.resolve(i, e);
                this.unpluggedPaths.has(t) || (await o.xfs.removePromise(t));
              r = e ? new RegExp(e) : null;
              const n = A.y1.join(e.cwd, 'node_modules');
              if (
                (r && r.test(A.y1.relative(this.opts.project.cwd, e.cwd))) ||
                !o.xfs.existsSync(n)
              )
                continue;
                s = i.filter(e => !e.isDirectory() || '.bin' === e.name || !e.name.startsWith('.'));
              if (s.length === i.length) t.push(n);
              else for (const e of s) t.push(A.y1.join(n, e.name));
            return t;
            const r = m(e, { configuration: this.opts.project.configuration });
            );
                    : !(!i && !r.packageFs.getExtractHint({ relevantExtensions: y })));
          N = r.n(F);
            super(...arguments),
              (this.patterns = []),
              (this.all = !1),
              (this.recursive = !1),
              (this.json = !1);
              n = await S.C.find(e);
            if (!r) throw new b.WorkspaceRequiredError(t.cwd, this.context.cwd);
              throw new d.UsageError(
                'This command can only be used if the `nodeLinker` option is set to `pnp`'
              );
            await t.restoreInstallState();
              A = this.patterns.map(t => {
                  n = 'unknown' !== r.range ? r : l.makeDescriptor(r, '*');
                    `The range of the descriptor patterns must be a valid semver range (${l.prettyDescriptor(
                      e,
                      n
                    )})`
                  );
                return e => {
                  const r = l.stringifyIdent(e);
                  );
                };
              s = e => {
                      !t.tryWorkspaceByLocator(e) && A.some(t => t(e)) && n.push(e),
                        const e = t.storedResolutions.get(r.descriptorHash);
                        if (!e)
                          throw new Error(
                            'Assertion failed: The resolution should have been registered'
                          );
                        const n = t.storedPackages.get(e);
                        if (!n)
                          throw new Error(
                            'Assertion failed: The package should have been registered'
                          );
                        i(n, o + 1);
                  };
                  const e = t.storedPackages.get(r.anchoredLocator.locatorHash);
                  if (!e)
                    throw new Error('Assertion failed: The package should have been registered');
                  i(e, 0);
                }
                return n;
              };
            let g, p;
                    const e = [];
                      t.tryWorkspaceByLocator(r) ||
                        l.isVirtualLocator(r) ||
                        !A.some(e => e(r)) ||
                        e.push(r);
                    return e;
                `Patterns ${u.prettyList(
                  e,
                  o,
                  u.Type.CODE
                )} don't match any packages referenced by ${p}`
              );
                `Pattern ${u.prettyList(
                  e,
                  o,
                  u.Type.CODE
                )} doesn't match any packages referenced by ${p}`
              );
            g = h.sortMap(g, e => l.stringifyLocator(e));
              await k.Pk.start(
                { configuration: e, stdout: this.context.stdout, json: this.json },
                async r => {
                  var i;
                  for (const n of g) {
                    const o = null !== (i = n.version) && void 0 !== i ? i : 'unknown';
                    (t.topLevelWorkspace.manifest.ensureDependencyMeta(
                      l.makeDescriptor(n, o)
                    ).unplugged = !0),
                      r.reportInfo(
                        c.b.UNNAMED,
                        `Will unpack ${l.prettyLocator(e, n)} to ${u.pretty(
                          e,
                          m(n, { configuration: e }),
                          u.Type.PATH
                        )}`
                      ),
                      r.reportJson({ locator: l.stringifyLocator(n), version: o });
                  }
                  await t.topLevelWorkspace.persistManifest(),
                    r.reportSeparator(),
                    await t.install({ cache: n, report: r });
              )
            ).exitCode();
        (R.usage = d.Command.Usage({
              'yarn unplug lodash -R'
            ['Unplug all packages (only for testing, not recommended)', "yarn unplug -R '*'"]
          ]
                description: 'Unplug direct dependencies from the entire project'
              })
                description: 'Unplug both direct and transitive dependencies'
              })
          (0, v.gn)([d.Command.Path('unplug')], R.prototype, 'execute', null);
        const K = e => {
            let t, r;
            );
          L = e => (/\s/.test(e) ? JSON.stringify(e) : e);
                t(e.configuration.get('pnpUnpluggedFolder'));
                i = '--require ' + L(A.cS.fromPortablePath(n));
                );
                let e = t.NODE_OPTIONS || '';
                const r = /\s*--require\s+\S*\.pnp\.c?js\s*/g;
                (e = e.replace(r, ' ').trim()), (e = e ? `${i} ${e}` : i), (t.NODE_OPTIONS = e);
            }
              description:
                'The linker used for installing Node packages, one of: "pnp", "node-modules"',
              default: 'pnp'
              description:
                "If 'strict', generates standard PnP maps. If 'loose', merges them with the n_m resolution.",
              default: 'strict'
              default: '#!/usr/bin/env node'
              description:
                'Array of glob patterns; files matching them will use the classic resolution',
              isArray: !0
              default: !0
              description:
                'If true, the generated PnP loader will follow the top-level fallback rule',
              default: 'dependencies-only'
              default: './.yarn/unplugged'
              description:
                'Path of the file where the PnP data (used by the loader) must be written',
              default: './.pnp.data.json'
            }
          commands: [R]
        };
        'use strict';
        r.r(t);
          i = r.n(n);
        Object.fromEntries || (Object.fromEntries = i());
          s = r(45330);
        (0, A.D)({ binaryVersion: o.o || '<unknown>', pluginConfiguration: (0, s.e)() });
        'use strict';
            pluginCommands: () => p.f
          });
          A = r(40822);
            );
            'yup'
          c = () => new Map(a.map(e => [e, r(98497)(e)]));
          l = r(85824);
          const { project: r, workspace: n } = await l.I.find(e, t);
          if (!n) throw new s(r.cwd, t);
          return n;
          p = r(15683);
        'use strict';
        r.d(t, { D: () => C });
          f = r(56087);
            const e = await i.VK.find(this.context.cwd, this.context.plugins);
              (e =>
            );
              binaryVersion: e
            });
            h.register(d);
                var f, d, C, I, E;
                const m = process.versions.node;
                if (
                  !n.satisfiesWithPrereleases(m, '>=10.17') &&
                  '1' !== process.env.YARN_IGNORE_NODE
                )
                  );
                    strict: !1
                  Q = B.get('ignoreCwd');
                  return (
                    (process.env.YARN_IGNORE_PATH = '1'),
                    (process.env.YARN_IGNORE_CWD = '1'),
                    void (await h(p))
                  );
                  w && delete process.env.YARN_IGNORE_PATH;
                    null === (f = i.VK.telemetry) || void 0 === f || f.reportVersion(e);
                        (C =
                          null === (d = e.match(/^@yarnpkg\/plugin-(.*)$/)) || void 0 === d
                            ? void 0
                            : d[1]) && void 0 !== C
                      (null === (I = i.VK.telemetry) || void 0 === I || I.reportPluginName(e));
                    for (const e of t.commands || []) p.register(e);
                  const n = p.process(process.argv.slice(2));
                  n.help ||
                    null === (E = i.VK.telemetry) ||
                    void 0 === E ||
                    E.reportCommandName(n.path.join(' '));
                  const A = n.cwd;
                      t = (0, l.realpathSync)(A);
                    if (e !== t) return process.chdir(A), void (await r());
                    stderr: process.stderr
                  });
                      const t = s.cS.fromPortablePath(e);
                                YARN_IGNORE_CWD: '1'
                              }
                                YARN_IGNORE_CWD: '1'
                              }
                            });
                    })(y);
                    process.exitCode = e.code || 1;
                    (process.exitCode = 1);
              })(h);
              process.stdout.write(h.error(e)), (process.exitCode = 1);
            .catch(e => {
              process.stdout.write(e.stack || e.message), (process.exitCode = 1);
            .finally(() => A.xfs.rmtempPromise());
        (0, h.gn)([g.Command.Path('--welcome')], d.prototype, 'execute', null);
        'use strict';
        r.d(t, { f: () => n });
              ['workspaces', 'foreach']
            ]
          ]
        ]);
        'use strict';
        r.d(t, { F: () => o });
          i = r(40822);
        (0, n.gn)([i.Command.String('--cwd', { hidden: !0 })], o.prototype, 'cwd', void 0);
        'use strict';
        r.d(t, { C: () => I });
          d = r(54143);
        const C = 7;
          constructor(
            e,
            { configuration: t, immutable: r = t.get('enableImmutableCache'), check: n = !1 }
          ) {
            (this.markedFiles = new Set()),
              (this.check = n);
            const i = t.get('cacheKeyOverride');
            if (null !== i) this.cacheKey = '' + i;
                r = e !== o.k ? 'c' + e : '';
              this.cacheKey = [C, r].join('');
            const n = new I(e.get('cacheFolder'), { configuration: e, immutable: t, check: r });
            return await n.setup(), n;
            if (!this.configuration.get('enableMirror')) return null;
            const e = this.configuration.get('globalFolder') + '/cache';
            return e !== this.cwd ? e : null;
            return `${d.slugifyLocator(e)}-${this.cacheKey}.zip`;
              const t = e.indexOf('/');
              return -1 !== t ? e.slice(t + 1) : e;
            })(t).slice(0, 10);
            return `${d.slugifyLocator(e)}-${r}.zip`;
            if (null === this.mirrorCwd) return s.y1.resolve(this.cwd, this.getVersionFilename(e));
            if (null === t) return null;
            return E(t) !== this.cacheKey
              ? null
              : s.y1.resolve(this.cwd, this.getChecksumFilename(e, t));
            const t = this.mirrorCwd;
            return null !== t ? s.y1.resolve(t, this.getVersionFilename(e)) : null;
              await a.xfs.mkdirPromise(this.cwd, { recursive: !0 });
              const e = s.y1.resolve(this.cwd, '.gitignore');
              await a.xfs.changeFilePromise(e, '/.gitignore\n*.flock\n');
          async fetchPackageFromCache(
            e,
            t,
            { onHit: r, onMiss: g, loader: C, skipIntegrityCheck: I }
          ) {
                const n = I && t ? t : `${this.cacheKey}/${await p.checksumFile(e)}`;
                    );
                  let e;
                    ((e = this.check
                      ? 'throw'
                      : E(t) !== E(n)
                      ? 'update'
                      : this.configuration.get('checksumBehavior')),
                      return t;
                      return n;
                      );
                return n;
              w = async t => {
                    'Cache check required but no loader configured for ' +
                      d.prettyLocator(this.configuration, e)
                  );
                  n = r.getRealPath();
                return r.saveAndClose(), await a.xfs.chmodPromise(n, 420), await y(t, n);
                    t = e.getRealPath();
                  return e.saveAndClose(), t;
                  r = s.y1.join(t, this.getVersionFilename(e));
                return await a.xfs.copyFilePromise(m, r, l().constants.COPYFILE_FICLONE), r;
                  throw new Error(
                    'Cache entry required but missing for ' + d.prettyLocator(this.configuration, e)
                  );
                  );
                const t = await Q();
                await a.xfs.chmodPromise(t, 420);
                  n = this.getLocatorPath(e, r);
                if (!n)
                  throw new Error('Assertion failed: Expected the cache path to be available');
                        null !== m &&
                          (await a.xfs.copyFilePromise(n, m, l().constants.COPYFILE_FICLONE)),
                );
              };
            for (let t; (t = this.mutexes.get(e.locatorHash)); ) await t;
                  o = i ? r : g;
                  let e = null;
                  const t = n;
                  return (e = this.check ? await w(t) : await y(t)), [t, e];
                return v();
              })();
              this.mutexes.set(e.locatorHash, n);
                return await n;
                this.mutexes.delete(e.locatorHash);
            })();
            this.markedFiles.add(b);
            let S = null;
                    t =>
                      `Failed to open the cache entry for ${d.prettyLocator(
                        this.configuration,
                        e
                      )}: ${t}`
              );
                null !== S && S.discardAndClose();
              D
            ];
                await a.xfs.lockPromise(e, async () => await t()));
          const t = e.indexOf('/');
          return -1 !== t ? e.slice(0, t) : null;
        'use strict';
        r.d(t, { VK: () => z, nh: () => T, tr: () => P, a5: () => U, EW: () => _, a2: () => O });
          C = r(54143);
                if (n.from && n.from.fullName !== C.requirableIdent(r)) continue;
                if (n.from && n.from.description && n.from.description !== r.reference) continue;
                if (n.descriptor.fullName !== C.requirableIdent(e)) continue;
                if (n.descriptor.description && n.descriptor.description !== e.range) continue;
                return i.bindDescriptor(
                  C.makeDescriptor(e, A),
                  t.topLevelWorkspace.anchoredLocator,
                  o
                );
              return e;
                const n = C.prettyWorkspace(e.configuration, r);
                await e.configuration.triggerHook(e => e.validateWorkspace, r, {
                  reportError: (e, r) => t.reportError(e, `${n}: ${r}`)
                });
              const { manifest: r } = e;
                r.errors.push(new Error('Resolutions field will be ignored'));
              for (const e of r.errors) t.reportWarning(d.b.INVALID_MANIFEST, e.message);
            }
          }
        };
          m = r(35691);
            this.fetchers = e;
            return !!this.tryFetcher(e, t);
            return this.getFetcher(e, t).getLocalPath(e, t);
            const r = this.getFetcher(e, t);
            return await r.fetch(e, t);
            const r = this.fetchers.find(r => r.supports(e, t));
            return r || null;
            const r = this.fetchers.find(r => r.supports(e, t));
                C.prettyLocator(t.project.configuration, e) +
                  " isn't supported by any available fetcher"
              );
            return r;
          Q = r(60895);
            return !!e.range.startsWith(v.protocol);
            return !!e.reference.startsWith(v.protocol);
            return v.isVirtualDescriptor(e);
            return v.isVirtualLocator(e);
            return !1;
            throw new Error(
              'Assertion failed: calling "bindDescriptor" on a virtual descriptor is unsupported'
            );
            );
            throw new Error(
              'Assertion failed: calling "getCandidates" on a virtual descriptor is unsupported'
            );
            throw new Error(
              'Assertion failed: calling "getSatisfying" on a virtual descriptor is unsupported'
            );
            throw new Error(
              'Assertion failed: calling "resolve" on a virtual locator is unsupported'
            );
        v.protocol = 'virtual:';
          D = r(94538);
            return !!e.reference.startsWith(D.d.protocol);
            return this.getWorkspace(e, t).cwd;
            const r = this.getWorkspace(e, t).cwd;
            return { packageFs: new b.M(r), prefixPath: i.LZ.dot, localPath: r };
            return t.project.getWorkspaceByCwd(e.reference.slice(D.d.protocol.length));
          R = r.n(N);
          return ('undefined' != typeof require ? require : r(32178))(e);
        var L = r(36545);
        const x = new Set([
            'binFolder',
            'version',
            'flags',
            'profile',
            'gpg',
            'ignoreNode',
            'wrapOutput'
          ]),
          T = 'yarn.lock';
        var O;
          (e.ANY = 'ANY'),
            (e.MAP = 'MAP');
        })(O || (O = {}));
              default: null
              default: null
              description:
                'If true, the local executable will be ignored when using the global one',
              default: !1
              default: !1
              default: null
              default: k.getDefaultGlobalFolder()
              default: './.yarn/cache'
              default: o.k
              default: './.yarn/$$virtual'
              description:
                'Path of the file where the current state of the built packages must be stored',
              default: './.yarn/build-state.yml'
              description:
                'Name of the files where the Yarn dependency tree entries must be stored',
              default: T
              default: './.yarn/install-state.gz'
              isArray: !0
              default: J()
              description:
                'If true, the system-wide cache folder will be used regardless of `cache-folder`',
              default: !1
              description:
                'If true, the virtual symlinks will use absolute paths if required [non portable!!]',
              default: !1
              defaultText: '<dynamic>'
              defaultText: '<dynamic>'
              defaultText: '<dynamic>'
              description:
                'If true, the CLI is allowed to show a progress bar for long-running events',
              defaultText: '<dynamic>'
              default: !0
              description:
                'If true, the CLI will only print a one-line report of any cache changes',
              default: c.isCI
              description:
                'If true, the CLI will automatically use the interactive mode when called from a TTY',
              default: !1
              description:
                'If true, the CLI will truncate lines that would go beyond the size of the terminal',
              default: !1
              description:
                'Which style of progress bar should be used (only when progress bars are enabled)',
              defaultText: '<dynamic>'
              description:
                "Default language mode that should be used when a package doesn't offer any insight",
              default: 'node'
              description:
                'Default resolution protocol used when resolving pure semver and tag ranges',
              default: 'npm:'
              default: !0
              default: !0
              description:
                'If false, the package manager will refuse to use the network if required to',
              default: !0
              default: null
              default: null
              description:
                'List of the hostnames for which http queries are allowed (glob patterns are supported)',
              isArray: !0
              default: 6e4
              default: 1 / 0
                    description:
                      'Path to file containing one or multiple Certificate Authority signing certificates',
                    default: null
                    description:
                      'If false, the package manager will refuse to use the network if required to',
                    default: null
                  }
                }
              }
              description:
                'A path to a file containing one or multiple Certificate Authority signing certificates',
              default: null
              default: !0
                  default: void 0
                  default: void 0
                  default: void 0
                }
              }
              default: !0
              default: 7
              default: null
              default: !0
              description:
                'If true, the cache is reputed immutable and actions that would modify it will throw',
              default: !1
              description:
                "Enumeration defining what to do when a checksum doesn't match expectations",
              default: 'throw'
              valueDefinition: { description: '', type: O.ANY }
            }
          };
                  .map(r => G(e, t, r, n, i));
          if (Array.isArray(r))
            throw new Error(`Non-array configuration settings "${t}" cannot be an array`);
          return G(e, t, r, n, i);
          var A;
              return r;
                  throw new g.UsageError(`Object configuration settings "${t}" must be an object`);
                const o = H(e, n, { ignoreArrays: !0 });
                if (null === r) return o;
                  const r = `${t}.${A}`;
                    );
                  o.set(A, Y(e, r, s, n.properties[A], i));
                return o;
              })(e, t, r, n, o);
                const o = new Map();
                  throw new g.UsageError(`Map configuration settings "${t}" must be an object`);
                if (null === r) return o;
                    c = n.valueDefinition;
                  o.set(r, Y(e, a, s, c, i));
                return o;
              })(e, t, r, n, o);
            throw new Error(`Non-nullable configuration settings "${t}" cannot be set to null`);
          if (null === (A = n.values) || void 0 === A ? void 0 : A.includes(r)) return r;
                    return !0;
                    return !1;
                    throw new Error(`Couldn't parse "${e}" as a boolean`);
              })(r);
            if ('string' != typeof r) throw new Error(`Expected value (${r}) to be a string`);
            const e = F.replaceEnvVariables(r, { env: process.env });
                return i.y1.resolve(o, i.cS.toPortablePath(e));
                return C.parseLocator(e, !1);
                return parseInt(e);
                return C.parseLocator(e);
                return e;
          })();
            throw new Error('Invalid value, expected one of ' + n.values.join(', '));
          return s;
              if (t.isArray && !r) return [];
              const n = new Map();
              for (const [r, i] of Object.entries(t.properties)) n.set(r, H(e, i));
              return n;
              return t.isArray && !r ? [] : new Map();
                ? t.default.map(t => i.y1.resolve(e.projectCwd, t))
                : i.y1.resolve(e.projectCwd, t.default);
              return t.default;
            if ('yarn_rc_filename' === e.toLowerCase() && 'string' == typeof t) return t;
          return P;
        var _, q;
          (e[(e.LOCKFILE = 0)] = 'LOCKFILE'),
            (e[(e.MANIFEST = 1)] = 'MANIFEST'),
            (e[(e.NONE = 2)] = 'NONE');
            (e.Dependency = 'Dependency'),
              (e.PeerDependencyMeta = 'PeerDependencyMeta');
          })(q || (q = {}));
            (this.projectCwd = null),
              (this.startingCwd = e);
            const n = new z(e);
            void 0 === t || t instanceof Map || (n.projectCwd = t), n.importSettings(j);
            const i = void 0 !== r ? r : t instanceof Map ? t : new Map();
            for (const [e, t] of i) n.activatePlugin(e, t);
            return n;
          static async find(
            e,
            t,
            { lookup: r = _.LOCKFILE, strict: o = !0, usePath: A = !1, useRc: s = !0 } = {}
          ) {
              const e = {};
                (t = t.toLowerCase()),
                  t.startsWith('yarn_') && ((t = a()(t.slice('yarn_'.length))), (e[t] = r));
              return e;
            })();
            delete c.rcFilename;
                lockfileFilename: n
              f = new z(e);
            f.importSettings(h(j)), f.useWithSource('<environment>', h(c), e, { strict: !1 });
            for (const { path: e, cwd: t, data: r } of l)
              f.useWithSource(e, h(r), t, { strict: !1 });
                t = f.get('ignorePath');
              if (null !== e && !t) return f;
            const d = f.get('lockfileFilename');
            let C;
                C = await z.findProjectCwd(e, d);
                break;
                C = await z.findProjectCwd(e, null);
                break;
                C = n.xfs.existsSync(i.y1.join(e, 'package.json')) ? i.y1.resolve(e) : null;
            (f.startingCwd = e), (f.projectCwd = C), f.importSettings(p(j));
            const E = new Map([['@@core', I]]);
              for (const e of t.plugins.keys())
                E.set(e, (m = t.modules.get(e)).__esModule ? m.default : m);
              const r = new Map();
              for (const e of new Set(
                R().builtinModules || Object.keys(process.binding('natives'))
              ))
                r.set(e, () => K(e));
              for (const [e, n] of t.modules) r.set(e, () => n);
                o = e => e.default || e,
                  const { factory: A, name: s } = K(i.cS.fromPortablePath(e));
                  if (n.has(s)) return;
                    c = e => {
                      if (a.has(e)) return a.get(e)();
                      );
                      e => `${e} (when initializing ${s}, defined in ${t})`
                    );
                  r.set(s, () => l), n.add(s), E.set(s, l);
                };
                  A(i.y1.resolve(e, i.cS.toPortablePath(t)), '<environment>');
                    const r = 'string' != typeof n ? n.path : n;
                    A(i.y1.resolve(t, i.cS.toPortablePath(r)), e);
            var m;
            for (const [e, t] of E) f.activatePlugin(e, t);
            f.useWithSource('<environment>', p(c), e, { strict: o });
            for (const { path: e, cwd: t, data: r } of l)
              f.useWithSource(e, p(r), t, { strict: o });
            );
              r = [];
              s = null;
              s = o;
              const e = i.y1.join(s, t);
                const t = await n.xfs.readFilePromise(e, 'utf8');
                let i;
                  i = (0, A.parseSyml)(t);
                  let n = '';
                    new g.UsageError(
                      `Parse error when loading ${e}; please check it's proper Yaml${n}`
                    ))
                  );
                r.push({ path: e, cwd: s, data: i });
              o = i.y1.dirname(s);
            return r;
              r = i.y1.join(t, e);
              const e = await n.xfs.readFilePromise(r, 'utf8');
              return { path: r, cwd: t, data: (0, A.parseSyml)(e) };
            return null;
              A = null;
              if (
                ((A = o), n.xfs.existsSync(i.y1.join(A, 'package.json')) && (r = A), null !== t)
              ) {
                  r = A;
                  break;
              } else if (null !== r) break;
              o = i.y1.dirname(A);
            return r;
              s = n.xfs.existsSync(o)
                ? (0, A.parseSyml)(await n.xfs.readFilePromise(o, 'utf8'))
                : {};
              c = !1;
                a = t(s);
                a = t({});
              if (a === s) return;
              a = s;
                  n = t[e];
                let i;
                    i = n(r);
                    i = n(void 0);
                else i = n;
                r !== i && ((a[e] = i), (c = !0));
              if (!c) return;
            await n.xfs.changeFilePromise(o, (0, A.stringifySyml)(a), { automaticNewlines: !0 });
            const t = k.getHomeFolder();
            return await z.updateConfiguration(t, e);
            this.plugins.set(e, t),
              void 0 !== t.configuration && this.importSettings(t.configuration);
                if (this.settings.has(t)) throw new Error(`Cannot redefine settings "${t}"`);
                this.settings.set(t, r), this.values.set(t, H(this, r));
              this.use(e, t, r, n);
              throw ((t.message += ` (in ${M.pretty(this, e, M.Type.PATH)})`), t);
              if (void 0 === t[o]) continue;
              if ('plugins' === o) continue;
              if ('<environment>' === e && x.has(o)) continue;
                );
              const A = this.settings.get(o);
                  );
                this.invalid.set(o, e);
                continue;
              if (
                this.sources.has(o) &&
                !(i || A.type === O.MAP || (A.isArray && A.concatenateValues))
              )
                continue;
              let s;
                s = Y(this, o, t[o], A, r);
                throw ((t.message += ' in ' + M.pretty(this, e, M.Type.PATH)), t);
                const t = this.values.get(o);
                  this.sources.set(o, `${this.sources.get(o)}, ${e}`);
                const t = this.values.get(o);
                this.values.set(o, i ? [...t, ...s] : [...s, ...t]),
                  this.sources.set(o, `${this.sources.get(o)}, ${e}`);
              } else this.values.set(o, s), this.sources.set(o, e);
            if (!this.values.has(e)) throw new Error(`Invalid configuration key "${e}"`);
            return this.values.get(e);
              o = this.settings.get(e);
            if (void 0 === o)
              throw new g.UsageError(`Couldn't find a configuration settings named "${e}"`);
              if (r.type === O.SECRET && 'string' == typeof t && n.hideSecrets) return '********';
                return i.cS.fromPortablePath(t);
                const i = [];
                for (const o of t) i.push(e(o, r, n));
                return i;
                const i = new Map();
                for (const [o, A] of t.entries()) i.set(o, e(A, r.valueDefinition, n));
                return i;
                const i = new Map();
                  const t = r.properties[o];
                  i.set(o, e(A, t, n));
                return i;
              return t;
            })(n, o, { hideSecrets: t, getNativePaths: r });
            let o, A;
            const s = n.xfs.createWriteStream(e);
                t = i.createStreamReporter(`${r} ${M.pretty(this, 'STDERR', 'red')}`);
              (o = new f.PassThrough()),
                o.pipe(e),
                o.pipe(s),
                (A = new f.PassThrough()),
                A.pipe(t),
                A.pipe(s);
            } else (o = s), (A = s), void 0 !== t && o.write(t + '\n');
            return { stdout: o, stderr: A };
            const e = [];
            for (const t of this.plugins.values())
              for (const r of t.resolvers || []) e.push(new r());
            return new y.B([new v(), new D.d(), new w.O(), ...e]);
            const e = [];
            for (const t of this.plugins.values())
              for (const r of t.fetchers || []) e.push(new r());
            return new B([new Q.N(), new S(), ...e]);
            const e = [];
            for (const t of this.plugins.values()) for (const r of t.linkers || []) e.push(new r());
            return e;
            this.packageExtensions = new Map();
                  throw new Error(
                    'Only semver ranges are allowed as keys for the lockfileExtensions setting'
                  );
                const n = new E.G();
                n.load(r);
                const i = [];
                F.getArrayWithDefault(e, t.identHash).push([t.range, i]);
                    description: `${C.stringifyIdent(t)} > ${C.stringifyIdent(e)}`
                  });
                    description: `${C.stringifyIdent(t)} >> ${C.stringifyIdent(e)}`
                  });
                      description: `${C.stringifyIdent(t)} >> ${e} / ${n}`
                    });
              };
            for (const [e, r] of this.get('packageExtensions')) t(C.parseDescriptor(e, !0), r);
            await this.triggerHook(e => e.registerPackageExtensions, this, t);
            const t = C.copyPackage(e);
              throw new Error(
                'refreshPackageExtensions has to be called before normalizing packages'
              );
            const r = this.packageExtensions.get(e.identHash);
              const n = e.version;
                          t.dependencies.set(e.descriptor.identHash, e.descriptor), (e.active = !0);
                          break;
                          t.peerDependencies.set(e.descriptor.identHash, e.descriptor),
                            (e.active = !0);
                          break;
                          (F.getFactoryWithDefault(t.peerDependenciesMeta, e.selector, () => ({}))[
                            e.key
                          ] = e.value),
                            (e.active = !0);
                          break;
                          F.assertNever(e);
            const n = e => (e.scope ? `${e.scope}__${e.name}` : '' + e.name);
              if ('@types' === e.scope) continue;
                i = C.makeIdent('types', r);
                t.peerDependenciesMeta.set(C.stringifyIdent(i), { optional: !0 });
              const r = C.parseIdent(e);
              t.peerDependencies.has(r.identHash) ||
                t.peerDependencies.set(r.identHash, C.makeDescriptor(r, '*'));
              (t.dependencies = new Map(
                F.sortMap(t.dependencies, ([, e]) => C.stringifyDescriptor(e))
              )),
              (t.peerDependencies = new Map(
                F.sortMap(t.peerDependencies, ([, e]) => C.stringifyDescriptor(e))
              )),
            );
            return F.getFactoryWithDefault(this.limits, e, () => u()(this.get(e)));
              const n = r.hooks;
              if (!n) continue;
              const i = e(n);
              i && (await i(...t));
            for (const r of t) await this.triggerHook(e, ...r);
            let n = t;
              const i = t.hooks;
              if (!i) continue;
              const o = e(i);
              o && (n = await o(n, ...r));
            return n;
              const n = r.hooks;
              if (!n) continue;
              const i = e(n);
              if (!i) continue;
              const o = await i(...t);
              if (void 0 !== o) return o;
            return null;
            return M.pretty(this, e, t);
        z.telemetry = null;
        'use strict';
        var n;
            (e[(e.SCRIPT = 0)] = 'SCRIPT'), (e[(e.SHELLCODE = 1)] = 'SHELLCODE');
          })(n || (n = {}));
        'use strict';
        r.d(t, { h: () => A });
          o = r(71643);
              (this.suggestInstall = r);
            const r = new this(e);
              await t(r);
              r.reportExceptionOnce(e);
              await r.finalize();
            return r;
            return this.errorCount > 0;
            return this.hasErrors() ? 1 : 0;
            return t();
            return await t();
            return await e();
            (this.errorCount += 1),
                `${o.pretty(this.configuration, '➤', 'redBright')} ${this.formatNameWithHyperlink(
                  e
                )}: ${t}\n`
              );
              stop: () => {}
            };
                ));
            return (0, i.Qw)(e, { configuration: this.configuration, json: !1 });
        'use strict';
        r.d(t, { G: () => l });
          g = r(54143);
            (this.indent = '  '),
              (this.errors = []);
            const r = i.y1.join(e, 'package.json');
            return (await t.existsPromise(r)) ? await l.fromFile(r, { baseFs: t }) : null;
            const r = await l.tryFind(e, { baseFs: t });
            if (null === r) throw new Error('Manifest not found');
            return r;
            const r = new l();
            return await r.loadFile(e, { baseFs: t }), r;
            const t = new l();
            return t.loadFromText(e), t;
            let t;
              t = JSON.parse(h(e) || '{}');
              throw ((t.message += ` (when parsing ${e})`), t);
            this.load(t), (this.indent = u(e));
            const r = await t.readFilePromise(e, 'utf8');
            let i;
              i = JSON.parse(h(r) || '{}');
              throw ((t.message += ` (when parsing ${e})`), t);
            this.load(i), (this.indent = u(r));
            if ('object' != typeof e || null === e)
              throw new Error(`Utterly invalid manifest data (${e})`);
            this.raw = e;
            const t = [];
                this.name = g.parseIdent(e.name);
                t.push(new Error("Parsing failed for the 'name' field"));
              const r = [];
              this.os = r;
                'string' != typeof n
                  ? t.push(new Error("Parsing failed for the 'os' field"))
                  : r.push(n);
              const r = [];
              this.cpu = r;
                'string' != typeof n
                  ? t.push(new Error("Parsing failed for the 'cpu' field"))
                  : r.push(n);
              if ('string' == typeof e.browser) this.browser = f(e.browser);
                this.browser = new Map();
                for (const [t, r] of Object.entries(e.browser))
                  this.browser.set(f(t), 'string' == typeof r ? f(r) : r);
                : t.push(new Error('String bin field, but no attached package name'));
                'string' == typeof n
                  ? this.bin.set(r, f(n))
                  : t.push(new Error(`Invalid bin definition for '${r}'`));
                  : t.push(new Error(`Invalid script definition for '${r}'`));
                  t.push(new Error(`Invalid dependency range for '${r}'`));
                  continue;
                let e;
                  e = g.parseIdent(r);
                  t.push(new Error(`Parsing failed for the dependency name '${r}'`));
                  continue;
                const i = g.makeDescriptor(e, n);
                this.dependencies.set(i.identHash, i);
                  t.push(new Error(`Invalid dependency range for '${r}'`));
                  continue;
                let e;
                  e = g.parseIdent(r);
                  t.push(new Error(`Parsing failed for the dependency name '${r}'`));
                  continue;
                const i = g.makeDescriptor(e, n);
                this.devDependencies.set(i.identHash, i);
                let e;
                  e = g.parseIdent(r);
                  t.push(new Error(`Parsing failed for the dependency name '${r}'`));
                  continue;
                ('string' == typeof n && c.validRange(n)) ||
                  (t.push(new Error(`Invalid dependency range for '${r}'`)), (n = '*'));
                const i = g.makeDescriptor(e, n);
                this.peerDependencies.set(i.identHash, i);
              t.push(
                new Error(
                  "'nohoist' is deprecated, please use 'installConfig.hoistingLimits' instead"
                )
              );
              : 'object' == typeof e.workspaces &&
                null !== e.workspaces &&
                Array.isArray(e.workspaces.packages)
              : [];
                : t.push(new Error(`Invalid workspace definition for '${e}'`));
                  t.push(new Error("Invalid meta field for '" + r));
                  continue;
                  i = this.ensureDependencyMeta(e);
                Object.assign(i, n);
                  t.push(new Error("Invalid meta field for '" + r));
                  continue;
                  i = this.ensurePeerDependencyMeta(e);
                Object.assign(i, n);
                    this.resolutions.push({ pattern: (0, o.parseResolution)(r), reference: n });
                    t.push(e);
                    continue;
                else t.push(new Error(`Invalid resolution entry for '${r}'`));
              this.files = new Set();
                'string' == typeof r
                  ? this.files.add(r)
                  : t.push(new Error(`Invalid files entry for '${r}'`));
                'string' == typeof e.publishConfig.access &&
                  (this.publishConfig.access = e.publishConfig.access),
                'string' == typeof e.publishConfig.main &&
                  (this.publishConfig.main = f(e.publishConfig.main)),
                'string' == typeof e.publishConfig.module &&
                  (this.publishConfig.module = f(e.publishConfig.module)),
                if ('string' == typeof e.publishConfig.browser)
                  this.publishConfig.browser = f(e.publishConfig.browser);
                  this.publishConfig.browser = new Map();
                    this.publishConfig.browser.set(f(t), 'string' == typeof r ? f(r) : r);
                  : t.push(new Error('String bin field, but no attached package name'));
                this.publishConfig.bin = new Map();
                    : t.push(new Error(`Invalid bin definition for '${r}'`));
                this.publishConfig.executableFiles = new Set();
                    : t.push(new Error('Invalid executable file definition'));
              this.installConfig = {};
                  : t.push(new Error('Unrecognized installConfig key: ' + r));
                  t.push(new Error(`Invalid dependency range for '${r}'`));
                  continue;
                let e;
                  e = g.parseIdent(r);
                  t.push(new Error(`Parsing failed for the dependency name '${r}'`));
                  continue;
                const i = g.makeDescriptor(e, n);
                this.dependencies.set(i.identHash, i);
                  A = this.ensureDependencyMeta(o);
                Object.assign(A, { optional: !0 });
            'boolean' == typeof e.preferUnplugged && (this.preferUnplugged = e.preferUnplugged),
              (this.errors = t);
                return this.dependencies;
                return this.devDependencies;
                return this.peerDependencies;
                throw new Error(`Unsupported value ("${e}")`);
            return !!this.dependencies.has(e.identHash) || !!this.peerDependencies.has(e.identHash);
            return !!this.dependencies.has(e.identHash) || !!this.devDependencies.has(e.identHash);
            return !!this.peerDependencies.has(e.identHash);
            return !!this.hasHardDependency(e) || !!this.hasSoftDependency(e);
            return null === this.os || p(this.os, e);
            return null === this.cpu || p(this.cpu, e);
              throw new Error(`Invalid meta field range for '${g.stringifyDescriptor(e)}'`);
              r = 'unknown' !== e.range ? e.range : null;
            let n = this.dependenciesMeta.get(t);
            n || this.dependenciesMeta.set(t, (n = new Map()));
            let i = n.get(r);
            return i || n.set(r, (i = {})), i;
            if ('unknown' !== e.range)
              throw new Error(`Invalid meta field range for '${g.stringifyDescriptor(e)}'`);
            const t = g.stringifyIdent(e);
            let r = this.peerDependenciesMeta.get(t);
            return r || this.peerDependenciesMeta.set(t, (r = {})), r;
            const n = new Set(r.filter(e => Object.prototype.hasOwnProperty.call(this.raw, e)));
            if (0 === n.size || Object.prototype.hasOwnProperty.call(this.raw, e)) this.raw[e] = t;
                i = (this.raw = {});
              let o = !1;
              for (const A of Object.keys(r))
                (i[A] = r[A]), o || (n.delete(A), 0 === n.size && ((i[e] = t), (o = !0)));
              null !== this.languageName
                ? (e.languageName = this.languageName)
                : delete e.languageName,
              const t = this.browser;
                      .map(e => ({ [e]: t.get(e) }))
                  ));
            } else delete e.browser;
                    .map(e => ({ [e]: this.bin.get(e) }))
                      packages: this.workspaceDefinitions.map(({ pattern: e }) => e)
                : delete e.workspaces;
              n = [];
              const i = this.dependenciesMeta.get(g.stringifyIdent(e));
              let o = !1;
                const e = i.get(null);
                e && e.optional && (o = !0);
              o ? n.push(e) : r.push(e);
                  ...g.sortDescriptors(r).map(e => ({ [g.stringifyIdent(e)]: e.range }))
                    ...g.sortDescriptors(n).map(e => ({ [g.stringifyIdent(e)]: e.range }))
                    ...g
                      .sortDescriptors(this.devDependencies.values())
                      .map(e => ({ [g.stringifyIdent(e)]: e.range }))
                      .map(e => ({ [g.stringifyIdent(e)]: e.range }))
              (e.dependenciesMeta = {});
              for (const [i, o] of a.sortMap(n.entries(), ([e, t]) =>
                null !== e ? '0' + e : '1'
              )) {
                const n =
                    null !== i ? g.stringifyDescriptor(g.makeDescriptor(g.parseIdent(r), i)) : r,
                  A = { ...o };
                t && null === i && delete A.optional,
                  0 !== Object.keys(A).length && (e.dependenciesMeta[n] = A);
                    ...a
                      .sortMap(this.peerDependenciesMeta.entries(), ([e, t]) => e)
                      .map(([e, t]) => ({ [e]: t }))
                      [(0, o.stringifyResolution)(e)]: t
              null !== this.preferUnplugged
                ? (e.preferUnplugged = this.preferUnplugged)
                : delete e.preferUnplugged,
            );
          const t = e.match(/^[ \t]+/m);
          return t ? t[0] : '  ';
          return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
            n = !1;
              if (((n = !0), t === i.slice(1))) return !1;
            } else if (((r = !1), i === t)) return !0;
          return n && r;
          return e.replace(/\\/g, '/');
        (l.fileName = 'package.json'),
          (l.hardDependencies = ['dependencies', 'devDependencies']);
        'use strict';
        var n;
          return 'YN' + e.toString(10).padStart(4, '0');
            (e[(e.UNNAMED = 0)] = 'UNNAMED'),
              (e[(e.CONSTRAINTS_INCOMPATIBLE_DEPENDENCY = 24)] =
                'CONSTRAINTS_INCOMPATIBLE_DEPENDENCY'),
              (e[(e.INVALID_CONFIGURATION_VALUE = 67)] = 'INVALID_CONFIGURATION_VALUE');
          })(n || (n = {}));
        'use strict';
        r.d(t, { B: () => i });
        var n = r(54143);
            this.resolvers = e.filter(e => e);
            return !!this.tryResolverByDescriptor(e, t);
            return !!this.tryResolverByLocator(e, t);
            return this.getResolverByLocator(e, t).shouldPersistResolution(e, t);
            return this.getResolverByDescriptor(e, r).bindDescriptor(e, t, r);
            return this.getResolverByDescriptor(e, t).getResolutionDependencies(e, t);
            const n = this.getResolverByDescriptor(e, r);
            return await n.getCandidates(e, t, r);
            return this.getResolverByDescriptor(e, r).getSatisfying(e, t, r);
            const r = this.getResolverByLocator(e, t);
            return await r.resolve(e, t);
            const r = this.resolvers.find(r => r.supportsDescriptor(e, t));
            return r || null;
            const r = this.resolvers.find(r => r.supportsDescriptor(e, t));
                n.prettyDescriptor(t.project.configuration, e) +
                  " isn't supported by any available resolver"
              );
            return r;
            const r = this.resolvers.find(r => r.supportsLocator(e, t));
            return r || null;
            const r = this.resolvers.find(r => r.supportsLocator(e, t));
                n.prettyLocator(t.project.configuration, e) +
                  " isn't supported by any available resolver"
              );
            return r;
        'use strict';
        r.d(t, { I: () => oe });
          a = r(76417);
            var c = t[o];
              if (
                ((c.value = e.join(n.slice(a, a + c.count))), (a += c.count), o && t[o - 1].added)
              ) {
                var g = t[o - 1];
                (t[o - 1] = t[o]), (t[o] = g);
                var l = r.slice(s, s + c.count);
                (l = l.map(function (e, t) {
                  var r = n[a + t];
                  return r.length > e.length ? r : e;
                  (c.value = e.join(l));
              } else c.value = e.join(r.slice(s, s + c.count));
              (s += c.count), c.added || (a += c.count);
          var u = t[A - 1];
          );
          return { newPos: e.newPos, components: e.components.slice(0) };
              n = r.callback;
            'function' == typeof r && ((n = r), (r = {})), (this.options = r);
            var i = this;
                    n(void 0, e);
                : e;
            (e = this.castInput(e)),
              (t = this.castInput(t)),
              (e = this.removeEmpty(this.tokenize(e)));
              h = this.extractCommon(u[0], t, e, 0);
            if (u[0].newPos + 1 >= A && h + 1 >= s)
              return o([{ value: this.join(t), count: t.length }]);
                  p = (h ? h.newPos : 0) - r;
                c && (u[r - 1] = void 0);
                  d = h && 0 <= p && p < s;
                    return o(g(i, n.components, t, e, i.useLongestToken));
                  u[r] = n;
                } else u[r] = void 0;
              a++;
                  if (a > c) return n();
                  p() || e();
                }, 0);
              })();
                var f = p();
                if (f) return f;
            var n = e[e.length - 1];
              : e.push({ count: 1, added: t, removed: r });
              A++, s++, a++;
            return a && e.components.push({ count: a }), (e.newPos = A), s;
              : e === t || (this.options.ignoreCase && e.toLowerCase() === t.toLowerCase());
            for (var t = [], r = 0; r < e.length; r++) e[r] && t.push(e[r]);
            return t;
            return e;
            return e.split('');
            return e.join('');
          }
        };
        new c();
          p = new c();
        (p.equals = function (e, t) {
          );
              !t[r + 1] &&
                t[r + 2] &&
                u.test(t[r]) &&
                u.test(t[r + 2]) &&
                ((t[r] += t[r + 2]), t.splice(r + 1, 2), r--);
            return t;
          });
        var f = new c();
            r = e.split(/(\n|\r\n)/);
          r[r.length - 1] || r.pop();
            var i = r[n];
              : (this.options.ignoreWhitespace && (i = i.trim()), t.push(i));
          return t;
        };
        var d = new c();
          return e.split(/(\S.+?[.!?])(?=\s+|$)/);
        };
        var C = new c();
                  return typeof e;
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    : typeof e;
                })(e);
                for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                return r;
              if (
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
                return Array.from(e);
              throw new TypeError('Invalid attempt to spread non-iterable instance');
          );
          return e.split(/([{}:;,]|\s+)/);
        };
          B = new c();
        (B.useLongestToken = !0),
                      return void 0 === t ? r : t;
                  : n;
                    (r = r || []), (n = n || []), i && (t = i(o, t));
                    var A, s;
                    for (A = 0; A < r.length; A += 1) if (r[A] === t) return n[A];
                      for (
                        r.push(t), s = new Array(t.length), n.push(s), A = 0;
                        A < t.length;
                        A += 1
                      )
                        s[A] = e(t[A], r, n, i, o);
                      return r.pop(), n.pop(), s;
                    t && t.toJSON && (t = t.toJSON());
                      r.push(t), (s = {}), n.push(s);
                        c = [];
                      for (a in t) t.hasOwnProperty(a) && c.push(a);
                      for (c.sort(), A = 0; A < c.length; A += 1)
                        (a = c[A]), (s[a] = e(t[a], r, n, i, a));
                      r.pop(), n.pop();
                    } else s = t;
                    return s;
                );
            return c.prototype.equals.call(
              B,
              e.replace(/,([\r\n])/g, '$1'),
              t.replace(/,([\r\n])/g, '$1')
            );
          });
        var y = new c();
          A || (A = {}), void 0 === A.context && (A.context = 4);
            return f.diff(e, t, r);
          })(r, n, A);
              return ' ' + e;
            });
          s.push({ value: '', lines: [] });
                  i = t.lines || t.value.replace(/\n$/, '').split('\n');
                  var o;
                    var f = s[e - 1];
                    (g = h),
                      f &&
                        ((u = A.context > 0 ? a(f.lines.slice(-A.context)) : []),
                        (g -= u.length),
                        (l -= u.length));
                  (o = u).push.apply(
                        return (t.added ? '+' : '-') + e;
                    t.added ? (p += i.length) : (h += i.length);
                      var d;
                      (d = u).push.apply(d, E(a(i)));
                        I = Math.min(i.length, A.context);
                      (C = u).push.apply(C, E(a(i.slice(0, I))));
                        lines: u
                      };
                          w = 0 == i.length && u.length > m.oldLines;
                          ((B || w) && y) || u.push('\\ No newline at end of file');
                      c.push(m), (g = 0), (l = 0), (u = []);
                  (h += i.length), (p += i.length);
            d(C);
          return { oldFileName: e, newFileName: t, oldHeader: i, newHeader: o, hunks: c };
        (y.tokenize = function (e) {
          return e.slice();
            return e;
          });
          M = r(31669);
        const F = require('v8');
          T = r(54143);
            (e, t, r = '', n, i) => `https://${r}github.com/${n}.git#commit=${i}`
            (e, t, r = '', n, i) => `https://${r}github.com/${n}.git#commit=${i}`
          ],
          [
            /^https?:\/\/[^/]+\/(?:[^/]+\/)*(?:@[^/]+\/)?([^/]+)\/-\/\1-[^/]+\.tgz(?:#|$)/,
            e => 'npm:' + e
            e => 'npm:' + e
          [/^[^/]+\.tgz#[0-9a-f]+$/, e => 'npm:' + e]
        ];
            this.resolutions = null;
            const r = i.y1.join(e.cwd, e.configuration.get('lockfileFilename'));
            if (!n.xfs.existsSync(r)) return;
              s = (0, A.parseSyml)(o);
            if (Object.prototype.hasOwnProperty.call(s, '__metadata')) return;
            const a = (this.resolutions = new Map());
              let n = T.tryParseDescriptor(r);
                t.reportWarning(
                  P.b.YARN_IMPORT_FAILED,
                  `Failed to parse the string "${r}" into a proper descriptor`
                );
                continue;
              }
              k().validRange(n.range) && (n = T.makeDescriptor(n, 'npm:' + n.range));
              const { version: i, resolved: o } = s[r];
              if (!o) continue;
              let A;
                const r = o.match(e);
                  A = t(i, ...r);
                  break;
                );
                continue;
              const c = T.makeLocator(n, A);
              a.set(n.descriptorHash, c);
            return !!this.resolutions && this.resolutions.has(e.descriptorHash);
            return !1;
            throw new Error(
              "Assertion failed: This resolver doesn't support resolving locators to packages"
            );
            return e;
            return [];
            if (!this.resolutions)
              throw new Error('Assertion failed: The resolution store should have been setup');
            const n = this.resolutions.get(e.descriptorHash);
            if (!n) throw new Error('Assertion failed: The resolution should have been registered');
            return [n];
            return null;
            throw new Error(
              "Assertion failed: This resolver doesn't support resolving locators to packages"
            );
            );
            return !!t.project.originalPackages.has(e.locatorHash);
            );
            return e;
            return [];
            let n = r.project.originalPackages.get(T.convertDescriptorToLocator(e).locatorHash);
            if (n) return [n];
            const i = r.project.storedResolutions.get(e.descriptorHash);
            if (!i)
              throw new Error(
                'Expected the resolution to have been successful - resolution not found'
              );
              throw new Error(
                'Expected the resolution to have been successful - package not found'
              );
            return [n];
            return null;
            const r = t.project.originalPackages.get(e.locatorHash);
              );
            return r;
          H = r(35691);
            this.resolver = e;
            return this.resolver.supportsDescriptor(e, t);
            return this.resolver.supportsLocator(e, t);
            return this.resolver.shouldPersistResolution(e, t);
            return this.resolver.bindDescriptor(e, t, r);
            return this.resolver.getResolutionDependencies(e, t);
            );
            );
            );
          ee = r(32485);
          ie = (0, M.promisify)(K().gunzip);
            (this.resolutionAliases = new Map()),
              (this.cwd = e);
            var r, o, A;
            if (!e.projectCwd) throw new s.UsageError('No project found in ' + t);
              g = null;
                a = g;
                break;
              c = i.y1.dirname(g);
            const l = new oe(e.projectCwd, { configuration: e });
              null === (o = L.VK.telemetry) ||
                void 0 === o ||
                o.reportWorkspaceCount(l.workspaces.length),
                  l.workspaces.reduce(
                    (e, t) => e + t.manifest.dependencies.size + t.manifest.devDependencies.size,
                    0
                  )
                );
            const u = l.tryWorkspaceByCwd(a);
            if (u) return { project: l, workspace: u, locator: u.anchoredLocator };
            const h = await l.findLocatorForLocation(a + '/', { strict: !0 });
            if (h) return { project: l, locator: h, workspace: null };
            );
              '# Warning: This file is automatically generated. Removing it is fine, but will\n# cause all your builds to become invalidated.\n';
              const n = t.get(e);
              if (void 0 === n)
                throw new Error('Assertion failed: The locator should have been registered');
              return [T.stringifyLocator(n), n.locatorHash, r];
            });
            for (const [e, t, i] of X.sortMap(n, [e => e[0], e => e[1]]))
              (r += '\n'), (r += `# ${e}\n`), (r += JSON.stringify(t) + ':\n'), (r += `  ${i}\n`);
            return r;
            (this.storedResolutions = new Map()),
              (this.lockFileChecksum = null);
              t = this.configuration.get('defaultLanguageName');
              const r = await n.xfs.readFilePromise(e, 'utf8');
              this.lockFileChecksum = V.makeHash('1', r);
              const i = (0, A.parseSyml)(r);
                  r = i.__metadata.cacheKey;
                  if ('__metadata' === n) continue;
                  const o = i[n];
                    throw new Error(
                      `Assertion failed: Expected the lockfile entry to have a resolution field (${n})`
                    );
                    s = new Y.G();
                  s.load(o);
                    f = s.bin;
                    const e =
                      void 0 === r || o.checksum.includes('/') ? o.checksum : `${r}/${o.checksum}`;
                    this.storedChecksums.set(A.locatorHash, e);
                      bin: f
                    };
                    this.originalPackages.set(e.locatorHash, e);
                    const r = T.parseDescriptor(t);
                      this.storedResolutions.set(r.descriptorHash, A.locatorHash);
                      const e = T.convertLocatorToDescriptor(A);
                        this.resolutionAliases.set(r.descriptorHash, e.descriptorHash));
            (this.workspaces = []),
              (this.workspacesByCwd = new Map()),
              (this.workspacesByIdent = new Map());
            let e = [this.cwd];
              const t = e;
              e = [];
                if (this.workspacesByCwd.has(r)) continue;
                  n = this.storedPackages.get(t.anchoredLocator.locatorHash);
                n && (t.dependencies = n.dependencies);
                for (const r of t.workspacesCwds) e.push(r);
            const t = new q.j(e, { project: this });
            await t.setup();
            const r = this.workspacesByIdent.get(t.locator.identHash);
                `Duplicate workspace name ${T.prettyIdent(
                  this.configuration,
                  t.locator
                )}: ${e} conflicts with ${r.cwd}`
              );
            );
            return this.getWorkspaceByCwd(this.cwd);
            i.y1.isAbsolute(e) || (e = i.y1.resolve(this.cwd, e));
            const t = this.workspacesByCwd.get(e);
            return t || null;
            const t = this.tryWorkspaceByCwd(e);
            if (!t) throw new Error(`Workspace not found (${e})`);
            return t;
            let t = null;
              i.y1.relative(r.cwd, e).startsWith('../') ||
                (t && t.cwd.length >= r.cwd.length) ||
                (t = r);
            return t || null;
            const t = this.tryWorkspaceByFilePath(e);
            if (!t) throw new Error(`Workspace not found (${e})`);
            return t;
            const t = this.workspacesByIdent.get(e.identHash);
            return void 0 === t ? null : t;
            const t = this.tryWorkspaceByIdent(e);
            if (!t)
              throw new Error(`Workspace not found (${T.prettyIdent(this.configuration, e)})`);
            return t;
            const t = this.tryWorkspaceByIdent(e);
            return null !== t && t.accepts(e.range) ? t : null;
            const t = this.tryWorkspaceByDescriptor(e);
            if (null === t)
              throw new Error(`Workspace not found (${T.prettyDescriptor(this.configuration, e)})`);
            return t;
            T.isVirtualLocator(e) && (e = T.devirtualizeLocator(e));
            const t = this.tryWorkspaceByIdent(e);
              (t.locator.locatorHash !== e.locatorHash &&
                t.anchoredLocator.locatorHash !== e.locatorHash)
              : t;
            const t = this.tryWorkspaceByLocator(e);
            if (!t)
              throw new Error(`Workspace not found (${T.prettyLocator(this.configuration, e)})`);
            return t;
              const t = this.storedPackages.get(e.anchoredLocator.locatorHash);
              if (!t) throw new Error('Assertion failed: Expected workspace to have been resolved');
              e.dependencies = new Map(t.dependencies);
            const t = e => {
                this.storedResolutions.delete(e), this.storedDescriptors.delete(e);
              r = e => {
                this.originalPackages.delete(e),
                  this.storedPackages.delete(e),
                  this.accessibleLocators.delete(e);
              };
              const n = this.storedResolutions.get(e.descriptorHash);
              t(e.descriptorHash);
              const i = new Set(this.storedResolutions.values());
              void 0 === n || i.has(n) || r(n);
              r(e.locatorHash);
              for (const [r, n] of this.storedResolutions) n === e.locatorHash && t(r);
            const e = this.configuration.makeResolver();
              let r;
                r = e.shouldPersistResolution(t, { project: this, resolver: e });
                r = !1;
              r || this.forgetResolution(t);
                T.isVirtualDescriptor(r) && e.dependencies.set(t, T.devirtualizeDescriptor(r));
              n = this.topLevelWorkspace.manifest.dependenciesMeta.get(T.stringifyIdent(e));
            if (!n) return r;
            const i = n.get(null);
            if ((i && Object.assign(r, i), null === t || !k().valid(t))) return r;
            for (const [e, i] of n) null !== e && e === t && Object.assign(r, i);
            return r;
              i = { project: this, report: r };
              const n = await r.findPackageLocator(e, i);
                  if ((await r.findPackageLocation(n, i)).replace(re, '') !== e.replace(re, ''))
                    continue;
                return n;
            return null;
            for (const t of e.validationWarnings) e.report.reportWarning(t.name, t.text);
            for (const t of e.validationErrors) e.report.reportError(t.name, t.text);
              throw new Error('Workspaces must have been setup before calling this function');
            this.forgetVirtualResolutions(), e.lockfileOnly || this.forgetTransientResolutions();
              r = new U();
            await r.setup(this, { report: e.report });
                      fetcher: A
                    }
              h = new Set();
            let p = new Set();
              const t = e.anchoredDescriptor;
              a.set(t.descriptorHash, t), p.add(t.descriptorHash);
              const e = p;
              p = new Set();
              for (const t of e) g.has(t) && e.delete(t);
              if (0 === e.size) break;
                r = new Map();
                const i = a.get(n);
                if (!i)
                  throw new Error('Assertion failed: The descriptor should have been registered');
                let A = u.get(n);
                  u.set(n, (A = new Set()));
                  for (const e of o.getResolutionDependencies(i, s))
                    a.set(e.descriptorHash, e), A.add(e.descriptorHash);
                const l = X.getMapWithDefault(r, n);
                  const i = g.get(r);
                    const e = c.get(i);
                    if (void 0 === e)
                      throw new Error('Assertion failed: The package should have been registered');
                    l.set(r, e);
                  } else t.add(n), e.add(r);
              for (const r of t) e.delete(r), p.add(r);
              if (0 === e.size)
                throw new Error(
                  'Assertion failed: Descriptors should not have cyclic dependencies'
                );
                    Array.from(e).map(async e => {
                      const t = a.get(e);
                      if (void 0 === t)
                        throw new Error(
                          'Assertion failed: The descriptor should have been registered'
                        );
                      const n = r.get(t.descriptorHash);
                        throw new Error(
                          'Assertion failed: The descriptor dependencies should have been registered'
                        );
                      let i;
                        i = await o.getCandidates(t, n, s);
                        throw (
                          ((e.message = `${T.prettyDescriptor(this.configuration, t)}: ${
                            e.message
                          }`),
                          e)
                        );
                        throw new Error(
                          'No candidate found for ' + T.prettyDescriptor(this.configuration, t)
                        );
                      return [t.descriptorHash, i];
                i = new Map();
              for (const [e, t] of n) 1 === t.length && (i.set(e, t[0]), n.delete(e));
                const r = t.find(e => c.has(e.locatorHash));
                r && (i.set(e, r), n.delete(e));
                const e = new (v().Solver)();
                for (const t of n.values()) e.require(v().or(...t.map(e => e.locatorHash)));
                  A = 1 / 0;
                  const n = t.getTrueVars();
                  e.forbid(t.getFormula()), n.length < A && ((o = n), (A = n.length)), (r -= 1);
                if (!o) throw new Error('Assertion failed: No resolution found by the SAT solver');
                const s = new Set(o);
                  const r = t.find(e => s.has(e.locatorHash));
                    throw new Error(
                      'Assertion failed: The descriptor should have been solved during the previous step'
                    );
                  i.set(e, r), n.delete(e);
              const A = Array.from(i.values()).filter(e => !c.has(e.locatorHash)),
                    A.map(async e => {
                        t => `${T.prettyLocator(this.configuration, e)}: ${t}`
                      );
                        );
                      const r = this.configuration.normalizePackage(t);
                        const i = await this.configuration.reduceHook(
                          e => e.reduceDependency,
                          n,
                          this,
                          r,
                          n,
                          {
                            resolver: o,
                            resolveOptions: s
                          }
                        );
                          throw new Error(
                            'Assertion failed: The descriptor ident cannot be changed through aliases'
                          );
                        const A = o.bindDescriptor(i, e, s);
                        r.dependencies.set(t, A);
                      return [r.locatorHash, { original: t, pkg: r }];
                );
                const e = i.get(t);
                if (!e)
                  throw new Error('Assertion failed: The locator should have been registered');
                g.set(t, e.locatorHash);
                const r = f.get(e.locatorHash);
                if (void 0 === r) continue;
                const { original: n, pkg: o } = r;
                l.set(n.locatorHash, n), c.set(o.locatorHash, o);
                  a.set(e.descriptorHash, e), p.add(e.descriptorHash);
                  const t = this.resolutionAliases.get(e.descriptorHash);
                  if (void 0 === t) continue;
                  if (e.descriptorHash === t) continue;
                  const r = this.storedDescriptors.get(t);
                  if (!r)
                    throw new Error('Assertion failed: The alias should have been registered');
                    h.add(e.descriptorHash));
              let e = !1;
                if (!a.get(t))
                  throw new Error('Assertion failed: The descriptor should have been registered');
                const r = this.resolutionAliases.get(t);
                if (void 0 === r)
                  throw new Error('Assertion failed: The descriptor should have an alias');
                const n = g.get(r);
                if (void 0 === n)
                  throw new Error('Assertion failed: The resolution should have been registered');
                'temporary' !== n && (h.delete(t), g.set(t, n), (e = !0));
              if (!e) throw new Error('Alias loop detected');
              C = new Set();
              tolerateMissingPackages: g = !1
                  e.workspaces.map(e => {
                      r = o.get(t);
                      if (g) return [t, null];
                      throw new Error(
                        'Assertion failed: The workspace should have an associated package'
                      );
                    return [t, T.copyPackage(r)];
                    o = u
                      .map((e, t) => `${(t + 1 + '.').padStart(r, ' ')} ${T.stringifyLocator(e)}\n`)
                      .join('');
                  );
                C = e => {
                  const t = r.get(e.descriptorHash);
                  if (void 0 === t)
                    throw new Error('Assertion failed: The resolution should have been registered');
                  const n = o.get(t);
                  if (!n) throw new Error('Assertion failed: The package could not be found');
                  return n;
                  u.length > 1e3 && d(), u.push(e);
                  const n = E(e, t, r);
                  return u.pop(), n;
                  if (A.has(n.locatorHash)) return;
                  A.add(n.locatorHash), u || s.delete(n.locatorHash);
                  const E = o.get(n.locatorHash);
                    if (g) return;
                    );
                    Q = [];
                    if (E.peerDependencies.has(A.identHash) && !i) continue;
                      );
                    a.delete(A.descriptorHash);
                    let s = u;
                      const e = E.dependenciesMeta.get(T.stringifyIdent(A));
                        const t = e.get(null);
                        void 0 !== t && t.optional && (s = !0);
                    const h = r.get(A.descriptorHash);
                      if (g) continue;
                      );
                    const v = f.get(h) || o.get(h);
                      );
                      I(v, !1, s);
                      continue;
                    const b = l.get(v.locatorHash);
                    let D, S;
                    'number' == typeof b && b >= 2 && d();
                    const k = new Set();
                      (D = T.virtualizeDescriptor(A, n.locatorHash)),
                        m.push([v, D, S]);
                          let o = E.dependencies.get(i.identHash);
                                const t = S.peerDependenciesMeta.get(T.stringifyIdent(i));
                                    `${T.prettyLocator(
                                      e.configuration,
                                      n
                                    )} doesn't provide ${T.prettyDescriptor(
                                  );
                              o = T.makeDescriptor(i, 'missing:');
                              X.getSetWithDefault(p, o.descriptorHash).add(S.locatorHash);
                            if ('missing:' === o.range) k.add(o.identHash);
                              const t = C(o);
                                  `${T.prettyLocator(
                                    n
                                  )} provides ${T.prettyLocator(e.configuration, t)} with version ${
                                    t.version
                                  } which doesn't satisfy ${T.prettyRange(
                                );
                          } else S.peerDependencies.delete(i.identHash);
                        S.dependencies = new Map(
                          X.sortMap(S.dependencies, ([e, t]) => T.stringifyIdent(t))
                        );
                        if (!o.has(S.locatorHash)) return;
                          t = void 0 !== e ? e + 1 : 1;
                        l.set(v.locatorHash, t), I(S, !1, s), l.set(v.locatorHash, t - 1);
                        if (o.has(S.locatorHash)) for (const e of k) S.dependencies.delete(e);
                      });
                  for (const e of [...B, ...y]) e();
                  let v;
                    v = !0;
                      if (!o.has(s.locatorHash)) continue;
                          ...[...s.dependencies.values()].map(t => {
                            const n = 'missing:' !== t.range ? r.get(t.descriptorHash) : 'missing:';
                              );
                            return n;
                        g = a.get(c);
                        a.set(c, i);
                        continue;
                      if (g === i) continue;
                      (v = !1),
                        A.delete(s.locatorHash);
                        u = [E.locatorHash, ...l];
                        const t = o.get(e);
                        void 0 !== t && t.dependencies.set(i.identHash, g);
                  } while (!v);
                  for (const e of [...w, ...Q]) e();
                };
              for (const t of e.workspaces)
                a.delete(t.anchoredDescriptor.descriptorHash), I(t.anchoredLocator, !0, !1);
              allPackages: c
            });
            for (const e of f) a.delete(e), g.delete(e);
            (this.storedResolutions = g),
              this.refreshWorkspaceDependencies();
              i = {
                checksums: this.storedChecksums,
                project: this,
                cache: e,
                fetcher: n,
                report: t
              },
                    e => {
                      const t = this.storedPackages.get(e);
                      if (!t)
                        throw new Error(
                          'Assertion failed: The locator should have been registered'
                        );
                      return T.stringifyLocator(t);
                    }
              );
            let A = !1;
            const s = H.yG.progressViaCounter(o.length);
            t.reportProgress(s);
            const a = D()(32);
                  o.map(e =>
                      const r = this.storedPackages.get(e);
                      if (!r)
                        throw new Error(
                          'Assertion failed: The locator should have been registered'
                        );
                      if (T.isVirtualLocator(r)) return;
                      let o;
                        o = await n.fetch(r, i);
                        );
                        o.releaseFs && o.releaseFs();
                      s.tick();
                );
              throw A;
                skipIntegrityCheck: !0
              u = new Map(g.map(e => [e, e.makeInstaller(l)])),
              f = new Map();
              const t = this.storedPackages.get(e);
              if (!t) throw new Error('Assertion failed: The locator should have been registered');
              const r = await s.fetch(t, c);
                  { scripts: n } = await Y.G.find(r.prefixPath, { baseFs: r.packageFs });
                for (const t of ['preinstall', 'install', 'postinstall'])
                  n.has(t) && e.push([x.k.SCRIPT, t]);
                  for (const e of u.values()) await e.installPackage(t, r);
                  r.releaseFs && r.releaseFs();
                const o = i.y1.join(r.packageFs.getRealPath(), r.prefixPath);
                p.set(t.locatorHash, o),
                  e.length > 0 && f.set(t.locatorHash, { directives: e, buildLocations: [o] });
                const e = g.find(e => e.supportsPackage(t, l));
                    T.prettyLocator(this.configuration, t) +
                      " isn't supported by any available linker"
                  );
                const n = u.get(e);
                if (!n)
                  throw new Error('Assertion failed: The installer should have been registered');
                let i;
                  i = await n.installPackage(t, r);
                  r.releaseFs && r.releaseFs();
                      buildLocations: [i.packageLocation]
                    });
            const d = new Map();
              const t = this.storedPackages.get(e);
              if (!t) throw new Error('Assertion failed: The locator should have been registered');
                  const i = p.get(t.locatorHash);
                    );
                  const o = [];
                    const A = this.storedResolutions.get(n.descriptorHash);
                        )}, from ${T.prettyLocator(
                          this.configuration,
                          t
                        )})should have been registered`
                      );
                    const s = this.storedPackages.get(A);
                      );
                    const a = null === this.tryWorkspaceByLocator(s) ? h.get(A) : null;
                      );
                    const c = null === a;
                    if (a === e || r || c) null !== p.get(s.locatorHash) && o.push([n, s]);
                      X.getArrayWithDefault(d, A).push(i);
                  null !== i && (await n.attachInternalDependencies(t, o));
                };
              if (r) for (const [e, t] of u) await n(e, t);
                const e = h.get(t.locatorHash);
                if (!e) throw new Error('Assertion failed: The linker should have been found');
                const r = u.get(e);
                if (!r)
                  throw new Error('Assertion failed: The installer should have been registered');
                await n(e, r);
              const r = this.storedPackages.get(e);
              if (!r) throw new Error('Assertion failed: The package should have been registered');
              const n = h.get(r.locatorHash);
              if (!n) throw new Error('Assertion failed: The linker should have been found');
              const i = u.get(n);
              if (!i)
                throw new Error('Assertion failed: The installer should have been registered');
              await i.attachExternalDependents(r, t);
              const t = await e.finalizeInstall();
                      buildLocations: e.buildLocations
                    });
            if (o) return;
              I = new Set(f.keys());
            for (const e of I) C.delete(e);
            const E = (0, a.createHash)('sha512');
                e => e.globalHashGeneration,
                e => {
                  E.update('\0'), E.update(e);
              );
              y = e => {
                let t = B.get(e.locatorHash);
                if (void 0 !== t) return t;
                const r = this.storedPackages.get(e.locatorHash);
                if (void 0 === r)
                  throw new Error('Assertion failed: The package should have been registered');
                const n = (0, a.createHash)('sha512');
                n.update(e.locatorHash), B.set(e.locatorHash, '<recursive>');
                  const t = this.storedResolutions.get(e.descriptorHash);
                    );
                  const r = this.storedPackages.get(t);
                  if (void 0 === r)
                    throw new Error('Assertion failed: The package should have been registered');
                  n.update(y(r));
                return (t = n.digest('hex')), B.set(e.locatorHash, t), t;
                const r = (0, a.createHash)('sha512');
                r.update(m), r.update(y(e));
                for (const e of t) r.update(e);
                return r.digest('hex');
              v = n.xfs.existsSync(Q)
                ? (0, A.parseSyml)(await n.xfs.readFilePromise(Q, 'utf8'))
                : {},
              b = new Map();
                r = [];
                const o = this.storedPackages.get(e);
                if (!o)
                  throw new Error('Assertion failed: The package should have been registered');
                let A = !0;
                  const t = this.storedResolutions.get(e.descriptorHash);
                    );
                    A = !1;
                    break;
                if (!A) continue;
                I.delete(e);
                const s = f.get(o.locatorHash);
                if (!s)
                  throw new Error(
                    'Assertion failed: The build directive should have been registered'
                  );
                const a = w(o, s.buildLocations);
                if (
                  Object.prototype.hasOwnProperty.call(v, o.locatorHash) &&
                  v[o.locatorHash] === a
                )
                  b.set(o.locatorHash, a);
                        T.prettyLocator(this.configuration, o) +
                          ' must be rebuilt because its dependency tree changed'
                      );
                      throw new Error(
                        `Assertion failed: Expected the build location to be absolute (not ${e})`
                      );
                          )})\n`;
                              s += `# Script name: ${A}\n`;
                              break;
                              s += `# Script code: ${A}\n`;
                          const c = null;
                          await n.xfs.mktempPromise(async g => {
                              { stdout: u, stderr: h } = this.configuration.getSubprocessStreams(
                                l,
                                {
                                  header: s,
                                  prefix: T.prettyLocator(this.configuration, o),
                                  report: t
                                }
                              );
                            let p;
                                    stderr: h
                                  });
                                  break;
                                    stderr: h
                                  });
                              h.write(e.stack), (p = 1);
                            if ((u.end(), h.end(), 0 === p)) return b.set(o.locatorHash, a), !0;
                            n.xfs.detachTemp(g);
                            )}, logs can be found here: ${W.pretty(
                              this.configuration,
                              l,
                              W.Type.PATH
                            )})`;
                            );
                          });
                    );
                  .map(e => {
                    const t = this.storedPackages.get(e);
                    if (!t)
                      throw new Error('Assertion failed: The package should have been registered');
                    return T.prettyLocator(this.configuration, t);
                  .join(', ');
                );
                break;
                t = oe.generateBuildStateFile(b, this.storedPackages);
                await n.xfs.changeFilePromise(e, t, { automaticNewlines: !0 });
            } else await n.xfs.removePromise(Q);
            var t, r;
            const A = this.configuration.get('nodeLinker');
            null === (t = L.VK.telemetry) || void 0 === t || t.reportInstall(A);
              a = [];
            await this.configuration.triggerHook(e => e.validateProject, this, {
              reportError: (e, t) => a.push({ name: e, text: t })
            });
                  report: e.report
                });
              }));
              for (const [, t] of e) for (const e of t) e.active = !1;
              const t = i.y1.join(this.cwd, this.configuration.get('lockfileFilename'));
              let r = null;
                  r = await n.xfs.readFilePromise(t, 'utf8');
                    : e;
                const n = (0, o.qH)(r, this.generateLockfile());
                  const i = w(t, t, r, n);
                  e.report.reportSeparator();
                    e.report.reportInfo(
                      null,
                      `@@ -${t.oldStart},${t.oldLines} +${t.newStart},${t.newLines} @@`
                    );
                        : e.report.reportInfo(null, W.pretty(this.configuration, r, 'grey'));
                  );
            });
                  e.active &&
                    (null === (r = L.VK.telemetry) ||
                      void 0 === r ||
                      r.reportPackageExtension(e.description));
                (void 0 === e.persistProject || e.persistProject) && (await this.cacheCleanup(e));
                const t = e.immutable
                    ? [...new Set(this.configuration.get('immutablePatterns'))].sort()
                    : [],
                  r = await Promise.all(t.map(async e => V.checksumPattern(e, { cwd: this.cwd })));
                await this.linkEverything(e);
                const n = await Promise.all(
                  t.map(async e => V.checksumPattern(e, { cwd: this.cwd }))
                );
                    );
              await this.configuration.triggerHook(e => e.afterAllInstalled, this, e);
            const e = new Map();
              let n = e.get(r);
              n || e.set(r, (n = new Set())), n.add(t);
            const t = { __metadata: { version: 4 } };
              const e = this.originalPackages.get(r);
              if (!e) continue;
              const i = [];
                const t = this.storedDescriptors.get(e);
                if (!t)
                  throw new Error('Assertion failed: The descriptor should have been registered');
                i.push(t);
                  .map(e => T.stringifyDescriptor(e))
                A = new Y.G();
              let s;
              (A.version = e.linkType === ee.U.HARD ? e.version : '0.0.0-use.local'),
                (A.bin = new Map(e.bin));
              const a = this.storedChecksums.get(e.locatorHash);
                const e = a.indexOf('/');
                if (-1 === e)
                  throw new Error(
                    'Assertion failed: Expecte the checksum to reference its cache key'
                  );
                  n = a.slice(e + 1);
                  (s = r === t.__metadata.cacheKey ? n : a);
                checksum: s
              };
                '# Manual changes might be lost - proceed with caution!\n'
            );
              t = this.generateLockfile();
            await n.xfs.changeFilePromise(e, t, { automaticNewlines: !0 });
                lockFileChecksum: s
                lockFileChecksum: s
              g = this.configuration.get('installStatePath');
            await n.xfs.mkdirPromise(i.y1.dirname(g), { recursive: !0 }),
              await n.xfs.writeFilePromise(g, c);
            const e = this.configuration.get('installStatePath');
            if (!n.xfs.existsSync(e)) return void (await this.applyLightResolution());
              r = N().deserialize(await ie(t));
              : await this.applyLightResolution();
            await this.resolveEverything({ lockfileOnly: !0, report: new _.$() }),
              await this.persistInstallStateFile();
            await this.persistLockfile(), await this.persistInstallStateFile();
            for (const e of this.workspacesByCwd.values()) await e.persistManifest();
            const r = new Set(['.gitignore']);
                if (r.has(o)) continue;
                const A = i.y1.resolve(e.cwd, o);
                        W.pretty(this.configuration, i.y1.basename(A), 'magenta') +
                          ' appears to be unused - removing'
                      await n.xfs.removePromise(A)));
              e.markedFiles.clear();
        'use strict';
        r.d(t, { c: () => s, O: () => a });
          A = r(54143);
        const s = /^(?!v)[a-z0-9-.]+$/i;
            return !!o.validRange(e.range) || !!s.test(e.range);
            return !!i().valid(e.reference) || !!s.test(e.reference);
            return t.resolver.shouldPersistResolution(this.forwardLocator(e, t), t);
            return r.resolver.bindDescriptor(this.forwardDescriptor(e, r), t, r);
            return t.resolver.getResolutionDependencies(this.forwardDescriptor(e, t), t);
            return await r.resolver.getCandidates(this.forwardDescriptor(e, r), t, r);
            return await r.resolver.getSatisfying(this.forwardDescriptor(e, r), t, r);
            const r = await t.resolver.resolve(this.forwardLocator(e, t), t);
            return A.renamePackage(r, e);
            return A.makeDescriptor(
              e,
              `${t.project.configuration.get('defaultProtocol')}${e.range}`
            );
            return A.makeLocator(
              e,
              `${t.project.configuration.get('defaultProtocol')}${e.reference}`
            );
        'use strict';
        r.d(t, { lk: () => A, yG: () => s });
          o = r(92659);
            super(t), (this.reportExtra = r), (this.reportCode = e);
            (this.reportedInfos = new Set()),
              (this.reportedWarnings = new Set()),
              (this.reportedErrors = new Set());
              n = new Promise(e => {
                t = e;
              });
            const i = e => {
                const i = t;
                (n = new Promise(e => {
                  t = e;
                  i();
                for (; r < e; ) await n, yield { progress: r / e };
              })();
                i(r + 1);
              }
            };
            const n = r && r.key ? r.key : t;
            this.reportedInfos.has(n) || (this.reportedInfos.add(n), this.reportInfo(e, t));
            const n = r && r.key ? r.key : t;
            this.reportedWarnings.has(n) ||
              (this.reportedWarnings.add(n), this.reportWarning(e, t));
            var n;
            const i = r && r.key ? r.key : t;
              null === (n = null == r ? void 0 : r.reportExtra) || void 0 === n || n.call(r, this));
              return void 0 !== e.reportCode;
              : this.reportErrorOnce(e.reportCode, e.message, {
                  key: e,
                  reportExtra: e.reportExtra
                });
              r = new i.StringDecoder();
            let o = '';
              t.on('data', t => {
                  i = r.write(t);
                    const t = o + i.substr(0, n);
                    (i = i.substr(n + 1)),
                      null !== e ? this.reportInfo(null, `${e} ${t}`) : this.reportInfo(null, t);
                } while (-1 !== n);
                o += i;
                const t = r.end();
                '' !== t &&
                  (null !== e ? this.reportInfo(null, `${e} ${t}`) : this.reportInfo(null, t));
            );
        'use strict';
        r.d(t, { Qw: () => d, Pk: () => C });
          s = r(71643);
            ? { start: e => `::group::${e}\n`, end: e => '::endgroup::\n' }
            ? { start: e => `travis_fold:start:${e}\n`, end: e => `travis_fold:end:${e}\n` }
                start: e =>
                  `section_start:${Math.floor(Date.now() / 1e3)}:${e
                    .toLowerCase()
                    .replace(/\W+/g, '_')}\r[0K${e}\n`,
                end: e =>
                  `section_end:${Math.floor(Date.now() / 1e3)}:${e
                    .toLowerCase()
                    .replace(/\W+/g, '_')}\r[0K`
          u =
            ['iTerm.app', 'Apple_Terminal'].includes(process.env.TERM_PROGRAM) ||
            !!process.env.WT_SESSION,
            default: { chars: ['=', '-'], size: 80 }
              Object.keys(h).find(e => {
                const t = h[e];
                return !t.date || (t.date[0] === l.getDate() && t.date[1] === l.getMonth() + 1);
            'default';
            i = (0, o.i)(n);
          return r || null !== e ? i : s.pretty(t, i, 'grey');
          const n = f(e, { configuration: t, json: r });
          if (!t.get('enableHyperlinks')) return n;
          if (null === e || e === o.b.UNNAMED) return n;
          return `]8;;${`https://yarnpkg.com/advanced/error-codes#${n}---${o.b[e]}`.toLowerCase()}${n}]8;;`;
            forgettableNames: g = new Set()
              (this.stdout = t);
            const l = this.configuration.get('progressBarStyle') || p;
              throw new Error('Assertion failed: Invalid progress bar style');
            this.progressStyle = h[l];
              f = Math.max(0, Math.min(process.stdout.columns - u, 80));
            this.progressMaxScaledSize = Math.floor((this.progressStyle.size * f) / 80);
              n = process.emitWarning;
                const r = e;
                (e = r.message), (t = null != t ? t : r.name);
              const n = void 0 !== t ? `${t}: ${e}` : e;
              r.reportWarning(o.b.UNNAMED, n);
            };
              await t(r);
              r.reportExceptionOnce(e);
              await r.finalize(), (process.emitWarning = n);
            return r;
            return this.errorCount > 0;
            return this.hasErrors() ? 1 : 0;
            this.cacheHitCount += 1;
            (this.cacheMissCount += 1),
                this.reportInfo(o.b.FETCH_NOT_CACHED, t);
            this.reportInfo(null, '┌ ' + e);
            const r = Date.now();
            this.indent += 1;
              return t();
              throw (this.reportExceptionOnce(e), e);
              const e = Date.now();
              (this.indent -= 1),
                  ? this.reportInfo(
                      null,
                      '└ Completed in ' + s.pretty(this.configuration, e - r, s.Type.DURATION)
                    )
                  : this.reportInfo(null, '└ Completed');
            this.reportInfo(null, '┌ ' + e), null !== g && this.stdout.write(g.start(e));
            const r = Date.now();
            this.indent += 1;
              return await t();
              throw (this.reportExceptionOnce(e), e);
              const t = Date.now();
              (this.indent -= 1),
                  ? this.reportInfo(
                      null,
                      '└ Completed in ' + s.pretty(this.configuration, t - r, s.Type.DURATION)
                    )
                  : this.reportInfo(null, '└ Completed');
              : null;
              return await e();
              throw (this.reportExceptionOnce(e), e);
              null !== t && this.reportCacheChanges(t);
            0 === this.indent ? this.writeLineWithForgettableReset('') : this.reportInfo(null, '');
            if (!this.includeInfos) return;
            const r = `${s.pretty(
              this.configuration,
              '➤',
              'blueBright'
            )} ${this.formatNameWithHyperlink(e)}: ${this.formatIndent()}${t}`;
                data: t
              });
              if (
                (this.forgettableLines.push(r),
                this.forgettableLines.length > this.forgettableBufferSize)
              ) {
                for (; this.forgettableLines.length > this.forgettableBufferSize; )
                  this.forgettableLines.shift();
                this.writeLines(this.forgettableLines, { truncate: !0 });
              } else this.writeLine(r, { truncate: !0 });
            else this.writeLineWithForgettableReset(r);
            (this.warningCount += 1),
                      data: t
                      `${s.pretty(
                        this.configuration,
                        '➤',
                        'yellowBright'
                      )} ${this.formatNameWithHyperlink(e)}: ${this.formatIndent()}${t}`
                    ));
            (this.errorCount += 1),
                    data: t
                    `${s.pretty(
                      this.configuration,
                      '➤',
                      'redBright'
                    )} ${this.formatNameWithHyperlink(e)}: ${this.formatIndent()}${t}`,
                  );
            let t = !1;
                const r = { progress: 0, title: void 0 };
                this.progress.set(e, { definition: r, lastScaledSize: -1 }),
                  this.refreshProgress(-1);
                  t ||
                    (r.progress === n && r.title === i) ||
                    ((r.progress = n), (r.title = i), this.refreshProgress());
                n();
                t || ((t = !0), this.progress.delete(e), this.refreshProgress(1));
              };
            return { ...r, stop: n };
            this.json && this.writeLineWithForgettableReset('' + JSON.stringify(e));
            if (!this.includeFooter) return;
            let e = '';
            e =
              this.errorCount > 0
                ? 'Failed with errors'
                : this.warningCount > 0
                ? 'Done with warnings'
                : 'Done';
              r = this.configuration.get('enableTimers') ? `${e} in ${t}` : e;
              : this.reportInfo(o.b.UNNAMED, r);
              this.writeProgress();
            (this.forgettableLines = []), this.writeLine(e, { truncate: t });
            this.clearProgress({ delta: e.length });
            for (const r of e) this.stdout.write(this.truncate(r, { truncate: t }) + '\n');
            this.writeProgress();
              n = this.cacheMissCount - t;
            if (0 === r && 0 === n) return;
            let i = '';
              this.reportInfo(o.b.FETCH_NOT_CACHED, i);
              (this.stdout.write(`[${this.progress.size + e}A`),
              (e > 0 || t) && this.stdout.write('[0J'));
            if (!this.configuration.get('enableProgressBars') || this.json) return;
              return;
            const e = Date.now();
              ((this.progressFrame = (this.progressFrame + 1) % a.length), (this.progressTime = e));
            const t = a[this.progressFrame];
                n = this.progressStyle.chars[1].repeat(
                  this.progressMaxScaledSize - e.lastScaledSize
                );
                `${s.pretty(this.configuration, '➤', 'blueBright')} ${this.formatName(
                  null
                )}: ${t} ${r}${n}\n`
              );
              this.refreshProgress();
            }, 80);
            let t = !1;
            if (0 === this.progress.size) t = !0;
                  n = e.lastScaledSize;
                  t = !0;
                  break;
            t && (this.clearProgress({ delta: e }), this.writeProgress());
            );
            return f(e, { configuration: this.configuration, json: this.json });
            return d(e, { configuration: this.configuration, json: this.json });
            return '│ '.repeat(this.indent);
        'use strict';
        r.d(t, { E: () => a });
          s = r(73632);
          (e.VERSION = 'version'),
            (e.EXTENSION = 'packageExtension');
        })(n || (n = {}));
            (this.values = new Map()),
              (this.configuration = e);
            const r = this.getRegistryPath();
            (this.isNew = !i.xfs.existsSync(r)), this.sendReport(t), this.startBuffer();
            this.reportValue(n.VERSION, e);
            this.reportValue(n.COMMAND_NAME, e || '<none>');
            this.reportValue(n.PLUGIN_NAME, e);
            this.reportEnumerator(n.PROJECT_COUNT, e);
            this.reportHit(n.INSTALL_COUNT, e);
            this.reportValue(n.EXTENSION, e);
            this.reportValue(n.WORKSPACE_COUNT, String(e));
            this.reportValue(n.DEPENDENCY_COUNT, String(e));
            s.getSetWithDefault(this.values, e).add(t);
            s.getSetWithDefault(this.enumerators, e).add(t);
              n = s.getFactoryWithDefault(r, t, () => 0);
            r.set(t, n + 1);
            const e = this.configuration.get('globalFolder');
            return o.y1.join(e, 'telemetry.json');
            var t, r, n;
            const s = this.getRegistryPath();
            let a;
              a = i.xfs.readJsonSync(s);
              a = {};
              l =
                (null !== (t = a.lastUpdate) && void 0 !== t
                  ? t
                  : c + g + Math.floor(g * Math.random())) + g;
                i.xfs.mkdirSync(o.y1.dirname(s), { recursive: !0 }),
                  i.xfs.writeJsonSync(s, { lastUpdate: c });
                return;
                for (const [t, i] of Object.entries(
                  null !== (r = a.blocks) && void 0 !== r ? r : {}
                )) {
                  if (0 === Object.keys(i).length) continue;
                  const r = i;
                  r.userId = t;
                  for (const e of Object.keys(
                    null !== (n = r.enumerators) && void 0 !== n ? n : {}
                  ))
                    r.enumerators[e] = r.enumerators[e].length;
                  const o = `https://browser-http-intake.logs.datadoghq.eu/v1/input/${e}?ddsource=yarn`;
                  A.post(o, r, { configuration: this.configuration }).catch(() => {});
            var e, t, r, n, A, s, a, c, g;
            const l = this.getRegistryPath();
            let u;
              u = i.xfs.readJsonSync(l);
              u = {};
            const h =
                null !== (e = this.configuration.get('telemetryUserId')) && void 0 !== e ? e : '*',
              f = (p[h] = null !== (r = p[h]) && void 0 !== r ? r : {});
                r = (t[e] = null !== (A = t[e]) && void 0 !== A ? A : {});
              for (const [t, n] of this.hits.get(e))
                r[t] = (null !== (s = r[t]) && void 0 !== s ? s : 0) + n;
                const r = (f[e] = null !== (a = f[e]) && void 0 !== a ? a : {});
                    ...(null !== (g = this[e].get(t)) && void 0 !== g ? g : [])
                  ])
                ];
            i.xfs.mkdirSync(o.y1.dirname(l), { recursive: !0 }), i.xfs.writeJsonSync(l, u);
                this.applyChanges();
            });
        'use strict';
        r.d(t, { $: () => i });
        var n = r(35691);
            return t();
            return await t();
            return await e();
              stop: () => {}
            };
        'use strict';
        r.d(t, { N: () => s });
          A = r(54143);
            return !!e.reference.startsWith('virtual:');
            const r = e.reference.indexOf('#');
            if (-1 === r) throw new Error('Invalid virtual package reference');
              i = A.makeLocator(e, n);
            return t.fetcher.getLocalPath(i, t);
            const r = e.reference.indexOf('#');
            if (-1 === r) throw new Error('Invalid virtual package reference');
              o = await t.fetcher.fetch(i, t);
            return await this.ensureVirtualLink(e, o, t);
            return A.slugifyLocator(e);
              g = new i.K(c, { baseFs: t.packageFs, pathUtils: o.y1 });
            return { ...t, packageFs: g };
        'use strict';
        r.d(t, { j: () => h });
          u = r(54143);
            (this.workspacesCwds = new Set()),
              (this.dependencies = new Map()),
              (this.project = t),
              (this.cwd = e);
            (this.manifest = n.xfs.existsSync(i.y1.join(this.cwd, c.G.fileName))
              (this.relativeCwd = i.y1.relative(this.project.cwd, this.cwd) || i.LZ.dot);
                : u.makeIdent(
                    null,
                    `${this.computeCandidateName()}-${l.makeHash(this.relativeCwd).substr(0, 6)}`
                  ),
              t = this.manifest.version ? this.manifest.version : '0.0.0';
            (this.locator = u.makeLocator(e, t)),
              (this.anchoredDescriptor = u.makeDescriptor(
                this.locator,
                `${g.d.protocol}${this.relativeCwd}`
              )),
              (this.anchoredLocator = u.makeLocator(
                this.locator,
                `${g.d.protocol}${this.relativeCwd}`
              ));
                ignore: ['**/node_modules', '**/.git', '**/.yarn']
              });
            o.sort();
              const t = i.y1.resolve(this.cwd, i.cS.toPortablePath(e));
              n.xfs.existsSync(i.y1.join(t, 'package.json')) && this.workspacesCwds.add(t);
              n = -1 !== t ? e.slice(t + 1) : e;
                  ? a().satisfies(
                      null !== this.manifest.version ? this.manifest.version : '0.0.0',
                      n
                    )
            );
              : '' + i.y1.basename(this.cwd) || 'unnamed-workspace';
            const e = {};
            this.manifest.exportTo(e);
              r = JSON.stringify(e, null, this.manifest.indent) + '\n';
            await n.xfs.changeFilePromise(t, r, { automaticNewlines: !0 });
        'use strict';
        r.d(t, { d: () => i });
        var n = r(32485);
            if (e.range.startsWith(i.protocol)) return !0;
            return null !== t.project.tryWorkspaceByDescriptor(e);
            return !!e.reference.startsWith(i.protocol);
            return !1;
            return e;
            return [];
            return [r.project.getWorkspaceByDescriptor(e).anchoredLocator];
            return null;
            const r = t.project.getWorkspaceByCwd(e.reference.slice(i.protocol.length));
              bin: r.manifest.bin
            };
        i.protocol = 'workspace:';
        'use strict';
        r.d(t, { o: () => n });
        const n = '2.3.3-git.20201104.e5d3f945';
        'use strict';
        r.r(t), r.d(t, { EndStrategy: () => n, pipevp: () => g, execvp: () => l });
          A = r.n(o);
          return null !== e && 'number' == typeof e.fd;
          (e[(e.Never = 0)] = 'Never'),
            (e[(e.ErrorCode = 1)] = 'ErrorCode'),
            (e[(e.Always = 2)] = 'Always');
        })(n || (n = {}));
        let c = 0;
          {
            cwd: r,
            env: o = process.env,
            strict: g = !1,
            stdin: l = null,
            stdout: u,
            stderr: p,
            end: f = n.Always
          }
          const d = ['pipe', 'pipe', 'pipe'];
            0 == c++ && process.on('SIGINT', a);
            stdio: d
          });
            s(p) || C.stderr.pipe(p, { end: !1 });
            for (const e of new Set([u, p])) s(e) || e.end();
          };
            C.on('error', e => {
              0 == --c && process.off('SIGINT', a),
                (f !== n.Always && f !== n.ErrorCode) || I(),
                r(e);
                    : t({ code: h(i, o) });
              });
          });
        async function l(
          e,
          t,
          { cwd: r, env: n = process.env, encoding: o = 'utf8', strict: s = !1 }
        ) {
            l = i.cS.fromPortablePath(r);
          void 0 !== n.PWD && (n = { ...n, PWD: l });
          const u = A()(e, t, { cwd: l, env: n, stdio: a });
            u.stdout.on('data', e => {
              c.push(e);
            u.stderr.on('data', e => {
              g.push(e);
                    a = 'buffer' === o ? Buffer.concat(g) : Buffer.concat(g).toString(o);
                        Object.assign(
                          new Error(`Child "${e}" exited with exit code ${n}\n\n${a}`),
                          {
                            code: h(n, i),
                            stdout: A,
                            stderr: a
                          }
                        )
                    : t({ code: h(n, i), stdout: A, stderr: a });
                });
          );
          ['SIGTERM', 15]
        ]);
          const r = u.get(t);
          return void 0 !== r ? 128 + r : null != e ? e : 1;
        'use strict';
        r.r(t),
          r.d(t, {
            getDefaultGlobalFolder: () => o,
            getHomeFolder: () => A,
            isFolderInside: () => s
          });
          i = r(12087);
            const e = n.cS.toPortablePath(
              process.env.LOCALAPPDATA || n.cS.join((0, i.homedir)(), 'AppData', 'Local')
            );
            return n.y1.resolve(e, 'Yarn/Berry');
            const e = n.cS.toPortablePath(process.env.XDG_DATA_HOME);
            return n.y1.resolve(e, 'yarn/berry');
          return n.y1.resolve(A(), '.yarn/berry');
          return n.cS.toPortablePath((0, i.homedir)() || '/usr/local/share');
          const r = n.y1.relative(t, e);
          return r && !r.startsWith('..') && !n.y1.isAbsolute(r);
        'use strict';
            addLogFilterSupport: () => Q
          });
          g = r(54143);
          (e.NO_HINT = 'NO_HINT'),
            (e.DEPENDENT = 'DEPENDENT');
            e[(e.BOLD = 2)] = 'BOLD';
          })(i || (i = {}));
            [n.SIZE, ['#ffd700', 220]]
            [n.NUMBER]: { pretty: (e, t) => '' + t, json: e => e },
            [n.IDENT]: { pretty: (e, t) => g.prettyIdent(e, t), json: e => g.stringifyIdent(e) },
            [n.LOCATOR]: {
              pretty: (e, t) => g.prettyLocator(e, t),
              json: e => g.stringifyLocator(e)
            },
              json: e => g.stringifyDescriptor(e)
                locator: null !== t ? g.stringifyLocator(t) : null
              })
                descriptor: g.stringifyDescriptor(t)
              })
                    r = Math.ceil((t - 60 * e * 1e3) / 1e3);
                  return 0 === r ? e + 'm' : `${e}m ${r}s`;
                    r = t - 1e3 * e;
                  return 0 === r ? e + 's' : `${e}s ${r}ms`;
              json: e => e
                const r = ['KB', 'MB', 'GB', 'TB'];
                let i = r.length;
                for (; i > 1 && t < 1024 ** i; ) i -= 1;
                const o = 1024 ** i;
                return E(e, `${Math.floor((100 * t) / o) / 100} ${r[i - 1]}`, n.NUMBER);
              json: e => e
              json: e => o.cS.fromPortablePath(e)
            }
          };
          return [t, e];
          return e.get('enableColors') ? (r & i.BOLD && (t = s().bold(t)), t) : t;
          if (!e.get('enableColors')) return t;
          const n = f.get(r);
          if (null === n) return t;
            o = 'number' == typeof i ? p.ansi256(i) : i.startsWith('#') ? p.hex(i) : p[i];
          if ('function' != typeof o) throw new Error('Invalid format type ' + i);
          return o(t);
          if (null === t) return E(e, 'null', n.NULL);
            return d[r].pretty(e, t);
            throw new Error('Assertion failed: Expected the value to be a string, got ' + typeof t);
          return E(e, t, r);
          return [...t].map(t => m(e, t, r)).join(n);
          if (null === e) return null;
          if (Object.prototype.hasOwnProperty.call(d, t)) return c.overrideType(t), d[t].json(e);
            throw new Error('Assertion failed: Expected the value to be a string, got ' + typeof e);
          return e;
        var w;
            i = new Map();
            const t = e.get('level');
            if (void 0 === t) continue;
            const r = e.get('code');
            void 0 !== r && n.set(r, t);
            const o = e.get('text');
            void 0 !== o && i.set(o, t);
                  if (null === e || e === a.b.UNNAMED) return r;
                    const e = i.get(s().reset(t));
                    if (void 0 !== e) return null != e ? e : r;
                    const t = n.get((0, a.i)(e));
                    if (void 0 !== t) return null != t ? t : r;
                  return r;
                  o.call(e, t, r);
                  break;
                  A.call(e, null != t ? t : a.b.UNNAMED, r);
                  break;
                  c.call(e, null != t ? t : a.b.UNNAMED, r);
            };
          (e.reportInfo = function (...e) {
            return g(this, ...e, w.Info);
              return g(this, ...e, w.Warning);
              return g(this, ...e, w.Error);
            });
          (e.Error = 'error'), (e.Warning = 'warning'), (e.Info = 'info'), (e.Discard = 'discard');
        })(w || (w = {}));
        'use strict';
        r.r(t), r.d(t, { makeHash: () => a, checksumFile: () => c, checksumPattern: () => g });
          s = r.n(A);
          const t = (0, o.createHash)('sha512');
          for (const r of e) t.update(r || '');
          return t.digest('hex');
              A = n.xfs.createReadStream(e);
            A.on('data', e => {
              i.update(e);
              A.on('error', e => {
                r(e);
                t(i.digest('hex'));
              });
          });
                unique: !0
            ).map(e => e + '/**/*'),
              unique: !0
            });
          A.sort();
              A.map(async e => {
                  o = await n.xfs.lstatPromise(r);
                );
            c = (0, o.createHash)('sha512');
          for (const e of a) c.update(e);
          return c.digest('hex');
        'use strict';
            del: () => B
          });
          c = r(78835);
          h = new i.Agent({ keepAlive: !0 });
            r = { host: t.hostname, headers: {} };
          return t.port && (r.port = Number(t.port)), { proxy: r };
          const r = [...t.configuration.get('networkSettings')].sort(
              ([e], [t]) => t.length - e.length
            ),
            i = new c.URL(e);
              const e = t.get('enableNetwork');
              null !== e && void 0 === n.enableNetwork && (n.enableNetwork = e);
              const r = t.get('caFilePath');
              null !== r && void 0 === n.caFilePath && (n.caFilePath = r);
          );
        var d;
          {
            configuration: i,
            headers: o,
            json: A,
            jsonRequest: g = A,
            jsonResponse: C = A,
            method: I = d.GET
          }
          const E = f(e, { configuration: i });
            throw new Error(
              `Request to '${e}' has been blocked because of your configuration settings`
            );
          const m = new c.URL(e);
            throw new Error(
              `Unsafe http requests must be explicitly whitelisted in your configuration (${m.hostname})`
            );
              method: I
            };
          (w.responseType = C ? 'json' : 'buffer'),
            null !== t &&
              (Buffer.isBuffer(t) || (!g && 'string' == typeof t) ? (w.body = t) : (w.json = t));
                  let t = l.get(e);
                  return (
                    t || ((t = n.xfs.readFilePromise(e).then(t => (l.set(e, t), t))), l.set(e, t)),
                    t
                  );
              ...w
            });
          return i.getLimit('networkConcurrency')(() => M(e));
          let o = g.get(e);
            o ||
              ((o = C(e, null, { configuration: t, ...i }).then(t => (g.set(e, t.body), t.body))),
              g.set(e, o)),
          );
          return (await C(e, t, { ...r, method: d.PUT })).body;
          return (await C(e, t, { ...r, method: d.POST })).body;
          return (await C(e, null, { ...t, method: d.DELETE })).body;
          (e.GET = 'GET'), (e.PUT = 'PUT'), (e.POST = 'POST'), (e.DELETE = 'DELETE');
        })(d || (d = {}));
        'use strict';
            treeUtils: () => h
          });
          M = r(32485);
        'use strict';
            replaceEnvVariables: () => F
          });
          s = r(92413);
          return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          throw new Error(`Assertion failed: Unexpected object '${e}'`);
          if (!Object.values(e).includes(t))
            throw new Error('Assertion failed: Invalid value for enumeration');
          return t;
          const r = [];
            const e = t(n);
            e !== h && r.push(e);
          return r;
        e = r.hmd(e);
        const h = Symbol();
            const e = t(r);
            if (e !== f) return e;
        u.skip = h;
        const f = Symbol();
          return 'object' == typeof e && null !== e;
          let n = e.get(t);
          return void 0 === n && e.set(t, (n = r())), n;
          let r = e.get(t);
          return void 0 === r && e.set(t, (r = [])), r;
          let r = e.get(t);
          return void 0 === r && e.set(t, (r = new Set())), r;
          let r = e.get(t);
          return void 0 === r && e.set(t, (r = new Map())), r;
          if (null == t) return await e();
            return await e();
            await t();
            return await e();
            throw ((e.message = t(e.message)), e);
            return e();
            throw ((e.message = t(e.message)), e);
            const n = [];
            e.on('error', e => {
              r(e);
              e.on('data', e => {
                n.push(e);
                t(Buffer.concat(n));
              });
          });
        p.skip = f;
            super(...arguments), (this.chunks = []);
              throw new Error('Assertion failed: BufferStream only accept buffers');
            this.chunks.push(e), r(null, null);
            e(null, Buffer.concat(this.chunks));
            super(), (this.active = !0), (this.ifEmpty = e);
              throw new Error('Assertion failed: DefaultStream only accept buffers');
            (this.active = !1), r(null, e);
            this.active && this.ifEmpty.length > 0 && e(null, this.ifEmpty);
          return 'undefined' != typeof require ? require(e) : r(32178)(e);
            o = r.c[i];
          let A;
          delete r.c[i];
            A = D(i);
              n = e.children.indexOf(t);
            -1 !== n && e.children.splice(n, 1);
            r.c[i] = o;
          return A;
          const r = Array.from(e);
          Array.isArray(t) || (t = [t]);
          const n = [];
          for (const e of t) n.push(r.map(t => e(t)));
          const i = r.map((e, t) => t);
                const n = r[e] < r[t] ? -1 : r[e] > r[t] ? 1 : 0;
                if (0 !== n) return n;
              return 0;
            i.map(e => r[e])
          );
          return 0 === e.length
            ? null
            : e.map(e => `(${A().makeRe(e, { windows: !1 }).source})`).join('|');
          return e.replace(
            /\${(?<variableName>[\d\w_]+)(?<colon>:)?-?(?<fallback>[^}]+)?}/g,
            (...e) => {
              const { variableName: r, colon: n, fallback: o } = e[e.length - 1],
                A = Object.prototype.hasOwnProperty.call(t, r),
                s = t[r];
              if (s) return s;
              if (A && !s && n) return o;
              if (A) return s;
              if (o) return o;
              throw new i.UsageError(`Environment variable not found (${r})`);
            }
          );
        'use strict';
            executeWorkspaceAccessibleBinary: () => U
          });
          Q = r(54143);
                i.y1.format({ dir: e, name: t, ext: '.exe.info' }),
                [r, ...n].join('\n')
              s.xfs.writeFilePromise(
                i.y1.format({ dir: e, name: t, ext: '.cmd' }),
                `@"${r}" ${n.map(e => `"${e.replace('"', '""')}"`).join(' ')} %*\n`
              )
              `#!/bin/sh\nexec "${r}" ${n
                .map(e => `'${e.replace(/'/g, "'\"'\"'")}'`)
                .join(' ')} "$@"\n`
            await s.xfs.chmodPromise(i.y1.join(e, t), 493);
          const n = {};
            void 0 !== t && (n['path' !== e.toLowerCase() ? e : 'PATH'] = t);
          const o = i.cS.fromPortablePath(t);
          (n.BERRY_BIN_FOLDER = i.cS.fromPortablePath(o)),
              await v(t, 'node-gyp', process.execPath, [
                process.argv[1],
                'run',
                '--top-level',
                'node-gyp'
              ])),
            (n.npm_node_execpath = `${o}${i.cS.sep}node`);
          const A =
            null !== m.o ? 'yarn/' + m.o : `yarn/${w.dynamicRequire('@yarnpkg/core').version}-core`;
                e => e.setupScriptEnvironment,
          );
          (e.Yarn1 = 'Yarn Classic'), (e.Yarn2 = 'Yarn'), (e.Npm = 'npm'), (e.Pnpm = 'pnpm');
        })(n || (n = {}));
        const D = p()(2);
            await s.xfs.mktempPromise(async a => {
                  let t = null;
                    t = await s.xfs.readFilePromise(i.y1.join(e, i.QS.lockfile), 'utf8');
                    : null;
                })(e);
              let h;
                await s.xfs.mktempPromise(async r => {
                            n = await B.pipevp(
                              'yarn',
                              ['set', 'version', 'classic', '--only-if-needed'],
                              {
                                cwd: e,
                                env: o,
                                stdin: null,
                                stdout: g,
                                stderr: l,
                                end: B.EndStrategy.ErrorCode
                              }
                            );
                          if (0 !== n.code) return n.code;
                          await s.xfs.appendFilePromise(i.y1.join(e, '.npmignore'), '/.yarn\n'),
                            g.write('\n');
                            end: B.EndStrategy.ErrorCode
                          });
                          if (0 !== a.code) return a.code;
                          g.write('\n');
                          const c = await B.pipevp(
                            'yarn',
                            [...r, 'pack', '--filename', i.cS.fromPortablePath(t)],
                            {
                              cwd: e,
                              env: o,
                              stdin: null,
                              stdout: g,
                              stderr: l
                            }
                          );
                          return 0 !== c.code ? c.code : 0;
                        }
                          const r = null !== A ? ['workspace', A] : [];
                          o.YARN_ENABLE_INLINE_BUILDS = '1';
                          const n = i.y1.join(e, i.QS.lockfile);
                          (await s.xfs.existsPromise(n)) || (await s.xfs.writeFilePromise(n, ''));
                            [
                              ...r,
                              'pack',
                              '--install-if-needed',
                              '--filename',
                              i.cS.fromPortablePath(t)
                            ],
                          );
                          return 0 !== a.code ? a.code : 0;
                        }
                            );
                          delete o.npm_config_user_agent;
                            end: B.EndStrategy.ErrorCode
                          });
                          if (0 !== r.code) return r.code;
                            a = w.bufferStream(n);
                          n.pipe(g);
                            stderr: l
                          });
                          if (0 !== c.code) return c.code;
                            h = i.y1.resolve(e, i.cS.toPortablePath(u));
                          return await s.xfs.renamePromise(h, t), 0;
                        }
                      ]
                    ]).get(h);
                  if (void 0 === u) throw new Error('Assertion failed: Unsupported workflow');
                  const p = await u();
                    );
                });
            });
          });
          const n = r.storedPackages.get(e.locatorHash);
          if (!n)
            throw new Error(
              `Package for ${Q.prettyLocator(r.configuration, e)} not found in the project`
            );
            async e => {
                a = {
                  project: r,
                  report: new E.Pk({ stdout: new f.PassThrough(), configuration: o })
                },
                c = s.find(e => e.supportsPackage(n, a));
                  `The package ${Q.prettyLocator(
                    r.configuration,
                    n
                  )} isn't supported by any of the available linkers`
                );
                l = new A.M(g, { baseFs: e });
              return (await d.G.find(i.LZ.dot, { baseFs: l })).scripts.has(t);
          );
          return await s.xfs.mktempPromise(async s => {
                lifecycleScript: t
              h = g.scripts.get(t);
            if (void 0 === h) return 1;
              e => e.wrapScriptExecution,
              async () =>
                await (0, c.execute)(h, r, { cwd: u, env: l, stdin: o, stdout: A, stderr: a }),
            );
            return await p();
          });
          return await s.xfs.mktempPromise(async s => {
            const { env: g, cwd: l } = await N(e, { project: i, binFolder: s, cwd: n });
            return await (0, c.execute)(t, r, { cwd: l, env: g, stdin: o, stdout: A, stderr: a });
          });
          const c = t.storedPackages.get(e.locatorHash);
          if (!c)
            throw new Error(
              `Package for ${Q.prettyLocator(t.configuration, e)} not found in the project`
            );
            async o => {
                l = {
                  project: t,
                  report: new E.Pk({ stdout: new f.PassThrough(), configuration: a })
                },
                u = g.find(e => e.supportsPackage(c, l));
                  `The package ${Q.prettyLocator(
                    t.configuration,
                    c
                  )} isn't supported by any of the available linkers`
                );
              const h = await b({ project: t, binFolder: r, lifecycleScript: s });
              for (const [n, [, o]] of await P(e, { project: t }))
                await v(r, (0, i.Zu)(n), process.execPath, [o]);
                I = await d.G.find(i.LZ.dot, { baseFs: C });
              return void 0 === n && (n = p), { manifest: I, binFolder: r, env: h, cwd: n };
          );
            stderr: A
          });
          return e.manifest.scripts.has(t);
          const { configuration: o } = e.project;
          await s.xfs.mktempPromise(async A => {
                header: c
              });
            n.reportInfo(C.b.LIFECYCLE_SCRIPT, `Calling the "${t}" lifecycle script`);
            const h = await R(e, t, [], { cwd: r, stdin: null, stdout: g, stderr: l });
              );
          });
          K(e, t) && (await L(e, t, r));
            o = t.storedPackages.get(e.locatorHash);
          if (!o) throw new Error(`Package for ${Q.prettyLocator(r, e)} not found in the project`);
            c = new Set([e.locatorHash]);
            const n = t.storedResolutions.get(e.descriptorHash);
                `Assertion failed: The resolution (${Q.prettyDescriptor(
                  r,
                  e
                )}) should have been registered`
              );
            c.add(n);
            const r = t.storedPackages.get(e);
            if (!r)
              throw new Error(`Assertion failed: The package (${e}) should have been registered`);
            if (0 === r.bin.size) continue;
            const o = s.find(e => e.supportsPackage(r, a));
            if (!o) continue;
            let A = null;
              A = await o.findPackageLocation(r, a);
              if ('LOCATOR_NOT_INSTALLED' === e.code) continue;
              throw e;
            for (const [e, t] of r.bin) n.set(e, [r, i.cS.fromPortablePath(i.y1.resolve(A, t))]);
          return n;
          return await P(e.anchoredLocator, { project: e.project });
        async function O(
          e,
          t,
          r,
          { cwd: n, project: o, stdin: A, stdout: a, stderr: c, nodeArgs: g = [] }
        ) {
            u = l.get(t);
          if (!u)
            throw new Error(`Binary not found (${t}) for ${Q.prettyLocator(o.configuration, e)}`);
          return await s.xfs.mktempPromise(async e => {
              h = await b({ project: o, binFolder: e });
            for (const [e, [, t]] of l)
              await v(h.BERRY_BIN_FOLDER, (0, i.Zu)(e), process.execPath, [t]);
            let p;
                stderr: c
              });
              await s.xfs.removePromise(h.BERRY_BIN_FOLDER);
            return p.code;
          });
            stderr: A
          });
        'use strict';
        r.r(t), r.d(t, { satisfiesWithPrereleases: () => o, validRange: () => s });
          i = r.n(n);
          let n, o;
            n = new (i().Range)(t, { includePrerelease: !0, loose: r });
            return !1;
          if (!e) return !1;
            (o = new (i().SemVer)(e, n)), o.prerelease && (o.prerelease = []);
            return !1;
          return n.set.some(e => {
            for (const t of e) t.semver.prerelease && (t.semver.prerelease = []);
            return e.every(e => e.test(o));
          });
        const A = new Map();
          if (-1 !== e.indexOf(':')) return null;
          let t = A.get(e);
          if (void 0 !== t) return t;
            t = new (i().Range)(e);
            t = null;
          return A.set(e, t), t;
        'use strict';
            getIdentVendorPath: () => se
          });
          l = r(54143);
          if (null == e ? void 0 : e.startsWith('@'))
            throw new Error("Invalid scope: don't prefix it with '@'");
          return { identHash: c.makeHash(e, t), scope: e, name: t };
            range: t
          };
            reference: t
          };
          return { identHash: e.identHash, scope: e.scope, name: e.name };
            reference: e.range
          };
            range: e.reference
          };
            reference: e.reference
          };
            bin: new Map(e.bin)
          };
          return E(e, e);
          if (t.includes('#')) throw new Error('Invalid entropy');
          return h(e, `virtual:${t}#${e.range}`);
          if (t.includes('#')) throw new Error('Invalid entropy');
          return E(e, p(e, `virtual:${t}#${e.reference}`));
          return e.range.startsWith('virtual:');
          return e.reference.startsWith('virtual:');
          if (!w(e)) throw new Error('Not a virtual descriptor');
          return h(e, e.range.replace(/^[^#]*#/, ''));
          if (!Q(e)) throw new Error('Not a virtual descriptor');
          return p(e, e.reference.replace(/^[^#]*#/, ''));
          return e.range.includes('::') ? e : h(e, `${e.range}::${o().stringify(t)}`);
          return e.reference.includes('::') ? e : p(e, `${e.reference}::${o().stringify(t)}`);
          return e.identHash === t.identHash;
          return e.descriptorHash === t.descriptorHash;
          return e.locatorHash === t.locatorHash;
          if (!Q(e)) throw new Error('Invalid package type');
          if (!Q(t)) throw new Error('Invalid package type');
          if (!k(e, t)) return !1;
          if (e.dependencies.size !== t.dependencies.size) return !1;
            const e = t.dependencies.get(r.identHash);
            if (!e) return !1;
            if (!M(r, e)) return !1;
          return !0;
          const t = K(e);
          if (!t) throw new Error(`Invalid ident (${e})`);
          return t;
          const t = e.match(/^(?:@([^/]+?)\/)?([^/]+)$/);
          if (!t) return null;
          const [, r, n] = t;
          return u(void 0 !== r ? r : null, n);
          const r = x(e, t);
          if (!r) throw new Error(`Invalid descriptor (${e})`);
          return r;
          const r = t
            ? e.match(/^(?:@([^/]+?)\/)?([^/]+?)(?:@(.+))$/)
            : e.match(/^(?:@([^/]+?)\/)?([^/]+?)(?:@(.+))?$/);
          if (!r) return null;
          const [, n, i, o] = r;
          if ('unknown' === o) throw new Error(`Invalid range (${e})`);
          const A = void 0 !== o ? o : 'unknown';
          return h(u(void 0 !== n ? n : null, i), A);
          const r = T(e, t);
          if (!r) throw new Error(`Invalid locator (${e})`);
          return r;
          const r = t
            ? e.match(/^(?:@([^/]+?)\/)?([^/]+?)(?:@(.+))$/)
            : e.match(/^(?:@([^/]+?)\/)?([^/]+?)(?:@(.+))?$/);
          if (!r) return null;
          const [, n, i, o] = r;
          if ('unknown' === o) throw new Error(`Invalid reference (${e})`);
          const A = void 0 !== o ? o : 'unknown';
          return p(u(void 0 !== n ? n : null, i), A);
          const r = e.match(/^([^#:]*:)?((?:(?!::)[^#])*)(?:#((?:(?!::).)*))?(?:::(.*))?$/);
          if (null === r) throw new Error(`Invalid range (${e})`);
          const n = void 0 !== r[1] ? r[1] : null;
          if (
            'string' == typeof (null == t ? void 0 : t.requireProtocol) &&
            n !== t.requireProtocol
          )
            throw new Error(`Invalid protocol (${n})`);
          if ((null == t ? void 0 : t.requireProtocol) && null === n)
            throw new Error(`Missing protocol (${n})`);
          const i = void 0 !== r[3] ? decodeURIComponent(r[2]) : null;
          if ((null == t ? void 0 : t.requireSource) && null === i)
            throw new Error(`Missing source (${e})`);
          const A = void 0 !== r[3] ? decodeURIComponent(r[3]) : decodeURIComponent(r[2]);
            params: void 0 !== r[4] ? o().parse(r[4]) : null
          };
