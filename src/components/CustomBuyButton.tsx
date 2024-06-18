import { Button as UIButton } from '@faststore/ui'
import { usePDP }  from "@faststore/core"

export function CustomBuyButton() {
  const context = usePDP()

  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert(`Hello User: ${context.data.product.id}
        \nCustom Field: ${context?.data?.product?.customData}
        `)
      }}
    >
      Click me!
    </UIButton>
  )
}