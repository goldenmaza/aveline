@aveline/frontend - revision history



*#####* - [Frontend] ImportConstantUtility for Contact components - Apr 11, 2025

In this commit we have updated the central location for importing environmental variables, by adding
the fetching of said variables for all 'Contact' components.

v.2.40.0



*#####* - [Frontend] ImportConstantUtility for Footer components - Apr 11, 2025

In this commit we have updated the central location for importing environmental variables, by adding
the fetching of said variables for all 'Footer' components.

v.2.39.0



*#####* - [Frontend] ImportConstantUtility for Form components - Apr 11, 2025

In this commit we have updated the central location for importing environmental variables, by adding
the fetching of said variables for all 'Form' components.

v.2.38.0



*#####* - [Frontend] ImportConstantUtility for Header components - Apr 11, 2025

In this commit we have updated the central location for importing environmental variables, by adding
the fetching of said variables for all 'Header' components.

v.2.37.0



*#####* - [Frontend] ImportConstantUtility for Home components - Apr 11, 2025

In this commit we have updated the central location for importing environmental variables, by adding
the fetching of said variables for all 'Home' components.

v.2.36.0



*#####* - [Frontend] ImportConstantUtility for API - Apr 11, 2025

In this commit we have updated the central location for importing environmental variables, by adding
the fetching of said variables for all API calls.

v.2.35.0



*#####* - [Frontend] ImportConstantUtility for Images - Apr 11, 2025

In this commit we have created a central location for importing of environmental variables, and in this
change we also added the fetching of said variables for all picture, and source, tags. The ImportConstantUtility
will basically use a Switch case to determine which environmental variable that should be fetched during runtime.

v.2.34.0



*#####* - [Frontend] Revision history corrected - Apr 11, 2025

In this commit we have corrected the SHA commit codes for the latest commits in this document.

v.2.33.0



b83241f - [Aveline] Example env file updated - Apr 9, 2025

In this commit we have updated the sample env file to now work with the Vite migration.

v.2.32.0



4d6a745 - [Frontend] Images wrapped with picture and source markup - Apr 9, 2025

In this commit we have added so all 'img' tags are now using the wrapping 'picture' tag, with
multiple 'source' tags, in the markup. The possible 'source' options will be loaded from the env file.

v.2.31.0



fbdcf09 - [Frontend] Lighthouse improvements - Apr 9, 2025

In this commit we have added some improvements suggested by Lighthouse tool in Chrome.

v.2.30.0



01c12e4 - [Frontend] Cleanup and minor fixes - Apr 9, 2025

In this commit we have removed some unnecessary code and configurations, added HydrateFallback to the main route, as
well as fixed the Slideshow component from not looping correctly.

v.2.29.0



9e138ce - [Test] CRA => Vite migration - Apr 9, 2025

In this commit we have migrated from CRA to Vite regarding test code.

v.2.28.0



c22b83b - [Frontend] CRA => Vite migration - Apr 9, 2025

In this commit we have migrated from CRA to Vite for bundling source code.

v.2.27.0



13d2a3d - [Frontend] Adding React configurations - Apr 9, 2025

In this commit we have re-entered the React configurations to the 'package.json' file with the latest versions.

v.2.26.0



9ece785 - [Frontend] Restarting React configurations - Apr 9, 2024

In this commit we have cleaned out the configurations from the 'package.json' file, and now include a
revision history to give a little more details about the respective commits.

v.2.25.0



62ccd9e - [Selector] Removal of Selector component - Dec 11, 2024

In this commit we have removed all traces of the 'Selector' component as we now use the
RouterProvider dependency to deal with routes.

v.2.24.0



5cf3e41 - [SiteLayout] Home becomes SiteLayout - Dec 11, 2024

In this commit we have renamed the 'Home' component to 'SiteLayout', and removed its state in the
process, as it will be the frame for each page that the user visits and respective route will be
incorporated into it by using 'Outlet'.

v.2.23.0



b7f1b34 - [Page] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Page' component to now follow the functional component paradigm. The
component uses the 'ContentContainer' component to create nested paragraphs, and 'Collage', for said page.

v.2.22.0



c660bfb - [Navigation] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Navigation' component to now follow the functional component paradigm.

v.2.21.0



b5a1302 - [Collage] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Collage' component to now follow the functional component paradigm.

v.2.20.0



31441c1 - [Heading] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Heading' component to now follow the functional component paradigm.

v.2.19.0



f3ad8df - [Prevention] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Prevention' component to now follow the functional component paradigm.

v.2.18.0



67525f7 - [Content] Functional component implementation - Dec 11, 2024

In this commit we have actually removed the 'Content' component.

v.2.17.0



a3e0d18 - [Copyright] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Copyright' component to now follow the functional component paradigm.

v.2.16.0



0fe0707 - [Sitemap] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Sitemap' component to now follow the functional component paradigm.

v.2.15.0



ee6e81e - [Contact] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Contact' component to now follow the functional component paradigm. The
component has been refactored, so we have now extracted certain parts over to several subcomponents, e.g. the
'ContactSummary', 'MainOfficeList', 'OfficeEmployeeListItem', 'OfficeSummary', and 'RegionalOfficeListItem'
components. These components are very simple, just using props to create different contact details, they have
no state of their own.

v.2.14.0



8f90dff - [Footer] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Footer' component to now follow the functional component paradigm.

v.2.13.0



c8941a0 - [Slide] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Slide' component to now follow the functional component paradigm.

v.2.12.0



71d5a5b - [Slider] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Slider' component to now follow the functional component paradigm.

v.2.11.0



9fa7f48 - [Slideshow] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Slideshow' component to now follow the functional component paradigm.

v.2.10.0



a1b355a - [Highlights] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Highlights' component to now follow the functional component paradigm.

v.2.9.0



f3ed46a - [Menu] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Menu' component to now follow the functional component paradigm.

v.2.8.0



1596f66 - [Handler] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Handler' component to now follow the functional component paradigm.

v.2.7.0



2ac7af2 - [Header] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Header' component to now follow the functional component paradigm.

