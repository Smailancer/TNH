import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Country from 'app/Models/Country';

export default (() => {
const __VLS_setup = async () => {
defineProps({
mustVerifyEmail: {
type: Boolean,
},
status: {
type: String,
},
});

const user = usePage().props.auth.user;

// Initialize the countries data with an empty array
let countries = [];

// Fetch the list of countries when the component is mounted
onMounted(async () => {
try {
const countryList = await Country.getAllCountries(); // Call the method from your model
countries = countryList; // Update the countries data with the fetched list
} catch (error) {
console.error('Error loading countries:', error);
}
});

const form = useForm({
username: user.username,
name: user.name,
email: user.email,
country_id: user.country_id, // Add country_id property
});
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {
$props: (await import('./__VLS_types.js')).makeOptional(defineProps({
mustVerifyEmail: {
type: Boolean,
},
status: {
type: String,
},
})),
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'UpdateProfileInformationForm';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'InputLabel', typeof __VLS_components, 'InputLabel'> &
import('./__VLS_types.js').WithComponent<'TextInput', typeof __VLS_components, 'TextInput'> &
import('./__VLS_types.js').WithComponent<'InputError', typeof __VLS_components, 'InputError'> &
import('./__VLS_types.js').WithComponent<'Link', typeof __VLS_components, 'Link'> &
import('./__VLS_types.js').WithComponent<'PrimaryButton', typeof __VLS_components, 'PrimaryButton'> &
import('./__VLS_types.js').WithComponent<'Transition', typeof __VLS_components, 'Transition'>;
__VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel; __VLS_components.InputLabel;
// @ts-ignore
[InputLabel, InputLabel, InputLabel, InputLabel,];
__VLS_components.TextInput; __VLS_components.TextInput; __VLS_components.TextInput;
// @ts-ignore
[TextInput, TextInput, TextInput,];
__VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError; __VLS_components.InputError;
// @ts-ignore
[InputError, InputError, InputError, InputError,];
__VLS_components.Link; __VLS_components.Link;
// @ts-ignore
[Link, Link,];
__VLS_components.PrimaryButton; __VLS_components.PrimaryButton;
// @ts-ignore
[PrimaryButton, PrimaryButton,];
__VLS_components.Transition; __VLS_components.Transition;
// @ts-ignore
[Transition, Transition,];
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = {};
{
({} as JSX.IntrinsicElements).header;
({} as JSX.IntrinsicElements).header;
(__VLS_x as JSX.IntrinsicElements)['header'] = {};
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-lg font-medium text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("mt-1 text-sm text-gray-600"), };
}
}
{
({} as JSX.IntrinsicElements).form;
({} as JSX.IntrinsicElements).form;
(__VLS_x as JSX.IntrinsicElements)['form'] = { class: ("mt-6 space-y-6"), };
type __VLS_0 = JSX.IntrinsicElements['form'];
const __VLS_1: import('./__VLS_types.js').EventObject<typeof undefined, 'submit', {}, __VLS_0['onSubmit']> = {
submit: $event => {
__VLS_ctx.form.patch(__VLS_ctx.route('profile.update'));
}
};
// @ts-ignore
[form, route,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputLabel>) = { for: ("username"), value: ("Username"), };
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.TextInput>) = { id: ("username"), type: ("text"), class: ("mt-1 block w-full bg-gray-200"), modelValue: ((__VLS_ctx.form.username)), required: (true), autofocus: (true), autocomplete: ("username"), disabled: (true), };
// @ts-ignore
[form,];
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputError>) = { class: ("mt-2"), message: ((__VLS_ctx.form.errors.username)), };
// @ts-ignore
[form,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputLabel>) = { for: ("name"), value: ("Name"), };
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.TextInput>) = { id: ("name"), type: ("text"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.name)), required: (true), autofocus: (true), autocomplete: ("name"), };
// @ts-ignore
[form,];
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputError>) = { class: ("mt-2"), message: ((__VLS_ctx.form.errors.name)), };
// @ts-ignore
[form,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputLabel>) = { for: ("email"), value: ("Email"), };
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.TextInput>) = { id: ("email"), type: ("email"), class: ("mt-1 block w-full"), modelValue: ((__VLS_ctx.form.email)), required: (true), autocomplete: ("username"), };
// @ts-ignore
[form,];
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputError>) = { class: ("mt-2"), message: ((__VLS_ctx.form.errors.email)), };
// @ts-ignore
[form,];
}
}
if (__VLS_ctx.mustVerifyEmail && __VLS_ctx.user.email_verified_at === null) {
// @ts-ignore
[mustVerifyEmail, user,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-sm mt-2 text-gray-800"), };
{
__VLS_templateComponents.Link;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Link>) = { href: ((__VLS_ctx.route('verification.send'))), method: ("post"), as: ("button"), class: ("underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), };
// @ts-ignore
[route,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-2 font-medium text-sm text-green-600"), };
(await import('./__VLS_types.js')).directiveFunction(__VLS_ctx.vShow)(__VLS_ctx.status === 'verification-link-sent');
// @ts-ignore
[status,];
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputLabel>) = { for: ("country_id"), value: ("Country"), };
}
{
({} as JSX.IntrinsicElements).select;
({} as JSX.IntrinsicElements).select;
(__VLS_x as JSX.IntrinsicElements)['select'] = { id: ("country_id"), class: ("mt-1 block w-full"), value: ((__VLS_ctx.form.country_id)), required: (true), };
// @ts-ignore
[form,];
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: (""), disabled: (true), };
}
for (const [country] of (await import('./__VLS_types.js')).getVForSourceType(__VLS_ctx.countries)) {
// @ts-ignore
[countries,];
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { key: ((country.id)), value: ((country.id)), };
(country.name);
}
}
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.InputError>) = { class: ("mt-2"), message: ((__VLS_ctx.form.errors.country_id)), };
// @ts-ignore
[form,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex items-center gap-4"), };
{
__VLS_templateComponents.PrimaryButton;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.PrimaryButton>) = { disabled: ((__VLS_ctx.form.processing)), };
// @ts-ignore
[form,];
}
{
__VLS_templateComponents.Transition;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Transition>) = { enterActiveClass: ("transition ease-in-out"), 'enter-active-class': ("transition ease-in-out"), enterFromClass: ("opacity-0"), 'enter-from-class': ("opacity-0"), leaveActiveClass: ("transition ease-in-out"), 'leave-active-class': ("transition ease-in-out"), leaveToClass: ("opacity-0"), 'leave-to-class': ("opacity-0"), };
if (__VLS_ctx.form.recentlySuccessful) {
// @ts-ignore
[form,];
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-sm text-gray-600"), };
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
...defineProps({
mustVerifyEmail: {
type: Boolean,
},
status: {
type: String,
},
}),
InputError: InputError,
InputLabel: InputLabel,
PrimaryButton: PrimaryButton,
TextInput: TextInput,
Link: Link,
user: user,
countries: countries,
form: form,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
