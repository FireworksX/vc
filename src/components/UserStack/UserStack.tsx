import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { createMasks } from '@/components/UserStack/masks'

export default Vue.extend({
    name: 'vc-UserStack',
    props: {
        size: { type: String, default: 's' },
        layout: { type: String, default: 'horizontal' },
        photos: { type: Array, default: () => [] },
        visibleCount: { type: Number, default: 3 },
    },
    computed: {
        classNames(): any {
            const othersCount = Math.max(0, this.photos.length - this.visibleCount)
            const canShowOthers = othersCount > 0 && this.size === 'm'

            return [
                getClassName('vc-UserStack'),
                `UsersStack--size-${this.size}`,
                `UsersStack--l-${this.layout}`,
                {
                    'UsersStack--with-others': canShowOthers,
                },
            ]
        },
    },
    created() {
        createMasks()
    },
    render(h: any) {
        const othersCount = Math.max(0, this.photos.length - this.visibleCount)
        const canShowOthers = othersCount > 0 && this.size === 'm'

        const photosShown: string[] & any = this.photos.slice(0, this.visibleCount)

        return (
            <div class={this.classNames}>
                <div class="vc-UsersStack__photos">
                    {photosShown.map((photo: string, i: number) => {
                        return (
                            <div
                                key={i}
                                class="vc-UsersStack__photo"
                                style={{ backgroundImage: `url(${photo})` }}
                            />
                        )
                    })}

                    {canShowOthers && (
                        <div class="vc-UsersStack__photo UsersStack__photo--others">
                            {`+${othersCount}`}
                        </div>
                    )}
                </div>
                {this.$slots.default && (
                    <div class="vc-UsersStack__text">{this.$slots.default}</div>
                )}
            </div>
        )
    },
})