v.2.6.0



8a4a588 - [HelpSection] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'HelpSection' component to now follow the functional component paradigm. The
functions for generating the different sections, detailing what is possible with the form, has been extracted to
a utility file, e.g. 'helpSectionGenerator.js'.

v.2.5.0



7e29cf5 - [Form] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Form' component to now follow the functional component paradigm. We
also have three custom form components to represent the different form elements, e.g. Button, Input, and Textarea.

v.2.4.0



07db88b - [Home] Functional component implementation - Dec 11, 2024

In this commit we have updated the 'Home' component to now follow the functional component paradigm.

v.2.3.0



9c40e7c - [RouterProvider] RouterProvider implementation - Dec 11, 2024

In this commit we have now added the RouterProvider to implement a better way of dealing
with the different routes. Loaders have been added to hold the different API calls in a central
location, and the extra APIs are to be called by a specific route once navigated. Wrappers have
been added to extract the different implementations away from the RouterProvider markup for a
cleaner look. Suspense have been added to display something while API calls are being processed.

v.2.2.0



c2860a5 - [Frontend] Custom hooks for components - Dec 11, 2024

In this commit we have now implemented our custom hooks to fetch the state for respective component.

v.2.1.0



4adb93f - [Backend] Dependency version bumping - Dec 11, 2024

In this commit we are replacing legacy code by bumping dependencies to the latest versions,
to work on a newer implementation for the '@aveline/frontend' project.

v.2.0.0



29536b6 - [WebdriverIO] Added ContactTree testing - Apr 5, 2021

In this commit we have added test cases for the ContactTree, the different offices and respective
employees, should behave in a special way depending on what you press.

v.1.199.0



96a208f - [SCSS] SCSS generated CSS file updated - Apr 5, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.198.0



6abdd3b - [SCSS] Minor changes - Apr 5, 2021

In this commit we have made minor styling changes.

v.1.197.0



92c0d6f - [Components] Accessibility improvements - Apr 5, 2021

In this commit we have made minor markup updates to improve accessibility.

v.1.196.0



0558870 - [SCSS] SCSS generated CSS file updated - Apr 5, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.195.0



f4272c2 - [Frontend] Accessibility improvements - Apr 5, 2021

In this commit we have updated the markup to improve accessibility, by using the 'main' tag.

v.1.194.0



3e37e6d - [Components] Accessibility improvements - Apr 5, 2021

In this commit we have updated the markup to improve accessibility with certain components, e.g.
the 'Selector', 'Header', 'Footer', and 'Sitemap' components.

v.1.193.0



27af271 - [Components] Level & Label added for Contact - Apr 5, 2021

In this commit we have included the 'Heading' component under the 'Contact' component.

v.1.192.0



737edb1 - [SCSS] Accessibility improvements - Apr 5, 2021

In this commit we have updated the styling to improve accessibility.

v.1.191.0



415a2a0 - [WebdriverIO] Accessibility testing updated - Apr 5, 2021

In this commit we have updated the accessibility testing.

v.1.190.0



3a7db04 - [SCSS] SCSS generated CSS file updated - Apr 5, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.189.0



f718ddd - [SCSS] Hidden headings for accessibility - Apr 5, 2021

In this commit we have updated the 'hidden' class selector with accessibility in mind.

v.1.188.0



d5bcb3a - [SCSS] Nesting SCSS files - Apr 5, 2021

In this commit we have updated imports of some SCSS files to create a nested hierarchy in the generated output.

v.1.187.0



7f77ec7 - [WebdriverIO] Installation of sa11y/wdio dependency - Apr 5, 2021

In this commit we have added the '@sa11y/wdio' dependency.

v.1.186.0



bfec64e - [WebdriverIO] Accessibility testing added - Apr 5, 2021

In this commit we have added the use of the 'assertAccessible' method.

v.1.185.0



6466d77 - [WebdriverIO] Pause method added - Apr 5, 2021

In this commit we have added the 'pause' method for the 'Form' and 'Page' components.

v.1.184.0



c969583 - [WebdriverIO] Minor updates to ContactForm testing - Apr 3, 2021

In this commit we have made minor test updates to the 'Form' and 'HelpSection' components.

v.1.183.0



029f977 - [WebdriverIO] Fix of WebdriverIO dependency - Mar 30, 2021

In this commit we have made some minor WebdriverIO dependency and configuration fixes.

v.1.182.0



9f359da - [Regex] Regex from env fix + minor - Mar 30, 2021

In this commit we have updated the loading of Regex values, and parsed some number values
to integer, from the environment variables.

v.1.181.0



132739d - [WebdriverIO] Updated ContactForm testing - Mar 30, 2021

In this commit we have updated the testing of the 'Form' and 'HelpSection' components.

v.1.180.0



f24e35b - [WebdriverIO] Added ContactForm testing - Mar 29, 2021

In this commit we have added the testing of the 'Form' and 'HelpSection' components.

v.1.179.0



1241907 - [WebdriverIO] Installation of WebdriverIO dependency - Mar 29, 2021

In this commit we have added the WebdriverIO dependencies and configurations.

v.1.178.0



920fb97 - [Components] Sitemap attribute validation - Mar 14, 2021

In this commit we have updated a selector to include if the 'sitemap' attribute is set to false.

v.1.177.0



4faee55 - [SCSS] SCSS generated CSS file updated - Jan 26, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.176.0



7baa4d5 - [Components] Added Invalid route used by Storybook - Jan 26, 2021

In this commit we have added an invalid route that will be used by a Storybook story.

v.1.175.0



f809625 - [SCSS] Minor changes - Jan 26, 2021

In this commit we have added improved visuals for respective stories, so it is more obvious, by updating SCSS.

v.1.174.0



7f2b166 - [Storybook] Improved visuals for stories - Jan 26, 2021

In this commit we have added improved visuals for respective stories, so it is more obvious, by updating Storybook.

v.1.173.0



f4f110e - [Storybook] Added a way of sorting stories - Jan 26, 2021

