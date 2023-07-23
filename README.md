# TODO WRITE THIS README AGAIN - TEST

## Component E.g

```
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../.";

```

```
<ProductCard
        product={product}
        className="bg-dark text-white"
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />

          </>
        )}
      </ProductCard>
```
