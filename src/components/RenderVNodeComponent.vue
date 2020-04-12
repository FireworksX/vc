<script>
export default {
    name: 'RenderVNodeComponent',
    functional: true,
    render: (h, ctx) => {
        return ctx.props.vnode
    },
}
</script>