In this commit we have added sorting of Storybook stories by respective group (common, form, etc).

v.1.172.0



647fbbf - [Storybook] Removal of nested stories - Jan 26, 2021

In this commit we have removed 'Slide' and 'Slider' Storybook stories as they are nested
and shouldn't be tested independently.

v.1.171.0



98c5d40 - [Storybook] Decorator added to stories - Jan 24, 2021

In this commit we have added decorators to all Storybook stories.

v.1.170.0



8628130 - [Storybook] Import of SCSS to Storybook - Jan 24, 2021

In this commit we have made a minor update regarding Storybook configurations.

v.1.169.0



ad3f487 - [Aveline] Updating the README files after certain changes - Jan 24, 2021

In this commit we added some possible testing frameworks, to be used in this project, to the README files.

v.1.168.0



c4cb6e1 - [Storybook] Draft of stories - Jan 24, 2021

In this commit we have added the Storybook drafts for all components.

v.1.167.0



1cbe88d - [Storybook] Installation of Storybook dependency - Jan 24, 2021

In this commit we have added the Storybook dependencies and configurations.

v.1.166.0



efeebb4 - [Test] Minor fix of Slideshow env variables - Jan 24, 2021

In this commit we have replaced the 'highlights' with 'slideshow' environment variable for said test case.

v.1.165.1



caf63c7 - [Aveline] Updating the README files after certain changes - Jan 17, 2021

In this commit we have made minor update to the README files by adding 'Selenium' to the description.

v.1.165.0



626a2ca - [SCSS] Minor updates & generated file updated - Jan 17, 2021

In this commit we have made use of some global variables, and added the border variables, as well as
added the updates regarding the newly generated CSS styles, from the SCSS resources.

v.1.164.0



d5a85d3 - [SCSS] SCSS generated CSS file updated - Jan 17, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.163.0



d37b934 - [SCSS] Font-family and dimension variables used - Jan 17, 2021

In this commit we have started using some global font-family and dimension variables.

v.1.162.0



109cab1 - [SCSS] Font-family and dimension variables added - Jan 17, 2021

In this commit we have added font-family and dimension global variables.

v.1.161.0



1943cb3 - [SCSS] SCSS generated CSS file updated - Jan 17, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.160.0



24ab5a2 - [SCSS] Root refactoring and other minor changes - Jan 17, 2021

In this commit we have made some refactoring of the CSS styles, under the SCSS resources.

v.1.159.0



04f9c25 - [SCSS] SCSS generated CSS file updated - Jan 16, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.158.0



9b1745f - [SCSS] Font-size and resolution variables used - Jan 16, 2021

In this commit we have started using some global font-size and resolution variables.

v.1.157.0



eeabce1 - [SCSS] Font-size and resolution variables added - Jan 16, 2021

In this commit we have added font-size and resolution global variables.

v.1.156.0



9e2ebc9 - [SCSS] SCSS generated CSS file updated - Jan 16, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.155.0



58eb304 - [SCSS] Mixin, Margin & Padding variables used - Jan 16, 2021

In this commit we have started using some global mixin, margin, and padding variables.

v.1.154.0



f1172e6 - [SCSS] Margin & Padding variables added - Jan 16, 2021

In this commit we have added margin and padding global variables.

v.1.153.0



4e78976 - [SCSS] Flexbox mixins added - Jan 16, 2021

In this commit we have added mixin regarding Flexbox styles.

v.1.152.0



33cdb5e - [SCSS] Theme refactoring of components and minor changes - Jan 7, 2021

In this commit we have made some refactoring using themes, and minor changes.

v.1.151.0



4715320 - [SCSS] Flexbox centering of elements - Jan 7, 2021

In this commit we have added centering of elements by using Flexbox styling.

v.1.150.0



b5a4818 - [SCSS] New global variables and themes using these - Jan 7, 2021

In this commit we have started introducing themes with global variables.

v.1.149.0



c8e9235 - [SCSS] Mixin refactoring of flexbox column/row - Jan 6, 2021

In this commit we have started using the mixin directive to share common styles.

v.1.148.0



4f7e9b4 - [Aveline] SCSS generated CSS file updated - Jan 5, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.147.0



604893d - [Aveline] SCSS syntax indentation fixed - Jan 5, 2021

In this commit we have removed some indentation from the 'header' styles.

v.1.146.0



7754522 - [Aveline] Removal of child selector arrows - Jan 5, 2021

In this commit we have removed some child selector arrows regarding
the 'footer' and the 'form' components / styles.

v.1.145.0



fd4965a - [Aveline] SCSS generated CSS file updated - Jan 5, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.144.0



9d3acb9 - [Aveline] Added Handler, Menu & root SCSS imports - Jan 5, 2021

In this commit we have added the 'root', 'handler', and 'menu' imports.

v.1.143.0



4d4b99a - [Aveline] SCSS syntax for refactored header components - Jan 5, 2021

In this commit we have refactored the 'header' styles.

v.1.142.0



47ef500 - [Aveline] SCSS syntax for root div tag - Jan 5, 2021

In this commit we have added the styling for the 'root' tag, and its children.

v.1.141.0



72ec93c - [Aveline] SCSS Header syntax refactored - Jan 5, 2021

In this commit we have refactored the 'header' styles.

v.1.140.0



350da41 - [Aveline] Components refactored with extra section tags - Jan 5, 2021

In this commit we have added empty tags (fragment) surrounding elements.

v.1.139.0



4b63968 - [Aveline] SCSS globals refactored - Jan 5, 2021

In this commit we have moved some rows to another scss file, used for global styles.

v.1.138.0



38699d2 - [Aveline] SCSS generated CSS file updated - Jan 5, 2021

In this commit we have the newly generated CSS styles, from the SCSS resources.

v.1.137.0



9c2e3e6 - [Aveline] Common, Home & Contact components's styles removed - Jan 5, 2021

In this commit we have removed some 'common', 'home', and 'contact' styles.

v.1.136.0



d34b890 - [Aveline] Added Common, Home & Contact SCSS imports - Jan 5, 2021

