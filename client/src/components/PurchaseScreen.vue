<script>
    export default {
        props: {
            product: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        }
    }
</script>

<template>
    <div>
        {{ product.title }}
        {{ product.description }}
        {{ product.price }}
    </div>
</template>

<style></style>