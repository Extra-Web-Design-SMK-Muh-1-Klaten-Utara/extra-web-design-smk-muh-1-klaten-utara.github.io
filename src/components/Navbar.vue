<script setup lang='ts'>

const props = defineProps<{
    active?: string,
}>();

const classActive = "font-bold underline text-white tracking-wide";
const classInactive = "text-slate-300 tracking-wide";

function decorateLink(name: string): string {
    return props.active?.toLowerCase() == name ? classActive : classInactive;
}
</script>

<template>
    <nav class='flex gap-4 justify-between bg-black py-4 px-12'>
        <div>
            <header>
                <h2 class='text-2xl font-bold'>Extra Web Tech</h2>
            </header>
        </div>
        <div>
            <ul class='flex gap-4'>
                <li>
                    <a href="#" :class='decorateLink("home")'>Home</a>
                </li>

                <li>
                    <a href="#" :class='decorateLink("about")'>About</a>
                </li>

                <li>
                    <a href="#" :class='decorateLink("courses")'>Courses</a>
                </li>
            </ul>
        </div>
    </nav>
</template>