In this commit we have added the 'home', 'common', and 'contact' imports.

v.1.135.0



9c06f56 - [Aveline] SCSS syntax for contact components - Jan 5, 2021

In this commit we have included the SCSS file regarding the 'contact' components / styles.

v.1.134.0



ae7e9d3 - [Aveline] SCSS syntax for common components - Jan 5, 2021

In this commit we have included the SCSS file regarding the 'common' components / styles.

v.1.133.0



f3f1bfe - [Aveline] SCSS syntax for home components - Jan 5, 2021

In this commit we have included the SCSS file regarding the 'home' components / styles.

v.1.132.0



842c9ce - [Aveline] Added Footer and re-added Form SCSS imports - Jan 5, 2021

In this commit we have added the 'footer' styles, and re-added the 'form' styles.

v.1.131.0



378c436 - [Aveline] Fixed the style bug for Sitemap - Jan 5, 2021

In this commit we have fixed the styling but for the 'Sitemap' component.

v.1.130.1



3144ca3 - [Aveline] Footer components's styles removed - Jan 5, 2021

In this commit we have removed some 'footer' styles.

v.1.130.0



8e90971 - [Aveline] SECTION replaced DIV - Jan 5, 2021

In this commit we have made a minor markup change where 'section' is now replaced by 'div'.

v.1.129.0



bc80a3d - [Aveline] Minor changes - Jan 5, 2021

In this commit we have added minor changes.

v.1.128.0



dc18c53 - [Aveline] SCSS syntax for footer components - Jan 5, 2021

In this commit we have included the SCSS file regarding the 'footer' components / styles.

v.1.127.0



30a12ad - [Aveline] Reverted import replacements" - Jan 5, 2021

In this commit we have reverted the '2a4a88e' commit by replacing 'use' with 'import'.

v.1.126.0



d326ddb - [Aveline] Minor changes - Jan 4, 2021

In this commit we have added minor changes.

v.1.125.0



eac4102 - [Aveline] Added watch flag to SCSS command - Jan 4, 2021

In this commit we have updated the 'scss' build script to include 'watch' flag.

v.1.124.0



8faaa9e - [Aveline] Form components's styles removed - Jan 4, 2021

In this commit we have removed some 'form' styles.

v.1.123.0



4ebb4de - [Aveline] SCSS syntax for form components - Jan 4, 2021

In this commit we have included the SCSS file regarding the 'form' components / styles.

v.1.122.0



2a4a88e - [Aveline] @import replacements (@use) - Jan 4, 2021

In this commit we have replaced the 'import' with 'use' keyword regarding the SCSS files.

v.1.121.0



7bc3de2 - [Aveline] HelpSection component updated with classNames - Jan 4, 2021

In this commit we have added 'classNames' to the markup, regarding the 'HelpSection' component,
for better styling control.

v.1.120.0



4447d7d - [Aveline] SCSS syntax for header components - Jan 4, 2021

In this commit we have included the SCSS file regarding the 'header' components / styles.

v.1.119.0



abfc30f - [Aveline] SCSS boilerplate - Jan 4, 2021

In this commit we have included the SCSS boilerplate / starting point.

v.1.118.0



80f8376 - [Aveline] Addition of SCSS build command - Jan 4, 2021

In this commit we have added the 'scss' build command and included the 'node-sass' library for it.

v.1.117.0



751c256 - [Aveline] Update of .gitignore to include package-lock.json file - Jan 4, 2021

In this commit we added so that the 'package-lock.json' files, and the 'public' directory, will be ignored.

v.1.116.0



45c4262 - [Aveline] Removal of package-lock.json files - Jan 4, 2021

In this commit we removed the 'package-lock.json' files.

v.1.115.0



f7b7cac - [Aveline] Development/Production setup for the frontend - Dec 25, 2020

In this commit we have added so that we are now loading the 'NODE_ENV' environment
variables during runtime, and loading the correct '.env.*' file.

v.1.114.0



2939d6d - [Aveline] Fixed Axios post call - Dec 25, 2020

In this commit we fixed the Axios post call.

v.1.113.0



c6d96ee - [Aveline] Reset form call added to submit - Dec 25, 2020

In this commit we added so the form gets reset once the message has been submitted.

v.1.112.0



f7b8cdf - [Aveline] Example .env files & gitignore updates - Dec 25, 2020

In this commit we added the 'sample.env' files and update the gitignore files to hide 'dev'
and 'prod' respectively.

v.1.111.0



19161d1 - [Aveline] Removal of proxy from package.json - Dec 25, 2020

In this commit we remove the 'proxy' attribute from the 'package.json' file.

v.1.110.0



89397a1 - [Aveline] React testing of HelpSection component - Nov 15, 2020

In this commit we have added the testing of the 'HelpSection' component.

v.1.109.0



a933cba - [Aveline] React testing of Form component - Nov 15, 2020

In this commit we have added the testing of the 'Form' component.

v.1.108.0



90e9bb9 - [Aveline] React testing of Contact component - Nov 15, 2020

In this commit we have added the testing of the 'Contact' component.

v.1.107.0



6c6ddbc - [Aveline] React testing of Slider component - Nov 15, 2020

In this commit we have added the testing of the 'Slider' component.

v.1.106.0



1897500 - [Aveline] React testing of Slideshow component - Nov 15, 2020

In this commit we have added the testing of the 'Slideshow' component.

v.1.105.0



f68cbff - [Aveline] React testing of Highlights component - Nov 15, 2020

In this commit we have added the testing of the 'Highlights' component.

v.1.104.0



0bb691a - [Aveline] React testing of Content component - Nov 15, 2020

In this commit we have added the testing of the 'Content' component.

v.1.103.0



416b452 - [Aveline] React testing of Sitemap component - Nov 15, 2020

In this commit we have added the testing of the 'Sitemap' component.

v.1.102.0



67b6375 - [Aveline] React testing of Footer component - Nov 15, 2020

In this commit we have added the testing of the 'Footer' component.

v.1.101.0



3dec593 - [Aveline] React testing of Menu component - Nov 15, 2020

