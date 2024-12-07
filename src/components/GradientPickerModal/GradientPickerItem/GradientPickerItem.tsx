import { FC } from "react";

import { Button } from "components/Button";

import { styleSheet } from "./gradientPickerItem.styles";
import { GradientPickerItemProps } from "./gradientPickerItem.types";

export const GradientPickerItem: FC<GradientPickerItemProps> = ({
  gradientColors,
  gradientIndex,
  isSelected,
  onPress: handleGradientPress,
}) => {
  const styles = styleSheet(isSelected);

  const buttonText = `Gradient #${gradientIndex + 1} `;

  return (
    <Button
      gradientColors={gradientColors}
      gradientStyle={styles.gradientContainer}
      label={buttonText}
      labelStyle={styles.buttonLabel}
      onPress={handleGradientPress}
    />
  );
};
