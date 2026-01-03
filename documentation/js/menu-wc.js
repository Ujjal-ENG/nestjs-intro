'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' : 'data-bs-target="#xs-controllers-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' :
                                            'id="xs-controllers-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' : 'data-bs-target="#xs-injectables-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' :
                                        'id="xs-injectables-links-module-AppModule-047196305f5643a93db9f2e526e2db450854ca59858fbe64389921eddeb19b0db2437f192262841193a10694bc71391757ce7a6991abfadae09a70389d28fb21"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' :
                                            'id="xs-controllers-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' :
                                        'id="xs-injectables-links-module-AuthModule-d46e68df309fcd0c0b7a8c82dbc3c38bdf696a657f201b1dda73d6dfd086a3df9202f5a91154f0950ef5e7bd07f27d5d0d207f0c36859b5f69aa924e8a86c4d9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' :
                                            'id="xs-controllers-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' :
                                        'id="xs-injectables-links-module-PostsModule-7d1eef42130dd706b95342930fb52083287a04a7cb4201cc2fad32f0272fd545d20687284b09c1b2eea5f1b2fc20aee4f48629755527f051b3831d2811bcc435"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' :
                                            'id="xs-controllers-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' :
                                        'id="xs-injectables-links-module-UsersModule-f1d827e2b3f97d7caf595b9f2fb27c3bad5e8542c2186fb1055666ff98a4c69cf9df6224b403526b438037e12fadf918d0a674c8d0265b4af470fbb0896dd710"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMetaOptionsDto.html" data-type="entity-link" >CreateMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});