In this commit we have added the testing of the 'Menu' component.

v.1.100.0



bf5b6de - [Aveline] React testing of Handler component - Nov 15, 2020

In this commit we have added the testing of the 'Handler' component.

v.1.99.0



31a8232 - [Aveline] Cleanup of test files - Nov 15, 2020

In this commit we have made cleaned up the import list of some test files, and added two tests.

v.1.98.0



7fe51a7 - [Aveline] Minor component refactoring - Nov 13, 2020

In this commit we have made minor refactoring or updates.

v.1.97.0



7b0fa35 - [Aveline] React testing of Slide component - Nov 13, 2020

In this commit we have added the testing of the 'Slide' component.

v.1.96.0



5cb5ee9 - [Aveline] React testing of Home component - Nov 13, 2020

In this commit we have added the testing of the 'Home' component.

v.1.95.0



0b2743b - [Aveline] React tests updated (Navigation) - Nov 13, 2020

In this commit we have updated the testing of the 'Navigation' component.

v.1.94.1



43b289d - [Aveline] React testing of Selector component - Nov 13, 2020

In this commit we have added the testing of the 'Selector' component.

v.1.94.0



fa7e994 - [Aveline] React testing of Prevention component - Nov 13, 2020

In this commit we have added the testing of the 'Prevention' component.

v.1.93.0



5f7ccf5 - [Aveline] React testing of Heading component - Nov 13, 2020

In this commit we have added the testing of the 'Heading' component.

v.1.92.0



c34f607 - [Aveline] React testing of Collage component - Nov 13, 2020

In this commit we have added the testing of the 'Collage' component.

v.1.91.0



0ef181c - [Aveline] React testing of Navigation component - Nov 13, 2020

In this commit we have added the testing of the 'Navigation' component.

v.1.90.0



7c3174a - [Aveline] Minor refactoring of Header component test file - Nov 12, 2020

In this commit we have renamed several of the test variables for the 'Header' component.

v.1.89.0



9e049dd - [Aveline] React testing of Copyright component - Nov 12, 2020

In this commit we have added the testing of the 'Copyright' component.

v.1.88.0



559acca - [Aveline] React testing of Header component - Nov 11, 2020

In this commit we have added the testing of the 'Header' component.

v.1.87.0



30b8426 - [Aveline] Testing dependencies added - Nov 11, 2020

In this commit we have added dependencies and ignored the '__snapshots__' directory
regarding the testing libraries.

v.1.86.0



2eef814 - [Aveline] Minor changes made to the package.json files - Nov 8, 2020

In this commit we have made changes to the 'package.json' file which includes description, new dependencies, and more.

v.1.85.0



6bc116a - [Aveline] MIT license has been converted to ICS - Nov 8, 2020

In this commit we have replaced the MIT license for the ICS license.

v.1.84.0



0ab072b - [Aveline] Refactoring of GraphQL requests and options - Oct 30, 2020

In this commit we have now a central location for all queries, and post options, under the 'constants'
directory sub-categorized further under respective grouping.

v.1.83.0



ebdd5d6 - [Aveline] Moved the TODO notification - Oct 30, 2020

In this commit we only moved a comment as it caused issues storing a li element under the array.

v.1.82.0



7bb634b - [Aveline] Redux cleanups (types & import) - Oct 30, 2020

In this commit we have removed the remaining 'Dispatch' and 'AnyAction' types as we will
introduce Typescript at a later time for this project.

v.1.81.0



4cc8354 - [Aveline] Component cleanups (constructor & import) - Oct 30, 2020

In this commit we have removed the 'Dispatch' type as we will introduce Typescript at a
later time for this project. We also removed the constructor as no initialization or
bindings were performed in any components.

v.1.80.0



6dda756 - [Aveline] Fixed minimalContact bug - Oct 21, 2020

In this commit we have fixed the 'minimalContact' bug by using props correctly, as 'minimalContact'
variable should only be used under the 'Form' component. With this change certain conditions could
be simplified.

v.1.79.1



95851a2 - [Aveline] Removal of AnyAction type from reducers - Oct 21, 2020

In this commit we have removed the 'AnyAction' type as we will introduce Typescript at a
later time for this project.

v.1.79.0



743eb7e - [Aveline] Minor CSS updates - Oct 12, 2020

In this commit we have made some minor CSS changes.

v.1.78.0



785a9db - [Aveline] Dependency updates - Oct 12, 2020

In this commit we have made a dependency update.

v.1.77.0



921d980 - [Aveline] Minor changes - Oct 12, 2020

In this commit we made some minor changes such as fixing typos, correcting a Regex expression, adding
'h5' to 'allowedLevels', as well as adding some comments.

v.1.76.0



0eb4609 - [Aveline] Nesting queries implementations for the front-end (common) - Oct 12, 2020

In this commit we have updated the 'Common' query to ignore data from the database if 'hidden'
is set to true. As well as some minor changes.

v.1.75.0



d8e5f5a - [Aveline] Nesting queries implementations for the front-end (contact) - Oct 12, 2020

In this commit we have updated the 'Contact' query to ignore data from the database if 'hidden'
is set to true. As well as some minor changes.

v.1.74.0



9026aff - [Aveline] Nesting queries implementations for the front-end (home) - Oct 12, 2020

In this commit we have updated the queries, and variables, to be plural regarding the 'Footer',
and we have also replaced 'multimedia' with 'collage'.

v.1.73.0



9575551 - [Aveline] Nesting queries implementations for the front-end (footer) - Oct 12, 2020

In this commit we have updated the queries, and variables, to be plural regarding the 'Footer',
and we have also replaced 'multimedia' with 'collage'.

v.1.72.0



a425862 - [Aveline] Nesting queries implementations for the front-end (header) - Oct 12, 2020

In this commit we have updated the queries, and variables, to be plural regarding the 'Header',
and we have also replaced 'multimedia' with 'collage'.

v.1.71.0



9d47eb4 - [Aveline] Refactoring of Query tags and state (to plural) - Jul 25, 2020

