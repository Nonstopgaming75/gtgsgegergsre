import { Forms, General } from "@vendetta/ui/components";
import { BetterTableRowGroup, SimpleText } from "../../../../stuff/types";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { semanticColors } from "@vendetta/ui";
import { NavigationNative, stylesheet } from "@vendetta/metro/common";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import { storage } from "@vendetta/plugin";
import { openManageDataPage } from "./pages/ManageDataPage";

const { ScrollView } = General;
const { FormRow } = Forms;

const styles = stylesheet.createThemedStyleSheet({
  destructiveIcon: {
    tintColor: semanticColors.TEXT_DANGER,
  },
});
const destructiveText = {
  color: "TEXT_DANGER",
  variant: "text-md/semibold",
};

export default () => {
  const navigation = NavigationNative.useNavigation();

  return (
    <ScrollView>
      <BetterTableRowGroup title="Data" icon={getAssetIDByName("ic_cog_24px")}>
        <FormRow
          label={<SimpleText {...destructiveText}>Clear data</SimpleText>}
          leading={
            <FormRow.Icon
              style={styles.destructiveIcon}
              source={getAssetIDByName("ic_message_delete")}
            />
          }
          trailing={<FormRow.Arrow />}
          onPress={() =>
            showConfirmationAlert({
              title: "Clear data",
              content:
                "Are you sure you want to clear all local hidden server data?",
              confirmText: "Clear",
              confirmColor: "red" as ButtonColors,
              onConfirm: () => {
                storage.hiddenList = { list: [] };
              },
              isDismissable: true,
            })
          }
        />
        <FormRow
          label="Manage data"
          leading={
            <FormRow.Icon source={getAssetIDByName("ic_message_edit")} />
          }
          trailing={<FormRow.Arrow />}
          onPress={() => openManageDataPage(navigation)}
        />
      </BetterTableRowGroup>
    </ScrollView>
  );
};