In this commit we have updated the queries, and variables, to be plural regarding 'offices',
'portraits' and 'pages'.

v.1.70.0



7154b0f - [Aveline] Page -> Content (+ subs) association changes made for front-end - Jul 25, 2020

In this commit we have updated the 'Page' query to now use nested paragraphs.

v.1.69.0



7596d09 - [Aveline] Refactoring of Tag variable - Jul 25, 2020

In this commit we have renamed the 'tag' variable to 'route' to better explain what it is.

v.1.68.0



9adc275 - [Aveline] Minor changes - Jul 23, 2020

In this commit we made several smaller changes like updating directory path, typo, CSS, and indentations.

v.1.67.0



2487d0e - [Aveline] Office -> Social && Contact -> Social association changes made for front-end - Jul 23, 2020

In this commit we have updated the 'Office' query to fetch the associated 'socials'. The query have also
been updated to fetch the associated 'profiles' of each employee under said office. This was done to clean
up the code for presenting the different offices, meaning that fewer comparisons will have to be made for
each render.

v.1.66.0



98a54bb - [Aveline] Dependency updates - Jul 23, 2020

In this commit we added multiple dependencies as well as start using scripts correctly with nodemon.

v.1.65.0



ad025b3 - [Aveline] Office -> Contact && Contact -> Multimedia association changes made for front-end - Jul 23, 2020

In this commit we have updated the 'Office' query to fetch the associated 'employees', and the associated
'portrait' of respective employee. This was done to clean up the code for presenting the different offices,
meaning that fewer comparisons will have to be made for each render.

v.1.64.0



d64e77c - [Aveline] Office -> Thumbnail association changes made for front-end - Jul 22, 2020

In this commit we updated the 'Office' query to fetch the associated 'thumbnail', to clean up the code
for presenting the different offices.

v.1.63.0



56d0f79 - [Aveline] Typo fixed regarding HelpSectionComponent - Jul 19, 2020

In this commit we fixed a typo regarding the new name for the 'FormHelp' component, as it is now called
'HelpSection', it looks like we missed the renaming of the import made for said component regarding the
process of combining reducers.

v.1.62.1



498eac3 - [Aveline] License documents have been updated - Jul 19, 2020

In this commit we made a minor update to the MIT licence files.

v.1.62.0



b388d83 - [Aveline] Updating the README files after certain changes - Jul 9, 2020

In this commit we updated the README files.

v.1.61.0



689e227 - [Aveline] MIT Licenses have been added to the project - Jun 29, 2020

In this commit we added MIT licence files.

v.1.60.0



e90cb5d - [Aveline] Renaming of FormHelp to HelpSection and required changes all around - Jun 27, 2020

In this commit we have renamed 'FormHelp' to 'HelpSection'.

v.1.59.0



823ede3 - [Aveline] Minor changes - Jun 27, 2020

In this commit we have made minor changes.

v.1.58.0



3ee0c54 - [Aveline] Implementation of Redux for the App component - Jun 27, 2020

In this commit we have now implemented the Redux feature for the project regarding the main React
element, e.g. the 'App' component. The props are now holding each state element as we have mapped state
and dispatch to props by using withRouter.

v.1.57.0



491c6ff - [Aveline] Implementation of Redux (store, actions, reducers and constants) - Jun 27, 2020

In this commit we have continued the work with moving state manipulations under reducers, default state
and dispatch keys under constants, e.g. for the 'App' component.

v.1.56.0



5785040 - [Aveline] Implementation of Redux for the Form components and dynamic HelpSection - Jun 27, 2020

In this commit we have now implemented the Redux feature for the project regarding the form elements,
e.g. the 'Form', and 'FormHelp' components. The props are now holding each state element as we have
mapped state and dispatch to props by using withRouter.

v.1.55.0



e672f56 - [Aveline] Implementation of Redux (store, actions, reducers and constants) - Jun 27, 2020

In this commit we have continued the work with moving the API calls over to actions, state
manipulations under reducers, default state and dispatch keys under constants, e.g. for
the 'Form', and 'FormHelp' components.

v.1.54.0



225e561 - [Aveline] Removed width style to make Menu buttons expand to the size of the client - Jun 24, 2020

In this commit we have just made a minor change by removing the 'width' attribute from the main 'Menu' buttons.

v.1.53.0



9871b87 - [Aveline] Implementation of Redux for the Home components - Jun 24, 2020

In this commit we have now implemented the Redux feature for the project regarding the home elements,
e.g. the 'Highlights', 'Home', 'Slide', 'Slider', and 'Slideshow' components. The props are now holding
each state element as we have mapped state and dispatch to props by using withRouter.

v.1.52.0



f90eaf8 - [Aveline] Implementation of Redux (store, actions, reducers and constants) - Jun 24, 2020

In this commit we have continued the work with moving the API calls over to actions, state
manipulations under reducers, default state and dispatch keys under constants, e.g. for
the 'Home', 'Slideshow', 'Slider', and 'Highlights' components.

The common reducers were also re-introduced. >_>

v.1.51.0



4b474f4 - [Aveline] Fixed the bug of selecting an office to show contacts - Jun 24, 2020

In this commit we have two parts. The first being the bugfix where we now can toggle on/off the
targeted office to view employees. The second being the default state and dispatch keys under
constants for the home elements, e.g. the 'Home', 'Slideshow', 'Slider', and 'Highlights' components.

The common reducers were also removed. <_<

v.1.50.1



c568ba1 - [Aveline] Implementation of Redux for the Contact components - Jun 23, 2020

In this commit we have now implemented the Redux feature for the project regarding the
contact elements, e.g. the 'Contact', and 'Navigation' components. The props are now holding
each state element as we have mapped state and dispatch to props by using withRouter.

v.1.50.0



11127fa - [Aveline] Implementation of Redux (store, actions, reducers and constants) - Jun 23, 2020

In this commit we have continued the work with moving the API calls over to actions, state
manipulations under reducers, default state and dispatch keys under constants, e.g. for
the 'Contact', and 'Navigation' components.

v.1.49.0



e6177b5 - [Aveline] Implementation of Redux for the Common components - Jun 23, 2020

In this commit we have now implemented the Redux feature for the project regarding the
common elements, e.g. the 'Selector', 'Content', 'Collage', and 'Prevention' components. The
props are now holding each state element as we have mapped state and dispatch to props by
using withRouter.

v.1.48.0



bc8a875 - [Aveline] Implementation of Redux (store, actions, reducers and constants) - Jun 23, 2020

In this commit we have continued the work with moving the API calls over to actions, state
manipulations under reducers, default state and dispatch keys under constants, e.g. for the 'Selector',
'Content', 'Collage', and 'Prevention' components.

v.1.47.0



a0f7633 - [Aveline] Refactoring of component locations - Jun 23, 2020

In this commit we have made minor changes by just relocating certain components and updated import locations.

v.1.46.0



68ab626 - [Aveline] Added comment and forgotten semicolons at the end of imports - Jun 22, 2020

In this commit we have made minor changes like adding missing semicolons and comments.

v.1.45.0



26d3c64 - [Aveline] Minor updates - Jun 22, 2020

In this commit we have made minor changes like using state and changing to another apostrophe.

v.1.44.0



fdb133a - [Aveline] Implementation of Redux for the Footer components - Jun 22, 2020

In this commit we have now implemented the Redux feature for the project regarding the
footer elements, e.g. the 'Sitemap', 'Footer', and 'Copyright' components. The props are now
holding each state element as we have mapped state and dispatch to props by using withRouter.

v.1.43.0



4d75d9b - [Aveline] Implementation of Redux (store, actions, reducers and constants) - Jun 22, 2020

In this commit we have continued the work with moving the API calls over to actions, state
manipulations under reducers, default state and dispatch keys under constants, e.g. for the 'Footer',
'Sitemap', and 'Copyright' components.

v.1.42.0



713c218 - [Aveline] Minor changes that I missed or wanted to improve - Jun 22, 2020

In this commit we have made minor changes like replacing a missed API address, and extracting
'allowedLevels' from the state to a local variable.

v.1.41.0



88492f0 - [Aveline] Implementation of Redux for the Header components - Jun 22, 2020

In this commit we have now implemented the Redux feature for the project regarding the
header elements, e.g. the 'Handler', 'Header', and 'Menu' components. The props are now
holding each state element as we have mapped state and dispatch to props by using withRouter.

v.1.40.0



aa4df84 - [Aveline] Implementation of Redux (store, actions, reducers and constants) - Jun 22, 2020

In this commit we have made the starting point of moving the API calls over to actions, state
manipulations under reducers, default state and dispatch keys under constants, and wrapped
BrowserRouter with the Provider (+ store). This change include said changes for the header elements,
e.g. the 'Header', 'Handler', and 'Menu' components. As well as the common constants, e.g. the 'Slideshow',
'Highlights', 'Content', 'Contact', 'Form', 'Footer', and 'Sitemap' components.

v.1.39.0



fc2574f - [Aveline] Removal of source code regarding the BuildTool - Jun 18, 2020

In this commit we have removed five definition types as they are no longer required.

v.1.38.0



2b49081 - [Aveline] Path refactoring of common components - Jun 18, 2020

In this commit we have removed the BuildTool components and relocated the 'common' ones,
e.g. 'Copyright', 'Footer', 'Sitemap', 'Handler', 'Header', and 'Menu' components.

v.1.37.0



9cdfd64 - [Aveline] Fixed a typo in the env name - Jun 18, 2020

In this commit we have fixed typos regarding the environment variables, for the 'Copyright' component.

v.1.36.1



7c56da4 - [Aveline] Dotenv implementation for the frontend application - part 2 - Jun 18, 2020

In this commit we have started loading static state data from the environment variables, for the
'Copyright', 'Footer', 'Handler', 'Header', 'Prevention', and 'Sitemap' components.

v.1.36.0



990342a - [Aveline] Cleanup and installation of new packages - Jun 18, 2020

In this commit we have made some project configurations and are now including 'react-router-hash-link'.

v.1.35.0



f421ba1 - [Aveline] Starting markup/layout design for the Aveline project - Jun 18, 2020

In this commit we have made some minor changes to the 'README.md' and 'index.html' files, as
well as added a major update to the 'index.css' file to now hold our starting point of
the Aveline markup/layout.

v.1.34.0



66b399e - [Aveline] Dotenv implementation for the frontend application - part 1 - Jun 18, 2020

In this commit we have started loading static state data from the environment variables, for the
'App', 'Content', 'Copyright', 'Highlights', 'Selector', 'Form', 'FormHelp', and 'Slideshow' components.

v.1.33.0



25afa35 - [Aveline] Project description added - Jun 3, 2020

In this commit we have updated the project description, replacing what was auto generated, with
Aveline specific details of current dependencies and work remaining.

v.1.32.0



3f9843b - [Aveline] Minor changes - Jun 3, 2020

In this commit we have made some query updates for the 'Handler' and 'Footer' components.

v.1.31.0



8f60f58 - [Aveline] Added children property to let contact details be part of the Contact page - Jun 3, 2020

In this commit we have included some contact details to be part of the 'Content' component.

v.1.30.0



d678fa3 - [Aveline] Highlights are now updated to cover anchor links - Jun 3, 2020

In this commit we have changed so that we now use 'HashLink', instead of 'NavLink', for
the 'Highlights' component.

v.1.29.0



466f231 - [Aveline] Copyright details is now set to Xact Partner AB - Jun 3, 2020

In this commit we have changed the copyright details under the 'Copyright' component.

v.1.28.0



66e322b - [Aveline] Verify that any images have been loaded before preparing the Slider component - Jun 3, 2020

In this commit we have added a selection to verify that the 'sources' attribute is no longer empty
before including the 'Slider' component, under the 'Slideshow' component.

v.1.27.0



10cdab9 - [Aveline] Loading address dynamically from contact details to prepare Google Maps component - Jun 3, 2020

In this commit we have started loading the main office address, under the 'Navigation' component,
from the props.

v.1.26.0



6778c3f - [Aveline] Implemented the contact tree markup - Jun 3, 2020

In this commit we have added the contact tree under the 'Contact' component.

v.1.25.0



1b78e32 - [Aveline] Added no autocomplete to form and removed boolean for clear button - Jun 3, 2020

In this commit we have removed the 'clearDisabled' state and attribute, as well as added 'autoComplete'
attribute to all form elements.

v.1.24.0



1554e97 - [Aveline] Modified the target component labels - Jun 3, 2020

In this commit we have uncapitalized strings for the 'component' attributes for the 'Selector' component.

v.1.23.0



cd257c5 - [Aveline] Form refactoring regarding responsive design - May 11, 2020

In this commit we have made some changes, here and there regarding state and markup,
regarding the 'Form' and 'FormHelp' components.

v.1.22.0



c0610bb - [Aveline] Minor changes - May 11, 2020

In this commit we have made some minor changes, here and there regarding state and markup,
regarding multiple components.

v.1.21.0



76a3e3f - [Aveline] Refactoring of loading data and implementation of responsive burger menu - May 11, 2020

In this commit we have moved the 'Menu' component over to the 'Handler' component, and in turn relocated
where the API call, as well as the toggle mechanics, that is used for the burger menu can now be found.

v.1.20.0



8b94133 - [Aveline] Sitemap component implementation used by the Footer component - May 11, 2020

In this commit we have updated the 'Sitemap' and the 'Footer' components, and some schema definition updates.

v.1.19.0



2616095 - [Aveline] Refactoring of nested components - May 11, 2020

In this commit we have updated the state of the 'Selector' component.

v.1.18.0



e39ee77 - [Aveline] Minor changes in current components and new ones created - May 7, 2020

In this commit we have added the new 'Collage' component, and included it part of the 'Content' component,
with an updated API call and state. Also, the state and layout of the 'Footer', 'Highlights', 'Navigation',
and 'Sitemap' components have been updated.

v.1.17.0



3de3512 - [Aveline] Implementation of a simple Slideshow - May 7, 2020

In this commit we have added the logic and layout of the 'Slide', 'Slider', and 'Slideshow' components,
including state and API call.

v.1.16.0



e4e0c20 - [Aveline] New routing requires new components - May 7, 2020

In this commit we have added the state and layout of the 'Home', 'Prevention', and 'Selector' components.

v.1.15.0



2bdb4ca - [Aveline] Implementation of the Contact content - May 7, 2020

In this commit we have added the logic and layout of the 'Contact' component, including state and API call.

v.1.14.0



d6b9078 - [Aveline] Minor refactoring of values assigned - May 7, 2020

In this commit we have made minor changes like using state, changing to another apostrophe,
and updating an API query.

v.1.13.0



1e577b8 - [Aveline] Refactoring of the routes to handle 404 differently - May 7, 2020

In this commit we have implemented the use of the BrowserRouter, under the 'App' component, for the
different pages (by using the 'Selector' component), e.g. 'Home', 'Form', 'Page', and 'Prevention' (for 404).

v.1.12.0



82c21e3 - [Aveline] Implementation of Nodemailer API and Form for using said API - May 7, 2020

In this commit we have implemented the Nodemailer API, as well as the two Form components that will be using
this API, e.g. 'Form' and 'HelpSection'.

v.1.11.0



e850173 - [Aveline] Refactoring of dependencies for frontend - May 7, 2020

In this commit we have made some minor updates to the dependencies like 'babel' and 'axios'.

v.1.10.0



a923ea4 - [Aveline] Removal of files - May 7, 2020

In this commit we have now removed some components, e.g. 'Brand', 'Container', and 'Section', as well as
the default 'index.css' file.

v.1.9.0



ecdb423 - [Aveline] Installation of dependencies and removal of components - Apr 27, 2020

In this commit we have now included some devDependencies as well as removed the 'Nav' and 'Social' components.

v.1.8.0



ee81ea9 - [Aveline] Implementation of official website - Apr 27, 2020

In this commit we have implemented the different components, e.g. 'Container', 'Content', 'Copyright',
'Footer', 'Handler', 'Header', 'Heading', 'Menu', 'Navigation', 'Section', and 'Sitemap' where most now
have their own API calls and stores the changes under state.

v.1.7.0



2014c7e - [Aveline] BrowserRouter changes - Apr 27, 2020

In this commit we have introduced the BrowserRouter dependency, wrapped around the 'App' component,
and removed certain 'common' components as well as the API call from the 'App' component.

v.1.6.0



9c0a2d7 - [Aveline] Minor refactoring of components - Apr 22, 2020

In this commit we have replaced the default HTML tags with React components, and moved said components
to the 'common' directory, as well as the BuildTool components to the 'buildtool' directory.

v.1.5.0



a449c37 - [Aveline] New components for the official website - Apr 22, 2020

In this commit we have added the new barebone components, e.g. 'Brand', 'Contact', 'Container', 'Content',
'Copyright', 'Footer', 'Handler', 'Header', 'Heading', 'Menu', 'Nav', 'Section', 'Sitemap', and 'Social'.

v.1.4.0



e5f932e - [Aveline] Minor changes - Apr 22, 2020

In this commit we have implemented the first website layout with the header, section, and footer. We
also removed the BuildTool from the 'App' component and added the API call to fetch data from the database.

v.1.3.0



a16324f - [Aveline] Cleanup and installation of new packages - Apr 19, 2020

In this commit we have added new dependencies as well as some minor clean up (removal of files).

v.1.2.0



287eaa5 - [Aveline] Initial Component creation for the BuildTool - Apr 19, 2020

In this commit we have added the initial component structure, and actions, for the BuildTool.

v.1.1.0



b0c9a6e - [Aveline] initial commit of the buildtool - Apr 16, 2020

In this commit we have the starting point of both the frontend and the backend projects. Most are
default implementation and test data created by the npm tool.

Looks like both 'package-lock.json' files were included into this commit. >_>

v.1.0.0
